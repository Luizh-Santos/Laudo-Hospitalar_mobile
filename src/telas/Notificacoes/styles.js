import { StyleSheet } from 'react-native';


import { NAV_HEIGHT, verticalScale, scale } from '../../styles/metrics.js';

import { colors } from '../../styles/index.js';


export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  notificacaoContent: {
    flex: 1,
    paddingTop: verticalScale(28, 20, 30),
    paddingHorizontal: scale(18, 14, 20),
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
  },

  notificacaoIconLogo: {
    width: 46,
    height: 46,
    resizeMode: 'contain',
    marginRight: 12,
    marginTop: 6,
  },

  notificacaoItem: {
    minHeight: 92,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    paddingBottom: 14,
    marginBottom: 14,
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: 12,
  },

  notificacaoPatient: {
    fontSize: 13,
    color: colors.text,
    textTransform: 'uppercase',
    flex: 1,
  },

  notificacaoPatientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },

  notificacaoTextArea: {
    flex: 1,
    marginTop: 3,
    paddingRight: 8,
  },

  notificacaoTime: {
    position: 'absolute',
    right: 12,
    bottom: 10,
    fontSize: 11,
    color: '#8E8E8E',
  },

  notificacaoTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 6,
    lineHeight: 21,
  }
});
