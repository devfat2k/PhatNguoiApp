import { Colors } from '@src/utils';
import { scaleHeight } from '@src/utils/styles/mixins';
import { Padding, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding._2XLARGE,
  },
  btnLogout: {
    width: '100%',
    height: scaleHeight(56),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius._XLARGE,
    borderWidth: 1,
    borderColor: Colors.Primary_500,
  },
  textBtn: {
    color: Colors.Primary_500,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_REGULAR,
  },
});
