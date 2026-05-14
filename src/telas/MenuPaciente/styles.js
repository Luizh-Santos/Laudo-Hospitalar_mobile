import { StyleSheet } from 'react-native';


import { HEADER_HEIGHT, NAV_HEIGHT, verticalScale, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';

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
    marginTop: 54,
    height: 40,
    paddingHorizontal: 22,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  patientButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },

  patientContent: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: scale(14, 12, 18),
    paddingTop: verticalScale(26, 18, 28),
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
    fontSize: 12,
    fontWeight: '800',
    color: colors.text,
  },

  patientDataRow: {
    minHeight: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },

  patientDataRowLast: {
    borderBottomWidth: 0,
  },

  patientDataValue: {
    flex: 1,
    marginLeft: 12,
    fontSize: 12,
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
    minHeight: 72,
    backgroundColor: colors.white,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 26,
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
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  }
});
