import { StyleSheet } from 'react-native';


import { verticalScale, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  mensagemBadge: {
  minWidth: 112,
  height: 38,
  marginBottom: 22,
  borderRadius: 12,
  backgroundColor: '#1F3C4D',
  alignItems: 'center',
  justifyContent: 'center',
},

  mensagemBadgeText: {
  color: '#FFFFFF',
  fontSize: 14,
  fontWeight: '600',
},

  mensagemCard: {
  width: '100%',
  minHeight: verticalScale(340, 250, 340),
  backgroundColor: '#F8F8F8',
  borderRadius: 18,
  paddingVertical: verticalScale(42, 28, 42),
  paddingHorizontal: scale(24, 18, 24),
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 20,
  shadowOffset: { width: 0, height: 8 },
  elevation: 4,
},

  mensagemIcon: {
  width: 68,
  height: 68,
  marginBottom: 24,
  borderRadius: 34,
  borderWidth: 2,
  borderColor: '#314B5D',
  alignItems: 'center',
  justifyContent: 'center',
},

  mensagemPage: {
  flex: 1,
  backgroundColor: colors.bg,
  padding: scale(16, 12, 16),
  alignItems: 'center',
  justifyContent: 'center',
},

  mensagemText: {
  maxWidth: 280,
  color: '#3A3A3A',
  fontSize: 14,
  lineHeight: 25,
  textAlign: 'center',
},

  mensagemTitle: {
  color: '#314B5D',
  fontSize: 26,
  fontWeight: '600',
  marginBottom: 18,
}
});
