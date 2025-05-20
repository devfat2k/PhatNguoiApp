import { StyleSheet, TextStyle } from 'react-native';
import { scaleFont, scaleHeight } from './mixins';

export const FONT_FAMILY_BLACK = 'Poppins-Black';
export const FONT_FAMILY_BOLD = 'Poppins-Bold';
export const FONT_FAMILY_EXTRABOLD = 'Poppins-ExtraBold';
export const FONT_FAMILY_EXTRALIGHT = 'Poppins-ExtraLight';
export const FONT_FAMILY_LIGHT = 'Poppins-Light';
export const FONT_FAMILY_MEDIUM = 'Poppins-Medium';
export const FONT_FAMILY_REGULAR = 'Poppins-Regular';
export const FONT_FAMILY_SEMIBOLD = 'Poppins-SemiBold';
export const FONT_FAMILY_THIN = 'Poppins-Thin';

export const FONT_WEIGHT_REGULAR = '400' as TextStyle['fontWeight'];
export const FONT_WEIGHT_MEDIUM = '500' as TextStyle['fontWeight'];
export const FONT_WEIGHT_SEMIBOLD = '600' as TextStyle['fontWeight'];
export const FONT_WEIGHT_BOLD = '700' as TextStyle['fontWeight'];
export const FONT_WEIGHT_XTRABOLD = '900' as TextStyle['fontWeight'];

export const FONT_SIZE_8 = scaleFont(8);
export const FONT_SIZE_10 = scaleFont(10);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_48 = scaleFont(48);
export const FONT_SIZE_64 = scaleFont(64);

export const LINE_HEIGHT_8 = scaleHeight(8);
export const LINE_HEIGHT_10 = scaleHeight(12);
export const LINE_HEIGHT_12 = scaleHeight(15);
export const LINE_HEIGHT_14 = scaleHeight(17);
export const LINE_HEIGHT_16 = scaleHeight(20);
export const LINE_HEIGHT_18 = scaleHeight(23);
export const LINE_HEIGHT_20 = scaleHeight(24);
export const LINE_HEIGHT_24 = scaleHeight(29);
export const LINE_HEIGHT_32 = scaleHeight(39);
export const LINE_HEIGHT_48 = scaleHeight(59);
export const LINE_HEIGHT_64 = scaleHeight(78);

export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};
export const DEFAULT_FONTSIZE = 14;
export const DEFAULT_LINEHEIGHT = 16.94;

export const calLineHeight = (fontSize = 14) => {
  return Math.round(fontSize * (DEFAULT_LINEHEIGHT / DEFAULT_FONTSIZE));
};
// label bold

