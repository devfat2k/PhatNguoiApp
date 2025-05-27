import { StyleSheet } from 'react-native';
import { Colors } from '@src/utils';
import { scaleFont, scaleHeight } from '@src/utils/styles/mixins';
import { Size, Radius, Padding, Gap } from '@src/utils/styles/spacing';
import { FONT_FAMILY_MEDIUM, FONT_WEIGHT_MEDIUM, TypographyStyle } from '@src/utils/styles/typography';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: Gap._MEDIUM,
    marginBottom: scaleHeight(16),
  },
  containerInput: {
    width: '100%',
    height: Size._3XLARGE,
    backgroundColor: Colors.Neutral_0,
    borderRadius: Radius._XLARGE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Padding._XLARGE,
    borderWidth: 1,
    borderColor: Colors.Neutral_200,
  },
  input: {
    width: '100%',
    height: Size._3XLARGE,
    backgroundColor: 'transparent',
    textAlign: 'left',
    color: Colors.Neutral_900,
    fontSize: scaleFont(16),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  textTitle: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  errorText: {
    color: '#F04438',
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap._SMALL,
  },
});
