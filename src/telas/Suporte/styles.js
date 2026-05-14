import { StyleSheet } from 'react-native';


import { HEADER_HEIGHT, NAV_HEIGHT, verticalScale, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


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
