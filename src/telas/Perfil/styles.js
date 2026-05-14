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

  profileButton: {
    alignSelf: 'center',
    marginTop: 44,
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  profileButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },

  profileEditHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },

  profileForm: {
    flex: 1,
    paddingTop: verticalScale(22, 14, 22),
    paddingHorizontal: scale(14, 12, 16),
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
  },

  profileInput: {
    height: 42,
    borderWidth: 1,
    borderColor: '#BFBFBF',
    borderRadius: 4,
    backgroundColor: '#F7F7F7',
    marginBottom: 15,
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.text,
  },

  profileLabel: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 7,
  },

  profilePhotoText: {
    color: '#DADADA',
    fontSize: 16,
    marginTop: 8,
  }
});
