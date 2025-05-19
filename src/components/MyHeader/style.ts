import { TypographyStyle } from '@src/utils/styles/typography';
import { Colors } from '@src/utils/styles/color';
import { scaleSize } from '@src/utils/styles/mixins';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: scaleSize(56),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleSize(20),
    justifyContent: 'space-between',
    marginVertical: scaleSize(4),
    width: '100%',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerSide: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.Primary_500,
    ...TypographyStyle.HEADING_H3,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBack: {
    width: scaleSize(24),
    height: scaleSize(24),
    marginRight: scaleSize(12),
  },
});

export default styles;
