import { Dispatch, useState, ReactElement } from 'react';
import { ImageStyle, TextProps, TextStyle, ViewStyle } from 'react-native';
import Toast from 'react-native-toast-message';
import { NavigationProp } from '@react-navigation/native';
import { ToastMessageProps } from '@src/types/toastMessage';

interface IModal {
  parentStyle?: ViewStyle;
  backdropStyle?: ViewStyle;
  onClose?: () => void;
  title?: string;
  numberLines?: number;
  titleProps?: TextProps;
  description?: string;
  descriptionProps?: TextProps;
  customDescriptionText?: () => React.ReactNode;
  iconUri?: string;
  cancelText?: string;
  confirmText?: string;
  cancelTextStyle?: TextStyle;
  confirmTextStyle?: TextStyle;
  onConfirm?: () => void;
  onCancel?: () => void;
  closeOnBackdropPress?: boolean;
  confirmButtonStyle?: ViewStyle;
  cancelButtonStyle?: ViewStyle;
  iconStyle?: ImageStyle;
  navigateToProfile?: boolean;
  isHideCloseBtn?: boolean;
  contentComponent?: () => ReactElement;
  customContentButton?: () => ReactElement;
}

interface IModalSearchState {
  onClose?: () => void;
  children?: React.ReactNode;
}

interface IWebViewModalState {
  handleBack?: () => void;
  source: string;
  titleWebView?: string;
}

export const useGlobal = (): UseGlobalStateType => {
  const [navigationPortal, setNavigationPortal] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalSearch, setVisibleModalSearch] = useState(false);
  const [visibleWebViewModal, setVisibleWebViewModal] = useState(false);
  const [visibleLoading, setVisibleLoading] = useState(false);
  const [visibleBottomSheet, setVisibleBottomSheet] = useState(false);
  const [visibleBottomSheetBuy, setVisibleBottomSheetBuy] = useState(false);
  const [visibleBottomSheetFilter, setVisibleBottomSheetFilter] = useState(false);
  const [navigationContext, setNavigation] = useState<any>(null);
  const [isShowTooltipOverlay, setIsShowTooltipOverlay] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<IModal>({
    parentStyle: {},
    backdropStyle: {},
    onClose: () => handleModal(false),
    title: '',
    description: '',
    iconUri: '',
    cancelText: '',
    confirmText: '',
    onConfirm: () => {},
    onCancel: () => {},
    closeOnBackdropPress: true,
    confirmButtonStyle: {},
    cancelButtonStyle: {},
    confirmTextStyle: {},
    cancelTextStyle: {},
  });

  const [tooltipStep, setTooltip] = useState('none');

  const setTooltipStep = (val: string) => {
    setTooltip(val);
  };

  const [modalSearchProps, setModalSearchProps] = useState<IModalSearchState>({
    onClose: () => handleModal(false),
    children: null,
  });
  const [webViewModalProps, setWebViewModalProps] = useState<IWebViewModalState>({
    handleBack: () => {
      handleWebViewModal(false);
    },
    source: '',
    titleWebView: '',
  });
  const [tabBarVisible, setTabBarVisible] = useState<boolean | undefined>(undefined);

  const handleBottomSheet = (value: boolean) => {
    setVisibleBottomSheet(value ?? false);
  };

  const handleBottomSheetBuy = (value: boolean) => {
    setVisibleBottomSheetBuy(value ?? false);
  };

  const handleBottomSheetFilter = (value: boolean) => {
    setVisibleBottomSheetFilter(value ?? false);
  };

  const handleModal = (namePortal: Boolean) => {
    if (namePortal) {
      setVisibleModal(true);
      return;
    }
    setVisibleModal(false);
  };

  const handleModalSearch = (namePortal: Boolean) => {
    if (namePortal) {
      setVisibleModalSearch(true);
      return;
    }
    setVisibleModalSearch(false);
  };

  const handleWebViewModal = (value: boolean) => {
    setVisibleWebViewModal(value ?? false);
  };

  const handleLoading = (namePortal: Boolean) => {
    if (namePortal) {
      return setVisibleLoading(true);
    }
    return setVisibleLoading(false);
  };

  const toggleTooltipOverLay = (val: boolean) => {
    setIsShowTooltipOverlay(val);
  };

  const getNavigation = (navigation: any) => {
    return setNavigation(navigation);
  };

  const statusHandleNavigationPortal = () => {
    return navigationPortal;
  };

  const handleNavigationPortal = (screen: string) => {
    return setNavigationPortal(screen);
  };

  const showMessage = (p: ToastMessageProps) => {
    const myProps = {
      ...p,
      position: p.position || 'bottom',
      visibilityTime: p.visibilityTime || 1500,
      swipeable: p.swipeable || false,
      props: {
        ...p.props,
        text: p.text,
      },
    };
    Toast.show(myProps);
  };

  return {
    handleModal,
    handleLoading,
    visibleModal,
    visibleLoading,
    getNavigation,
    navigationContext,
    modalProps,
    setModalProps,
    tabBarVisible,
    setTabBarVisible,
    showMessage,
    handleBottomSheet,
    handleBottomSheetBuy,
    handleBottomSheetFilter,
    visibleBottomSheet,
    visibleBottomSheetBuy,
    visibleBottomSheetFilter,
    handleModalSearch,
    visibleModalSearch,
    modalSearchProps,
    setModalSearchProps,
    handleNavigationPortal,
    statusHandleNavigationPortal,
    tooltipStep,
    setTooltipStep,
    handleWebViewModal,
    visibleWebViewModal,
    webViewModalProps,
    setWebViewModalProps,
    toggleTooltipOverLay,
    isShowTooltipOverlay,
  };
};

export type UseGlobalStateType = {
  handleModal: (namePortal: Boolean) => void;
  handleModalSearch: (namePortal: Boolean) => void;
  handleLoading: (namePortal: Boolean) => void;
  visibleModal: boolean;
  visibleLoading: boolean;
  getNavigation: (navigation: any) => void;
  navigationContext: NavigationProp<any>;
  modalProps: IModal;
  setModalProps: Dispatch<IModal>;
  tabBarVisible: boolean | undefined;
  setTabBarVisible: Dispatch<boolean | undefined>;
  showMessage: (props: ToastMessageProps) => void;
  visibleBottomSheet: boolean;
  visibleBottomSheetBuy: boolean;
  visibleBottomSheetFilter: boolean;
  handleBottomSheet: (value: boolean) => void;
  handleBottomSheetBuy: (value: boolean) => void;
  handleBottomSheetFilter: (value: boolean) => void;
  visibleModalSearch: boolean;
  modalSearchProps: IModalSearchState;
  setModalSearchProps: Dispatch<IModalSearchState>;
  handleNavigationPortal: (screen: string) => void;
  statusHandleNavigationPortal: () => {};
  tooltipStep: number;
  setTooltipStep: (val: number) => void;
  handleWebViewModal: (value: boolean) => void;
  visibleWebViewModal: boolean;
  webViewModalProps: IWebViewModalState;
  setWebViewModalProps: Dispatch<IWebViewModalState>;
  isShowTooltipOverlay: boolean;
  toggleTooltipOverLay: (val: boolean) => void;
};
