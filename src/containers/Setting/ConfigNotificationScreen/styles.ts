import { scaleWidth } from '@src/utils/styles/mixins';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleWidth(16),
  },
});
