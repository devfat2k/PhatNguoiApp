import React, { FC } from 'react';
import { Portal } from 'react-native-paper';
import LoadingAnimation from './CircleAnimationLoading';
import { GlobalContext } from './context';

const Loading: FC = () => {
  const { visibleLoading } = React.useContext(GlobalContext);
  return <Portal>{visibleLoading && <LoadingAnimation />}</Portal>;
};

export { Loading };
