import { StyleSheet } from 'react-native';

import { PHONE_MAX_WIDTH, HEADER_HEIGHT, NAV_HEIGHT, verticalScale, scale } from './metrics.js';

export const colors = {
  primary: '#213D4C',
  bg: '#F4F4F4',
  card: '#FFFFFF',
  text: '#101820',
  muted: '#6E767C',
  line: '#D7D7D7',
  danger: '#FF2D2D',
  success: '#18C51B',
  white: '#FFFFFF',
  teal: '#0AA4AA',
};

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
  },

  screenShell: {
    flex: 1,
    width: '100%',
    maxWidth: PHONE_MAX_WIDTH,
    alignSelf: 'center',
    backgroundColor: colors.bg,
  },

  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  loginLogo: {
    width: scale(132, 104, 132),
    height: scale(132, 104, 132),
    resizeMode: 'contain',
    marginBottom: verticalScale(90, 42, 90),
  },

  medInputWrap: {
    width: '100%',
    height: 38,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  medInput: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    paddingHorizontal: 5,
    fontSize: 14,
    color: colors.text,
  },

  medicoHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    paddingHorizontal: scale(12, 10, 14),
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },

  whiteLogo: {
    width: scale(58, 50, 58),
    height: scale(58, 50, 58),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: verticalScale(14, 10, 14),
  },

  screenTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
    marginTop: 10,
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 5,
  },

  searchBox: {
    flex: 1,
    height: 28,
    backgroundColor: colors.white,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 12,
    height: '100%',
    color: colors.text,
  },

  filterBtn: {
    width: 26,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificacaoHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },

  notificacaoLogo: {
    width: scale(58, 50, 58),
    height: scale(58, 50, 58),
    resizeMode: 'contain',
  },

  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: NAV_HEIGHT,
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  },

  bottomItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  bottomText: {
    fontSize: scale(14, 11, 14),
    color: '#1D1D1D',
    fontWeight: '600',
  },
});
