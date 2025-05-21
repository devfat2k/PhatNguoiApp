import { AxiosResponse } from 'axios';

export const statusCode = {
  SUCCESS: 200,
  SUCCESS_201: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const apiMessage = {
  CLIENT_ERROR: 'Client error',
  SERVER_ERROR: 'Server error',
  TIMEOUT_ERROR: 'Can not connect to server - timeout',
  CONNECTION_ERROR: 'Can not connect to server',
  NETWORK_ERROR: 'Network invalid!',
  UNKNOWN_ERROR: 'Unknown error',
  TOKEN_INVALID: 'Token invalid',
  MUST_UPGRADE_TO_PREMIUM: 'MUST_UPGRADE_TO_PREMIUM',
};
export interface ApiResponseData<T = undefined> {
  data?: T;
  message: string | null;
  error: string | null;
  statusCode: number;
}

export interface ListData<T = undefined> {
  data: T[];
  page: string | number;
  limit: number;
  totalCount: number;
  totalInList: number;
  totalPage: number;
}

export interface ApiResponseListData<T = undefined> extends ApiResponseData<ListData<T>> {}

export type AxiosResponseBWData<T = undefined> = AxiosResponse<ApiResponseData<T>>;
export type AxiosResponseListData<T = undefined> = AxiosResponse<ApiResponseListData<T>>;
