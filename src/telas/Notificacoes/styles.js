import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../styles/index.js';

const { width, height } = Dimensions.get('window');
const PHONE_MAX_WIDTH = 430;
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;
const usableWidth = Math.min(width, PHONE_MAX_WIDTH);
const widthRatio = usableWidth / BASE_WIDTH;
const heightRatio = Math.min(height, BASE_HEIGHT) / BASE_HEIGHT;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const scale = (value, min = value * 0.86, max = value) =>
  Math.round(clamp(value * widthRatio, min, max));
const verticalScale = (value, min = value * 0.78, max = value) =>
  Math.round(clamp(value * heightRatio, min, max));

const HEADER_HEIGHT = verticalScale(150, 118, 150);
const NAV_HEIGHT = verticalScale(64, 58, 66);

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.bg,
  },

  notificacaoContent: {
    flex: 1,
    paddingTop: verticalScale(22, 14, 22),
    paddingHorizontal: scale(16, 12, 16),
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
  },

  notificacaoIconLogo: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    marginRight: 10,
  },

  notificacaoItem: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    paddingBottom: 10,
    marginBottom: 10,
  },

  notificacaoPatient: {
    fontSize: 11,
    color: colors.text,
    textTransform: 'uppercase',
  },

  notificacaoPatientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  notificacaoTextArea: {
    flex: 1,
  },

  notificacaoTime: {
    position: 'absolute',
    right: 0,
    bottom: 8,
    fontSize: 10,
    color: '#8E8E8E',
  },

  notificacaoTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  }
});
