import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../styles/index.js';

const { width, height } = Dimensions.get('window');
const PHONE_MAX_WIDTH = 430;
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;
const usableWidth = Math.min(width, PHONE_MAX_WIDTH);
const widthRatio = usableWidth / BASE_WIDTH;
const heightRatio = Math.min(height, BASE_HEIGHT) / BASE_HEIGHT;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const scale = (value, min = value * 0.86, max = value) =>
  Math.round(clamp(value * widthRatio, min, max));
const verticalScale = (value, min = value * 0.78, max = value) =>
  Math.round(clamp(value * heightRatio, min, max));

const HEADER_HEIGHT = verticalScale(150, 118, 150);
const NAV_HEIGHT = verticalScale(64, 58, 66);

export const styles = StyleSheet.create({
  forgotLink: {
    fontSize: 12,
    color: '#9A9A9A',
    textDecorationLine: 'underline',
    marginTop: -8,
  },

  loginButton: {
    marginTop: 42,
    backgroundColor: colors.primary,
    borderRadius: 13,
    width: 88,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },

  loginForm: {
    width: '100%',
    alignItems: 'center',
    gap: 24,
  },

  loginPage: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
    alignItems: 'center',
    paddingHorizontal: scale(34, 22, 34),
    paddingTop: verticalScale(95, 54, 95),
  }
});
