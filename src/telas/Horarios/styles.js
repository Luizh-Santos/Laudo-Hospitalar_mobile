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

  editHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },

  editHeaderTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
  },

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  horarioCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },

  horarioText: {
    fontSize: 15,
    color: colors.text,
    marginBottom: 6,
  },

  horarioTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 12,
  },

  horariosContent: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: scale(24, 16, 24),
    paddingBottom: NAV_HEIGHT + 20,
    gap: 20,
  }
});
