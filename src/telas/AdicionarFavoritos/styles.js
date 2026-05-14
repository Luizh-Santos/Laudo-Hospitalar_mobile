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

  favoriteAction: {
    alignItems: 'center',
  },

  favoriteActionText: {
    fontSize: 8,
    color: '#333',
    marginTop: -2,
  },

  favoriteActions: {
    flexDirection: 'row',
    gap: 12,
  },

  favoriteAddButton: {
    alignSelf: 'center',
    marginTop: 60,
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: '#17B90C',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  favoriteAddButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },

  favoriteCard: {
    height: 56,
    backgroundColor: colors.white,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  favoriteCardText: {
    flex: 1,
    marginLeft: 13,
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },

  favoriteContent: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: scale(14, 12, 16),
    paddingTop: verticalScale(16, 10, 16),
    paddingBottom: NAV_HEIGHT + 20,
  },

  favoriteHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },

  favoriteHeaderTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
  },

  favoriteList: {
    gap: 8,
  },

  favoriteSearchBox: {
    height: 38,
    borderWidth: 1.4,
    borderColor: colors.primary,
    borderRadius: 6,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 5,
    marginBottom: 26,
    elevation: 4,
  },

  favoriteSearchInput: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    fontSize: 14,
    color: colors.text,
  },

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  }
});
