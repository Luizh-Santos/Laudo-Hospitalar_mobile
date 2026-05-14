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
  resendButton: {
  marginTop: 22,
  width: 130,
  height: 32,
  borderWidth: 1.3,
  borderColor: colors.primary,
  borderRadius: 7,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.white,
},

  resendButtonText: {
  fontSize: 12,
  color: colors.text,
},

  resetBack: {
  position: 'absolute',
  left: scale(18, 14, 18),
  top: verticalScale(75, 44, 75),
},

  resetButton: {
  marginTop: 42,
  height: 36,
  paddingHorizontal: 22,
  borderRadius: 9,
  backgroundColor: colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 5,
},

  resetButtonText: {
  color: colors.white,
  fontSize: 13,
  fontWeight: '700',
},

  resetInput: {
  width: 220,
  height: 36,
  borderWidth: 1.5,
  borderColor: colors.primary,
  borderRadius: 7,
  backgroundColor: colors.white,
  paddingHorizontal: 10,
  paddingVertical: 0,
  fontSize: 13,
  color: colors.text,
  textAlign: 'center',
},

  resetInstruction: {
  marginTop: verticalScale(70, 36, 70),
  marginBottom: verticalScale(55, 30, 55),
  fontSize: 15,
  fontWeight: '800',
  color: colors.text,
  textAlign: 'center',
  paddingHorizontal: 28,
},

  resetLogo: {
  width: scale(125, 102, 125),
  height: scale(125, 102, 125),
  resizeMode: 'contain',
  marginBottom: verticalScale(80, 42, 80),
},

  resetOption: {
  width: 230,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 28,
},

  resetOptionText: {
  marginLeft: 10,
  fontSize: 13,
  color: colors.text,
},

  resetPage: {
  flex: 1,
  width: '100%',
  backgroundColor: colors.bg,
  paddingTop: verticalScale(75, 44, 75),
  alignItems: 'center',
},

  resetSuccessPage: {
  flex: 1,
  width: '100%',
  backgroundColor: colors.bg,
  alignItems: 'center',
  paddingTop: verticalScale(120, 70, 120),
},

  resetSuccessText: {
  fontSize: 15,
  color: colors.text,
  marginBottom: 28,
},

  resetTitle: {
  fontSize: 26,
  fontWeight: '800',
  color: colors.text,
}
});