export const TypographyStyle = StyleSheet.create({
  DISPLAY_1: {
    fontSize: scaleFont(52),
    lineHeight: calLineHeight(scaleFont(64)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  DISPLAY_2: {
    fontSize: scaleFont(44),
    lineHeight: calLineHeight(scaleFont(56)),
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  DISPLAY_3: {
    fontSize: scaleFont(36),
    lineHeight: calLineHeight(scaleFont(44)),
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  HEADING_H1: {
    fontSize: scaleFont(32),
    lineHeight: calLineHeight(scaleFont(40)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  HEADING_H2: {
    fontSize: scaleFont(28),
    lineHeight: calLineHeight(scaleFont(36)),
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  HEADING_H3: {
    fontSize: scaleFont(24),
    lineHeight: calLineHeight(scaleFont(32)),
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  HEADING_H4: {
    fontSize: scaleFont(20),
    lineHeight: calLineHeight(scaleFont(32)),
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  BODY_LARGE_NORMAL_BOLD: {
    fontSize: scaleFont(18),
    lineHeight: calLineHeight(scaleFont(28)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_LARGE_NORMAL_MEDIUM: {
    fontSize: scaleFont(18),
    lineHeight: calLineHeight(scaleFont(28)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  BODY_LARGE_NORMAL_REGULAR: {
    fontSize: scaleFont(18),
    lineHeight: calLineHeight(scaleFont(28)),
    fontWeight: FONT_WEIGHT_REGULAR,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  BODY_LARGE_TIGHT_BOLD: {
    fontSize: scaleFont(18),
    lineHeight: calLineHeight(scaleFont(18)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_LARGE_TIGHT_MEDIUM: {
    fontSize: scaleFont(18),
    lineHeight: calLineHeight(scaleFont(18)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_LARGE_TIGHT_REGULAR: {
    fontSize: scaleFont(18),
    lineHeight: calLineHeight(scaleFont(18)),
    fontWeight: FONT_WEIGHT_REGULAR,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  BODY_MEDIUM_NORMAL_BOLD: {
    fontSize: scaleFont(16),
    lineHeight: calLineHeight(scaleFont(26)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_MEDIUM_NORMAL_MEDIUM: {
    fontSize: scaleFont(16),
    lineHeight: calLineHeight(scaleFont(26)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  BODY_MEDIUM_NORMAL_REGULAR: {
    fontSize: scaleFont(16),
    lineHeight: calLineHeight(scaleFont(26)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  BODY_MEDIUM_TIGHT_BOLD: {
    fontSize: scaleFont(16),
    lineHeight: calLineHeight(scaleFont(16)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_MEDIUM_TIGHT_MEDIUM: {
    fontSize: scaleFont(16),
    lineHeight: calLineHeight(scaleFont(18)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  BODY_MEDIUM_TIGHT_REGULAR: {
    fontSize: scaleFont(16),
    lineHeight: calLineHeight(scaleFont(16)),
    fontWeight: FONT_WEIGHT_REGULAR,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  BODY_REGULAR_NORMAL_BOLD: {
    fontSize: scaleFont(14),
    lineHeight: calLineHeight(scaleFont(24)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_REGULAR_NORMAL_MEDIUM: {
    fontSize: scaleFont(14),
    lineHeight: calLineHeight(scaleFont(24)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_EXTRABOLD,
  },
  BODY_REGULAR_NORMAL_REGULAR: {
    fontSize: scaleFont(14),
    lineHeight: calLineHeight(scaleFont(24)),
    fontWeight: FONT_WEIGHT_REGULAR,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  BODY_REGULAR_TIGHT_BOLD: {
    fontSize: scaleFont(14),
    lineHeight: calLineHeight(scaleFont(14)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_REGULAR_TIGHT_MEDIUM: {
    fontSize: scaleFont(14),
    // lineHeight: calLineHeight(scaleFont(14)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  BODY_REGULAR_TIGHT_REGULAR: {
    fontSize: scaleFont(14),
    lineHeight: calLineHeight(scaleFont(14)),
    fontWeight: FONT_WEIGHT_REGULAR,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  BODY_SMALL_NORMAL_BOLD: {
    fontSize: scaleFont(12),
    lineHeight: calLineHeight(scaleFont(18)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_SMALL_NORMAL_MEDIUM: {
    fontSize: scaleFont(12),
    lineHeight: calLineHeight(scaleFont(18)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  BODY_SMALL_NORMAL_REGULAR: {
    fontSize: scaleFont(12),
    lineHeight: calLineHeight(scaleFont(18)),
    fontWeight: FONT_WEIGHT_REGULAR,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  BODY_SMALL_TIGHT_BOLD: {
    fontSize: scaleFont(12),
    lineHeight: calLineHeight(scaleFont(12)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_SMALL_TIGHT_MEDIUM: {
    fontSize: scaleFont(12),
    lineHeight: calLineHeight(scaleFont(12)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  BODY_SMALL_TIGHT_REGULAR: {
    fontSize: scaleFont(12),
    lineHeight: calLineHeight(scaleFont(12)),
    fontWeight: FONT_WEIGHT_REGULAR,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  BODY_TINY_NORMAL_BOLD: {
    fontSize: scaleFont(10),
    lineHeight: calLineHeight(scaleFont(16)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_TINY_NORMAL_MEDIUM: {
    fontSize: scaleFont(10),
    lineHeight: calLineHeight(scaleFont(16)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  BODY_TINY_NORMAL_REGULAR: {
    fontSize: scaleFont(10),
    lineHeight: calLineHeight(scaleFont(16)),
    fontWeight: FONT_WEIGHT_REGULAR,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  BODY_TINY_TIGHT_BOLD: {
    fontSize: scaleFont(10),
    lineHeight: calLineHeight(scaleFont(10)),
    fontWeight: FONT_WEIGHT_BOLD,
    fontFamily: FONT_FAMILY_BOLD,
  },
  BODY_TINY_TIGHT_MEDIUM: {
    fontSize: scaleFont(10),
    lineHeight: calLineHeight(scaleFont(10)),
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  BODY_TINY_TIGHT_REGULAR: {
    fontSize: scaleFont(10),
    // lineHeight: calLineHeight(scaleFont(10)),
    fontWeight: FONT_WEIGHT_REGULAR,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});

export const GlobalCenter = StyleSheet.create({
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
