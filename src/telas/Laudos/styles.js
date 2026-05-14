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
