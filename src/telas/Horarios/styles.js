import { StyleSheet } from 'react-native';


import { HEADER_HEIGHT, NAV_HEIGHT, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


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
