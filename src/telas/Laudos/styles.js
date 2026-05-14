import { StyleSheet } from 'react-native';


import { NAV_HEIGHT, verticalScale, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


export const styles = StyleSheet.create({
  contentFlat: {
  flex: 1,
  paddingHorizontal: scale(12, 10, 14),
  paddingTop: verticalScale(16, 10, 16),
  paddingBottom: NAV_HEIGHT + 24,
  backgroundColor: colors.bg,
},

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  laudoCard: {
  height: 78,
  borderRadius: 8,
  backgroundColor: colors.card,
  borderWidth: 1,
  borderColor: '#E0E0E0',
  marginBottom: 10,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
},

  patientInfo: {
    flex: 1,
  },

  patientLine: {
  fontSize: 10,
  color: colors.text,
  marginTop: 2,
},

  patientMuted: {
  fontSize: 10,
  color: '#565656',
  marginTop: 2,
},

  patientName: {
  fontSize: 12,
  color: colors.text,
  fontWeight: '800',
},

  statusIconBox: {
  width: 38,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 8,
},

  tabLabel: {
  color: '#202020',
  fontSize: 13,
  fontWeight: '700',
},

  tabLabelRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
},

  tabMed: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
},

  tabUnderline: {
  position: 'absolute',
  bottom: 0,
  width: '75%',
  height: 2,
  backgroundColor: colors.primary,
},

  tabsWrap: {
  height: 40,
  backgroundColor: '#DFDFDF',
  borderRadius: 4,
  flexDirection: 'row',
  marginBottom: 10,
}
});
