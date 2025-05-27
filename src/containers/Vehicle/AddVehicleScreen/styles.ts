import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleHeight(16),
    paddingHorizontal: scaleWidth(20),
    backgroundColor: Colors.Neutral_0,
  },
  textTitle: {
    color: Colors.Neutral_900,
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
  btnAddVehicle: {
    width: '100%',
    height: scaleHeight(56),
    backgroundColor: Colors.Primary_500,
    borderRadius: Radius._XLARGE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: Colors.Neutral_0,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_BOLD,
  },
  textSwitch: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  footer: {
    flex: 1,
    gap: Gap._XLARGE,
  },
});
