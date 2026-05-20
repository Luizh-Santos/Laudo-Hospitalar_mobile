import { StyleSheet } from 'react-native';


import { verticalScale, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


export const styles = StyleSheet.create({
  forgotLink: {
    fontSize: 12,
    color: '#9A9A9A',
    textDecorationLine: 'underline',
    marginTop: -8,
  },

  loginButton: {
    marginTop: 42,
    backgroundColor: colors.primary,
    borderRadius: 13,
    width: 88,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },

  loginForm: {
    width: '100%',
    alignItems: 'center',
    gap: 24,
  },

  loginError: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: '600',
    marginTop: -14,
    textAlign: 'center',
  },

  loginPage: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
    alignItems: 'center',
    paddingHorizontal: scale(34, 22, 34),
    paddingTop: verticalScale(95, 54, 95),
  }
});
