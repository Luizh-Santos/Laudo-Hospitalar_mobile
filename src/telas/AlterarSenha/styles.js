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

  editButton: {
    alignSelf: 'center',
    marginTop: 20,
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  editButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },

  editContent: {
    flex: 1,
    paddingTop: verticalScale(32, 18, 32),
    paddingHorizontal: scale(28, 16, 28),
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
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

  editInput: {
    height: 42,
    borderWidth: 1.8,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: colors.white,
    // paddingHorizontal: 8,
    fontSize: 14,
    color: colors.text,
    marginBottom: 40,
    elevation: 4,
   

  },

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  }
});
