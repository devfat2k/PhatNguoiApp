import { Colors } from '@src/utils';
import { scaleWidth, scaleHeight } from '@src/utils/styles/mixins';
import { Radius } from '@src/utils/styles/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightComponent: {
    width: scaleWidth(80),
    height: scaleHeight(88),
    borderRadius: Radius._LARGE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Red_50,
    marginLeft: scaleWidth(12),
  },
});
