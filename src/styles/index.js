import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#213D4C',
  primaryDark: '#1F3B4A',
  bg: '#F4F4F4',
  card: '#FFFFFF',
  text: '#101820',
  muted: '#6E767C',
  line: '#D7D7D7',
  inputBorder: '#213D4C',
  danger: '#FF2D2D',
  success: '#18C51B',
  white: '#FFFFFF',
};

export const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: colors.bg },
  flex: { flex: 1, backgroundColor: colors.bg },

  // LOGIN MEDSYNC
  loginPage: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    paddingHorizontal: 23,
    paddingTop: 50,
  },
  loginLogo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 2,
    marginBottom: 58,
  },
  loginForm: {
    width: '100%',
    gap: 16,
    alignItems: 'center',
  },
  medInputWrap: {
    width: '100%',
    height: 22,
    borderWidth: 1.5,
    borderColor: colors.inputBorder,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  medInput: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 3,
    fontSize: 10,
    color: colors.text,
    height: '100%',
  },
  forgotLink: {
    fontSize: 9,
    color: '#9A9A9A',
    textDecorationLine: 'underline',
    marginTop: -6,
  },
  loginButton: {
    marginTop: 34,
    backgroundColor: colors.primary,
    borderRadius: 9,
    width: 54,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: '700',
  },

  // HEADER / LAYOUT MEDICO
 medicoHeader: {
  height: 132,
  backgroundColor: colors.primary,
  paddingTop: 22,
  paddingHorizontal: 7,
  marginBottom: 8,
},

whiteLogo: {
  width: 52,
  height: 52,
  resizeMode: 'contain',
  alignSelf: 'center',
},

screenTitle: {
  color: colors.white,
  fontSize: 20,
  fontWeight: '800',

},

searchRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 6,
  marginTop: 7,
},

searchBox: {
  flex: 1,
  height: 22,
  backgroundColor: colors.white,
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 4,
},

searchInput: {
  flex: 1,
  paddingVertical: 0,
  fontSize: 10,
  height: '100%',
  color: colors.text,
},

filterBtn: {
  width: 18,
  height: 22,
  alignItems: 'center',
  justifyContent: 'center',
},

contentFlat: {
  flex: 1,
  paddingHorizontal: 4,
  paddingBottom: 70,
  backgroundColor: colors.bg,
},

tabsWrap: {
  height: 29,
  backgroundColor: '#DFDFDF',
  borderRadius: 4,
  flexDirection: 'row',
  padding: 1,
  marginBottom: 7,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 2 },
  elevation: 3,
},

tabMed: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
},

tabLabel: {
  color: '#202020',
  fontSize: 9,
  fontWeight: '600',
},

tabUnderline: {
  position: 'absolute',
  bottom: 0,
  width: '75%',
  height: 2,
  backgroundColor: colors.primary,
  borderRadius: 2,
},

laudoCard: {
  height: 58,
  borderRadius: 6,
  backgroundColor: colors.card,
  borderWidth: 1,
  borderColor: '#E0E0E0',
  marginBottom: 5,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 5,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 2,
  shadowOffset: { width: 0, height: 1 },
  elevation: 1,
},

statusIconBox: {
  width: 25,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 4,
},

patientInfo: {
  flex: 1,
  justifyContent: 'center',
},

patientName: {
  fontSize: 8,
  color: colors.text,
  fontWeight: '800',
},

patientLine: {
  fontSize: 7,
  color: colors.text,
  marginTop: 1,
},

patientMuted: {
  fontSize: 7,
  color: '#565656',
  marginTop: 1,
},

rightAction: {
  width: 42,
  alignItems: 'center',
},

rightActionText: {
  fontSize: 7,
  color: '#2A2A2A',
},

bottomNav: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: 45,
  backgroundColor: colors.white,
  flexDirection: 'row',
  borderTopWidth: 1,
  borderTopColor: '#E6E6E6',
},

bottomItem: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
},

