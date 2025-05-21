import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleWidth(20),
    paddingTop: scaleHeight(16),
    backgroundColor: Colors.Neutral_0,
  },
  text: {
    flexWrap: 'wrap',
    width: '90%',
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
});
