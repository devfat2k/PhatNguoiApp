import { Colors } from '@src/utils';
import { scaleHeight, scaleSize } from '@src/utils/styles/mixins';
import { Gap, Padding, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleHeight(8),
  },
  textLabel: {
    color: Colors.Neutral_500,
    textAlign: 'center',
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  textLabelActive: {
    color: Colors.Primary_500,
    textAlign: 'center',
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Padding._LARGE,
    width: scaleSize(80),
    height: scaleSize(74),
    backgroundColor: Colors.Neutral_50,
    borderRadius: Radius._LARGE,
    borderWidth: 1,
    borderColor: Colors.Neutral_50,
    gap: Gap._SMALL,
  },
  activeItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: scaleSize(80),
    height: scaleSize(74),
    backgroundColor: Colors.Primary_50,
    borderRadius: Radius._LARGE,
    borderWidth: 1,
    borderColor: Colors.Primary_500,
    gap: Gap._SMALL,
  },
  sceneFallback: {
    flex: 1,
    backgroundColor: Colors.Neutral_0,
    alignItems: 'center',
    marginTop: Padding._3XLARGE,
  },
  line: {
    width: '100%',
    height: scaleSize(1.5),
    // backgroundColor: Colors.Primary_500,
  },
  countContainerActive: {
    width: scaleSize(80),
    height: scaleSize(74),
    backgroundColor: Colors.Primary_500,
    borderRadius: Radius.FULL,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  countContainerInActive: {
    width: scaleSize(80),
    height: scaleSize(74),
    backgroundColor: Colors.Neutral_50,
    borderRadius: Radius.FULL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCountInActive: {
    color: Colors.Neutral_800,
    ...TypographyStyle.BODY_SMALL_NORMAL_MEDIUM,
  },
  textCountActive: {
    color: Colors.Neutral_0,
    ...TypographyStyle.BODY_SMALL_NORMAL_MEDIUM,
  },
  itemTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap._MEDIUM,
    marginBottom: Gap._MEDIUM,
  },
});
