import { ToastContainer } from '@src/components';
import React from 'react';

export type ToastType = Pick<ToastContainer, 'show' | 'update' | 'hide' | 'hideAll' | 'isOpen'>;

const ToastContext = React.createContext({} as ToastType);

export default ToastContext;
