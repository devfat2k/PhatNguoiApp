import { Colors } from '@src/utils';
import { scaleHeight, scaleSize, scaleWidth } from '@src/utils/styles/mixins';
import { Dimensions, Platform, StyleSheet } from 'react-native';
const Screen = Dimensions.get('screen');
const TAB_BAR_PADDING_BOTTOM = Platform.OS === 'ios' ? scaleSize(25) : 0;
const TAB_BAR_HEIGHT: number = scaleSize(65) + TAB_BAR_PADDING_BOTTOM;
export const ITEM_WIDTH: number = Screen.width / 4;
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.Neutral_0,
    height: TAB_BAR_HEIGHT,
    paddingBottom: scaleHeight(15),
    borderTopWidth: scaleWidth(0.5),
    borderColor: '#0000001F',
  },
  itemContainer: {
    width: ITEM_WIDTH,
    // height: TAB_BAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    gap: scaleHeight(2),
  },
});

export default styles;
