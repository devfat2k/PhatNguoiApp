import { StyleSheet } from 'react-native';
import { Padding, Radius } from '@src/utils/styles/spacing';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Colors } from '@src/utils';
import { TypographyStyle } from '@src/utils/styles/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding._2XLARGE,
  },
  containerTopTab: {
    width: '100%',
    height: scaleHeight(44),
    backgroundColor: Colors.Neutral_100,
    borderRadius: Radius._XLARGE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scaleWidth(4),
  },
  btnTabActive: {
    width: '50%',
    height: scaleHeight(36),
    backgroundColor: Colors.Neutral_0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius._LARGE,
  },
  btnTabInActive: {
    width: '50%',
    height: scaleHeight(36),
    backgroundColor: Colors.Neutral_100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius._LARGE,
  },
  textInActive: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  textActive: {
    color: Colors.Primary_500,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  textSelectVehicle: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
});
