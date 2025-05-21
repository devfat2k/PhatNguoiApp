import React, { FC } from 'react';
import { View, TouchableOpacity, Text, ViewStyle } from 'react-native';
import { goBack as GoBack } from '../../navigation/RootNavigation';
import { BackIcon } from '@utils/icon';
import { scaleWidth } from '@utils/styles/mixins';
import styles from './style';
import { Colors } from '@src/utils';

interface MyHeaderProps {
  title?: string;
  goBack?: boolean | Function;
  titleGoBackComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
  containerHeaderStyle?: ViewStyle;
  icon?: any;
  premium?: boolean;
  titleColor?: string;
}

const MyHeader: FC<MyHeaderProps> = ({
  title,
  leftComponent,
  rightComponent,
  goBack = false,
  containerHeaderStyle,
  icon,
  titleColor,
}) => {
  return (
    <View style={[styles.container, containerHeaderStyle]}>
      <View style={styles.leftSide}>
        {goBack && !leftComponent ? (
          <TouchableOpacity
            onPress={() => {
              if (typeof goBack === 'function') {
                goBack();
              } else {
                GoBack();
              }
            }}
            hitSlop={{ top: 50, bottom: 10, left: 50, right: 50 }}
          >
            {icon ? icon : <BackIcon />}
          </TouchableOpacity>
        ) : null}

        {title ? (
          <Text
            numberOfLines={1}
            style={[
              styles.title,
              {
                color: titleColor ? titleColor : Colors.Primary_500,
                marginLeft: goBack ? scaleWidth(8) : 0,
              },
            ]}
          >
            {title}
          </Text>
        ) : null}
        {leftComponent && leftComponent}
      </View>

      <View style={styles.rightSide}>{rightComponent && rightComponent}</View>
    </View>
  );
};

export default MyHeader;
