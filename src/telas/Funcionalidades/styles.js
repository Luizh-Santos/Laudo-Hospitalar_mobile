import { StyleSheet } from 'react-native';


import { NAV_HEIGHT, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


export const styles = StyleSheet.create({
  banner: {
    minHeight: 190,
    borderRadius: 18,
    overflow: 'hidden',
    padding: 18,
    justifyContent: 'flex-end',
    backgroundColor: colors.primary,
  },

  bannerText: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
  },

  bannerTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },

  bullet: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
  },

  page: {
    flex: 1,
    padding: scale(18, 14, 18),
    paddingBottom: NAV_HEIGHT + 20,
    gap: 14,
    backgroundColor: colors.bg,
  },

  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  }
});
