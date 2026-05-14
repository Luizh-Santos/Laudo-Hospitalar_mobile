import { Dimensions, StyleSheet } from 'react-native';

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

  // LOGIN
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

  // HEADER PADRÃO
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

  // NOTIFICAÇÕES
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

  // CONFIG
  safeHeader: {
    backgroundColor: colors.white,
  },

  header: {
    height: 56,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(12, 10, 14),
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },

  headerIcon: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },

  headerLogin: {
    minWidth: 42,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerLoginText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },

  configHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },

  configLogo: {
    width: scale(58, 50, 58),
    height: scale(58, 50, 58),
    resizeMode: 'contain',
  },

  configTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    marginTop: 8,
  },

  // PERFIL
  perfilHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },

  perfilLogo: {
    width: scale(58, 50, 58),
    height: scale(58, 50, 58),
    resizeMode: 'contain',
  },

  perfilTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    marginTop: 8,
  },

  // LAUDOS
// NAVBAR MAIOR
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

  // GERAIS
  homeNav: {
    height: 44,
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },

  homeNavBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },

  homeNavBtnActive: {
    borderBottomColor: colors.primary,
  },

  homeNavText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },

  homeNavTextActive: {
    color: colors.primary,
  },

  page: {
    flex: 1,
    padding: scale(18, 14, 18),
    paddingBottom: NAV_HEIGHT + 20,
    gap: 14,
    backgroundColor: colors.bg,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 18,
  },

  input: {
    minHeight: 42,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    fontSize: 14,
    color: colors.text,
    marginTop: 12,
  },

  textarea: {
    minHeight: 120,
    paddingTop: 10,
    textAlignVertical: 'top',
  },

  button: {
    alignSelf: 'center',
    minWidth: 110,
    height: 38,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginTop: 18,
  },

  buttonSecondary: {
    backgroundColor: '#EDEDED',
  },

  buttonDanger: {
    backgroundColor: colors.danger,
  },

  buttonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '800',
  },

  buttonSecondaryText: {
    color: colors.primary,
  },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.muted,
    marginBottom: 12,
  },

  configItem: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  configText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '800',
    color: colors.text,
  },

  // TELAS INTERNAS
  // FAVORITOS
  // PACIENTE
  // AIH
  // ESQUECI SENHA
  // ESQUECI SENHA
cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
    textAlign: 'center',
  },

  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
