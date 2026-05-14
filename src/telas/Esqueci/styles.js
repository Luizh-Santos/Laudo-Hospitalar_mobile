import { StyleSheet } from 'react-native';


import { verticalScale, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


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
