import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const PHONE_MAX_WIDTH = 430;
export const BASE_WIDTH = 390;
export const BASE_HEIGHT = 844;

const usableWidth = Math.min(width, PHONE_MAX_WIDTH);
const widthRatio = usableWidth / BASE_WIDTH;
const heightRatio = Math.min(height, BASE_HEIGHT) / BASE_HEIGHT;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const scale = (value, min = value * 0.86, max = value) =>
  Math.round(clamp(value * widthRatio, min, max));

export const verticalScale = (value, min = value * 0.78, max = value) =>
  Math.round(clamp(value * heightRatio, min, max));

export const HEADER_HEIGHT = verticalScale(150, 118, 150);
export const NAV_HEIGHT = verticalScale(64, 58, 66);
