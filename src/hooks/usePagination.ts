import { useEffect, useRef, useState } from 'react';
import { apiBase } from '@src/api';
import { statusCode } from '@src/types/api';

export type usePaginationResult<T, Q = any> = {
  isLoading: boolean;
  listItem?: T[];
  defaultListItem: T[];
  totalItems?: number;
  fetchData: (query?: Q | any) => void;
  onRefresh: () => void;
  onSearch: (keyWord: string) => void;
  updateLink: (newLink: string) => void;
  updateList: (callBackReturnNewList: (listItem: T[]) => T[]) => void;
  updateQuery: (query: Q) => void;
  statusCounts?: any;
};

const usePagination = <T, Q = any>(
  link: string,
  config?: {
    isLazy?: boolean;
    params?: any;
  },
  convertData?: (listItem: T[]) => T[],
): usePaginationResult<T, Q> => {
  const page = useRef(1);
  const keyword = useRef<string>('');
  let totalPages = useRef<number | null>(null);
  let totalItems = useRef<number>(0);
  let statusCounts = useRef<null>(null);
  const limit = 20;
  const listItem = useRef<T[]>([]);
  const defaultListItem = useRef<T[]>([]);
  const currentLink = useRef<string>(link);
  const [isLoading, setIsLoading] = useState(false);
  const query = useRef<Q>(config?.params || {});

  const fetchData = async () => {
    if (isLoading) {
      return;
    }
    if (totalPages.current !== null && page.current > totalPages.current) {
      return;
    }
    const params =
      keyword.current === ''
        ? {
            page: page.current,
            limit: limit,
            ...query.current,
          }
        : { page: page.current, limit: limit, search: keyword.current, ...query.current };
    setIsLoading(true);
    try {
      const res = await apiBase<any>('GET', currentLink.current, undefined, {
        ...config,
        params,
      });
      if (res.statusCode === statusCode.SUCCESS) {
        page.current = page.current + 1;
        totalItems.current = res?.data?.totalCount || 0;
        totalPages.current = res?.data?.totalPage || 0;
        statusCounts.current = res?.data?.statusCounts || null;
        if (convertData) {
          const newList = convertData(res.data?.data || []);
          const uniqueNewList = newList.filter(
            (newItem: any) => !listItem.current.some((existingItem: any) => existingItem._id === newItem._id),
          );
          listItem.current = [...listItem.current, ...uniqueNewList];
          defaultListItem.current = [...defaultListItem.current, ...uniqueNewList];
        } else {
          const uniqueData = (res.data?.data || []).filter(
            (newItem: any) => !listItem.current.some((existingItem: any) => existingItem._id === newItem._id),
          );
          listItem.current = [...listItem.current, ...uniqueData];
          defaultListItem.current = [...defaultListItem.current, ...uniqueData];
        }
      }
    } catch (err) {
      console.log('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    page.current = 1;
    totalPages.current = null;
    setIsLoading(false);
    listItem.current = [];
    defaultListItem.current = [];
  };

  const onRefresh = () => {
    reset();
    keyword.current = '';
    fetchData();
  };

  const onSearch = (keyWord: string) => {
    keyword.current = keyWord.trim();
    reset();
    fetchData();
  };

  const updateLink = (newLink: string) => {
    currentLink.current = newLink;
    onRefresh();
  };

  const updateList = (callBackReturnNewList: (listItem: any[]) => any[]) => {
    setIsLoading(true);
    listItem.current = callBackReturnNewList(listItem.current);
    setIsLoading(false);
  };

  const updateQuery = (newQuery: any) => {
    query.current = newQuery;
    onRefresh();
  };

  useEffect(() => {
    if (!config || !config.isLazy) {
      fetchData();
    }
  }, []);

  return {
    isLoading,
    listItem: listItem.current,
    defaultListItem: defaultListItem.current,
    totalItems: totalItems.current,
    statusCounts: statusCounts.current,
    fetchData,
    onRefresh,
    onSearch,
    updateLink,
    updateList,
    updateQuery,
  };
};

export default usePagination;
