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
  editBack: {
    position: 'absolute',
    left: scale(14, 12, 16),
    top: Math.round(HEADER_HEIGHT * 0.38),
  },

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  patientButton: {
    alignSelf: 'center',
    marginTop: 43,
    height: 32,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  patientButtonText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },

  patientContent: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: scale(8, 8, 12),
    paddingTop: verticalScale(18, 12, 18),
    paddingBottom: NAV_HEIGHT + 20,
  },

  patientDataCard: {
    backgroundColor: colors.white,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    overflow: 'hidden',
    elevation: 4,
  },

  patientDataLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: colors.text,
  },

  patientDataRow: {
    height: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  patientDataRowLast: {
    borderBottomWidth: 0,
  },

  patientDataValue: {
    fontSize: 9,
    color: '#777',
    textAlign: 'right',
  },

  patientHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  patientHeaderTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
  },

  patientTopCard: {
    height: 54,
    backgroundColor: colors.white,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 20,
    elevation: 4,
  },

  patientTopInfo: {
    fontSize: 8,
    color: '#777',
  },

  patientTopInfoRow: {
    flexDirection: 'row',
    gap: 14,
  },

  patientTopName: {
    fontSize: 9,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  }
});
