import { StyleSheet } from 'react-native';


import { HEADER_HEIGHT, NAV_HEIGHT, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


export const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
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

  info: {
    fontSize: 14,
    color: colors.text,
    marginTop: 8,
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
