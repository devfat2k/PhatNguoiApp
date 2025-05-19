import { scaleSize } from './mixins';

export const SCALE_18 = scaleSize(18);
export const SCALE_16 = scaleSize(16);
export const SCALE_12 = scaleSize(12);
export const SCALE_8 = scaleSize(8);

export enum Padding {
  _12XLARGE = scaleSize(80),
  _11XLARGE = scaleSize(64),
  _10XLARGE = scaleSize(56),
  _9XLARGE = scaleSize(48),
  _8XLARGE = scaleSize(44),
  _7XLARGE = scaleSize(40),
  _6XLARGE = scaleSize(36),
  _5XLARGE = scaleSize(32),
  _4XLARGE = scaleSize(28),
  _3XLARGE = scaleSize(24),
  _2XLARGE = scaleSize(20),
  _XLARGE = scaleSize(16),
  _LARGE = scaleSize(12),
  _MEDIUM = scaleSize(8),
  _SMALL = scaleSize(4),
  _XSMALL = scaleSize(2),
  NULL = 0,
}

export enum Gap {
  _12XLARGE = scaleSize(80),
  _11XLARGE = scaleSize(64),
  _10XLARGE = scaleSize(56),
  _9XLARGE = scaleSize(48),
  _8XLARGE = scaleSize(44),
  _7XLARGE = scaleSize(40),
  _6XLARGE = scaleSize(36),
  _5XLARGE = scaleSize(32),
  _4XLARGE = scaleSize(28),
  _3XLARGE = scaleSize(24),
  _2XLARGE = scaleSize(20),
  _XLARGE = scaleSize(16),
  _LARGE = scaleSize(12),
  _MEDIUM = scaleSize(8),
  _SMALL = scaleSize(4),
  _XSMALL = scaleSize(2),
  NULL = 0,
}

export enum Radius {
  FULL = 999,
  _2XSMALL = scaleSize(2),
  _XSMALL = scaleSize(4),
  _SMALL = scaleSize(6),
  _MEDIUM = scaleSize(8),
  _LARGE = scaleSize(12),
  _XLARGE = scaleSize(16),
  _2XLARGE = scaleSize(20),
  _3XLARGE = scaleSize(24),
  _4XLARGE = scaleSize(32),
  NULL = 0,
}

export enum Size {
  _6XLARGE = scaleSize(80),
  _5XLARGE = scaleSize(64),
  _4XLARGE = scaleSize(56),
  _3XLARGE = scaleSize(48),
  _2XLARGE = scaleSize(44),
  _XLARGE = scaleSize(40),
  _LARGE = scaleSize(28),
  _MEDIUM = scaleSize(32),
  _SMALL = scaleSize(24),
  _2XSMALL = scaleSize(20),
  _3XSMALL = scaleSize(16),
  _4XSMALL = scaleSize(12),
  _5XSMALL = scaleSize(8),
  NULL = 0,
}

export const CornerRadius = {
  None: 0,
  S: 2,
  M: 4,
  L: 8,
  XL: 12,
  Full: 999,
};
