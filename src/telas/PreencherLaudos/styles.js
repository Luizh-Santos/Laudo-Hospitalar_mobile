import { StyleSheet } from 'react-native';


import { HEADER_HEIGHT, NAV_HEIGHT, verticalScale, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


export const styles = StyleSheet.create({
  aihBack: {
    position: 'absolute',
    left: scale(12, 10, 14),
    top: Math.round(HEADER_HEIGHT * 0.38),
  },

  aihButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 34,
  },

  aihCodeInput: {
    width: 160,
    height: 34,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    backgroundColor: colors.white,
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 0,
    fontSize: 13,
    textAlignVertical: 'center',
  },

  aihCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  aihContent: {
    flex: 1,
    paddingHorizontal: scale(16, 14, 20),
    paddingTop: verticalScale(24, 18, 28),
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
  },

  aihFavoriteButton: {
    height: 40,
    width: 104,
    borderRadius: 10,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },

  aihFavoriteButtonText: {
    fontSize: 12,
    color: '#6E767C',
    fontWeight: '800',
  },

  aihError: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },

  aihFinishButton: {
    height: 40,
    width: 104,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  aihFinishButtonText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '800',
  },

  aihFullInput: {
    height: 35,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 0,
    marginBottom: 52,
    fontSize: 13,
    textAlignVertical: 'center',
  },

  aihHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  aihInputError: {
    borderColor: colors.danger,
    borderWidth: 2,
  },

  aihLabel: {
    fontSize: 13,
    color: '#111',
    marginBottom: 7,
    fontWeight: '600',
    
  },

  aihSelect: {
    width: 230,
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 7,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 6,
    marginBottom: 14,
  },

  aihSelectOption: {
    minHeight: 40,
    paddingHorizontal: 10,
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
    fontSize: 13,
    color: colors.text,
  },

  aihSelectOptions: {
    width: 230,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 8,
    backgroundColor: colors.white,
    marginTop: -4,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },

  aihSelectText: {
    flex: 1,
    fontSize: 13,
    color: '#8A8A8A',
    fontWeight: '800',
  },

  aihSmallInput: {
    width: 92,
    height: 34,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    backgroundColor: colors.white,
    marginRight: 9,
    paddingHorizontal: 8,
    paddingVertical: 0,
    fontSize: 13,
    textAlignVertical: 'center',
  },

  aihSmallSearchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
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
    fontSize: 13,
    color: '#1A1A1A',
    fontWeight: '700',
  },

  aihTabs: {
    height: 42,
    marginHorizontal: 14,
    marginTop: 14,
    backgroundColor: '#DFDFDF',
    borderRadius: 5,
    flexDirection: 'row',
    elevation: 4,
  },

  aihTextarea: {
    height: 82,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 8,
    marginBottom: 22,
    paddingHorizontal: 10,
    paddingTop: 8,
    textAlignVertical: 'top',
    fontSize: 13,
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
