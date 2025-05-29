import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap } from '@src/utils/styles/spacing';
import { GlobalCenter, TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    zIndex: 999,
  },
  drawer: {
    paddingHorizontal: scaleWidth(12),
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  containerOptions: {
    width: '100%',
    height: scaleHeight(56),
    paddingHorizontal: scaleWidth(2),
    ...GlobalCenter.centerBetween,
  },
  textLabel: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  center: {
    gap: Gap._LARGE,
    ...GlobalCenter.center,
  },
});

export default styles;
