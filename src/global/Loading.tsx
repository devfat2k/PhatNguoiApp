import React, { FC, useContext } from 'react';
import { Portal } from 'react-native-paper';
import LoadingAnimation from './CircleAnimationLoading';
import { GlobalContext } from '@src/context';

const Loading: FC = () => {
  const { visibleLoading } = useContext(GlobalContext);
  return <Portal>{visibleLoading && <LoadingAnimation />}</Portal>;
};

export { Loading };
