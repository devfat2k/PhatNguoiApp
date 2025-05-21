import { Colors } from '@src/utils';
import React, { FC } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

interface MyDividerProps {
  height?: number;
  width?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const MyDivider: FC<MyDividerProps> = props => {
  const { height, width, color, style } = props;

  const dividerStyle: {} = {
    height,
    width: width || '100%',
    backgroundColor: color || Colors.Neutral_100,
  };

  return <View style={[dividerStyle, style]} />;
};

export default MyDivider;
