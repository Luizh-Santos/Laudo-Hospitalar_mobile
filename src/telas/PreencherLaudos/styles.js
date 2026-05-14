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
  aihBack: {
    position: 'absolute',
    left: scale(12, 10, 14),
    top: Math.round(HEADER_HEIGHT * 0.38),
  },

  aihButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
  },

  aihCodeInput: {
    width: 128,
    height: 24,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    backgroundColor: colors.white,
    marginRight: 8,
    paddingHorizontal: 5,
  },

  aihCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  aihContent: {
    flex: 1,
    paddingHorizontal: scale(8, 8, 12),
    paddingTop: verticalScale(19, 12, 19),
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
  },

  aihFavoriteButton: {
    height: 32,
    width: 78,
    borderRadius: 8,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },

  aihFavoriteButtonText: {
    fontSize: 10,
    color: '#6E767C',
  },

  aihFinishButton: {
    height: 32,
    width: 78,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  aihFinishButtonText: {
    fontSize: 10,
    color: colors.white,
  },

  aihFullInput: {
    height: 24,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    marginBottom: 45,
  },

  aihHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  aihLabel: {
    fontSize: 11,
    color: '#111',
    marginBottom: 5,
  },

  aihSelect: {
    width: 190,
    minHeight: 32,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 7,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 4,
    marginBottom: 10,
  },

  aihSelectOption: {
    minHeight: 34,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },

  aihSelectOptionSelected: {
    backgroundColor: '#EDF5F7',
  },

  aihSelectOptionText: {
    flex: 1,
    fontSize: 11,
    color: colors.text,
  },

  aihSelectOptions: {
    width: 190,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 8,
    backgroundColor: colors.white,
    marginTop: -4,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
  },

  aihSelectText: {
    flex: 1,
    fontSize: 11,
    color: '#8A8A8A',
  },

  aihSmallInput: {
    width: 72,
    height: 24,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    backgroundColor: colors.white,
    marginRight: 9,
    paddingHorizontal: 5,
  },

  aihSmallSearchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  aihStar: {
    position: 'absolute',
    right: scale(16, 12, 18),
    top: Math.round(HEADER_HEIGHT * 0.38),
  },

  aihTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  aihTabLine: {
    position: 'absolute',
    bottom: 0,
    width: '75%',
    height: 2,
    backgroundColor: colors.primary,
  },

  aihTabText: {
    fontSize: 11,
    color: '#1A1A1A',
    fontWeight: '700',
  },

  aihTabs: {
    height: 34,
    marginHorizontal: 8,
    marginTop: 10,
    backgroundColor: '#DFDFDF',
    borderRadius: 5,
    flexDirection: 'row',
    elevation: 4,
  },

  aihTextarea: {
    height: 68,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 8,
    marginBottom: 19,
    paddingHorizontal: 8,
    paddingTop: 6,
    textAlignVertical: 'top',
    fontSize: 12,
    color: colors.text,
    elevation: 3,
  },

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  required: {
    color: '#FF0000',
  }
});
