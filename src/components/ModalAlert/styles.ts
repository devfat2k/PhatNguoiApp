import { Colors } from '@src/utils';
import { scaleHeight, scaleSize } from '@src/utils/styles/mixins';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: scaleSize(24),
    overflow: 'hidden',
    width: '100%',
    minHeight: scaleHeight(220),
    justifyContent: 'center',
  },
  modalStyle: {
    margin: 0,
    paddingHorizontal: scaleSize(16),
  },
});
