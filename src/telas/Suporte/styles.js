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
  configMenuItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: verticalScale(18, 12, 18),
  borderWidth: 1.2,
  borderColor: '#CFCFCF',
  borderRadius: 12,
  backgroundColor: '#FFFFFF',
  paddingVertical: verticalScale(14, 10, 14),
  paddingHorizontal: scale(12, 10, 14),
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
},

  configMenuText: {
    fontSize: 18,
    color: '#2A2A2A',
    marginLeft: 12,
  },

  configProfileHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },

  configProfileName: {
    color: '#EAEAEA',
    fontSize: 16,
    marginTop: 8,
  },

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  logoutButton: {
    marginTop: 28,
    alignSelf: 'center',
    width: 72,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#E00000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  logoutButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '800',
  },

  page: {
    flex: 1,
    padding: scale(18, 14, 18),
    paddingBottom: NAV_HEIGHT + 20,
    gap: 14,
    backgroundColor: colors.bg,
  }
});
