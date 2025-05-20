import { ToastShowParams } from 'react-native-toast-message';

export interface ToastMessageProps extends ToastShowParams {
  type?: 'success' | 'error' | 'info' | 'warning' | 'default' | 'online' | 'offline';
  text?: string;
}