bottomText: {
  fontSize: 7,
  color: '#1D1D1D',
},

  // estilos reutilizados pelas outras telas
  safeHeader: { backgroundColor: colors.white },
  header: { height: 58, paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.line, backgroundColor: colors.white },
  headerIcon: { width: 42, height: 42, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '700', color: colors.text },
  headerLogin: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, backgroundColor: '#eef5f6' },
  headerLoginText: { fontSize: 12, fontWeight: '700', color: colors.primary },
  homeNav: { flexDirection: 'row', backgroundColor: colors.white, paddingHorizontal: 8, paddingVertical: 8, gap: 6, borderBottomWidth: 1, borderBottomColor: colors.line },
  homeNavBtn: { flex: 1, paddingVertical: 9, borderRadius: 12, alignItems: 'center' },
  homeNavBtnActive: { backgroundColor: colors.primary },
  homeNavText: { fontSize: 11, color: colors.muted, fontWeight: '700' },
  homeNavTextActive: { color: colors.white },
  medicoNav: { flexDirection: 'row', backgroundColor: colors.primary, padding: 8, gap: 8 },
  medicoNavBtn: { flex: 1, alignItems: 'center', gap: 3, paddingVertical: 8, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.10)' },
  medicoNavText: { fontSize: 11, color: colors.white, fontWeight: '700' },
  hero: { flex: 1, justifyContent: 'center' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.58)' },
  heroContent: { padding: 26, alignItems: 'center' },
  heroTitle: { fontSize: 28, lineHeight: 39, color: colors.white, textAlign: 'center', fontWeight: '300' },
  heroLine: { width: 100, height: 1, backgroundColor: colors.white, marginVertical: 18 },
  heroSub: { fontSize: 14, lineHeight: 22, color: '#eaeaea', textAlign: 'center', marginBottom: 28 },
  page: { padding: 18, paddingBottom: 34, gap: 14 },
  centerPage: { flex: 1, justifyContent: 'center', padding: 20 },
  banner: { height: 250, borderRadius: 24, overflow: 'hidden', justifyContent: 'flex-end', padding: 22, marginBottom: 4 },
  bannerTitle: { fontSize: 25, lineHeight: 32, color: colors.white, fontWeight: '700' },
  bannerText: { fontSize: 14, lineHeight: 21, color: '#eef2f4', marginTop: 10 },
  card: { backgroundColor: colors.white, borderRadius: 22, padding: 18, shadowColor: '#1f3c4d', shadowOpacity: 0.10, shadowRadius: 16, shadowOffset: { width: 0, height: 8 }, elevation: 3, gap: 12 },
  miniCard: { flex: 1, minWidth: '45%' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  rowCenter: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 },
  title: { fontSize: 24, fontWeight: '800', color: colors.text, marginBottom: 6 },
  subtitle: { fontSize: 14, lineHeight: 21, color: colors.muted, marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: '800', color: colors.text },
  cardText: { fontSize: 14, lineHeight: 21, color: colors.muted },
  bullet: { fontSize: 14, lineHeight: 23, color: colors.muted },
  info: { fontSize: 15, color: colors.text, marginVertical: 3 },
  input: { minHeight: 50, borderWidth: 1.6, borderColor: '#314b5d', borderRadius: 14, paddingHorizontal: 14, backgroundColor: 'rgba(255,255,255,0.9)', fontSize: 15, color: colors.text },
  textarea: { minHeight: 118, paddingTop: 14, textAlignVertical: 'top' },
  button: { minHeight: 46, borderRadius: 14, backgroundColor: colors.primary, paddingHorizontal: 18, alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  buttonText: { color: colors.white, fontWeight: '800', fontSize: 14 },
  buttonSecondary: { backgroundColor: '#eef4f5', borderWidth: 1, borderColor: colors.line },
  buttonSecondaryText: { color: colors.text },
  buttonDanger: { backgroundColor: '#b94a48' },
  logo: { width: 260, height: 95, resizeMode: 'contain', marginBottom: 20 },
  loginCard: { width: '100%', maxWidth: 380 },
  link: { color: colors.text, textDecorationLine: 'underline', fontWeight: '600', fontSize: 13 },
  backBottom: { position: 'absolute', left: 26, bottom: 28, flexDirection: 'row', gap: 8, alignItems: 'center' },
  backText: { fontSize: 12, color: colors.text, fontWeight: '700' },
  tabs: { flexDirection: 'row', backgroundColor: '#e8eef1', borderRadius: 16, padding: 5, gap: 6 },
  tab: { flex: 1, paddingVertical: 11, borderRadius: 12, alignItems: 'center' },
  tabActive: { backgroundColor: colors.primary },
  tabText: { textTransform: 'capitalize', fontWeight: '800', color: colors.muted, fontSize: 12 },
  tabTextActive: { color: colors.white },
  circleBtn: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#0aa4aa', alignItems: 'center', justifyContent: 'center' },
  favorite: { flexDirection: 'row', alignItems: 'center', gap: 8, alignSelf: 'flex-start' },
  configItem: { backgroundColor: colors.white, borderRadius: 18, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 14, shadowColor: '#1f3c4d', shadowOpacity: 0.08, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 2 },
  configText: { flex: 1, fontSize: 15, fontWeight: '800', color: colors.text },
  teamRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  member: { width: '47%', backgroundColor: colors.white, borderRadius: 18, padding: 12, alignItems: 'center' },
  memberImg: { width: 74, height: 74, borderRadius: 37, marginBottom: 8 },
  memberName: { fontWeight: '800', color: colors.text, fontSize: 12, textAlign: 'center' },
});
