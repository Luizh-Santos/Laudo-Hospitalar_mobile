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

  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
    textAlign: 'center',
  },

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  member: {
    width: '47%',
    alignItems: 'center',
    marginBottom: 14,
  },

  memberImg: {
    width: 82,
    height: 82,
    borderRadius: 41,
    marginBottom: 8,
  },

  memberName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
  },

  miniCard: {
    width: '47%',
    minHeight: 128,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
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

  teamRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  }
});
