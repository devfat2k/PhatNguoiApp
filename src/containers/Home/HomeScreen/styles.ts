import { StyleSheet } from 'react-native';
import { Gap, Padding, Radius, Size } from '@src/utils/styles/spacing';
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
  containerOptionVehicle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap._LARGE,
    paddingTop: scaleHeight(8),
  },
  btnVehicle: {
    width: scaleWidth(80),
    height: scaleHeight(74),
    borderRadius: Radius._LARGE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Neutral_50,
    gap: Gap._MEDIUM,
  },
  btnVehicleActive: {
    width: scaleWidth(80),
    height: scaleHeight(74),
    borderRadius: Radius._LARGE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECFDF3',
    borderWidth: 1,
    borderColor: Colors.Primary_500,
    gap: Gap._MEDIUM,
  },
  textVehicle: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  textVehicleActive: {
    color: Colors.Primary_500,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  btnSearch: {
    width: '100%',
    height: Size._4XLARGE,
    borderRadius: Radius._XLARGE,
    backgroundColor: Colors.Primary_500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSearch: {
    color: Colors.Neutral_0,
    textAlign: 'center',
    ...TypographyStyle.BODY_MEDIUM_TIGHT_BOLD,
  },
});
