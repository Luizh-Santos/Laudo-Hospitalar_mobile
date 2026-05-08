import { StyleSheet } from 'react-native';

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
};

const HEADER_HEIGHT = 150;
const NAV_HEIGHT = 64;

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  flex: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  // LOGIN
  loginPage: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    paddingHorizontal: 34,
    paddingTop: 95,
  },

  loginLogo: {
    width: 132,
    height: 132,
    resizeMode: 'contain',
    marginBottom: 90,
  },

  loginForm: {
    width: '100%',
    alignItems: 'center',
    gap: 24,
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

  // HEADER PADRÃO
  medicoHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },

  whiteLogo: {
    width: 58,
    height: 58,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 14,
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
    marginTop: 8,
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
    width: 58,
    height: 58,
    resizeMode: 'contain',
  },

  notificacaoContent: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 16,
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
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

  notificacaoIconLogo: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    marginRight: 10,
  },

  notificacaoTextArea: {
    flex: 1,
  },

  notificacaoTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  },

  notificacaoPatientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  notificacaoPatient: {
    fontSize: 11,
    color: colors.text,
    textTransform: 'uppercase',
  },

  notificacaoTime: {
    position: 'absolute',
    right: 0,
    bottom: 8,
    fontSize: 10,
    color: '#8E8E8E',
  },

  // CONFIG
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

  configMenu: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 14,
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
  },

  configMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    minHeight: 38,
  },

  configMenuText: {
    fontSize: 18,
    color: '#2A2A2A',
    marginLeft: 12,
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

  // PERFIL
  profileEditHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },

  profilePhotoText: {
    color: '#DADADA',
    fontSize: 16,
    marginTop: 8,
  },

  profileForm: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 14,
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
  },

  profileLabel: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 7,
  },

  profileInput: {
    height: 38,
    borderWidth: 1,
    borderColor: '#BFBFBF',
    borderRadius: 4,
    backgroundColor: '#F7F7F7',
    marginBottom: 15,
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.text,
  },

  profileButton: {
    alignSelf: 'center',
    marginTop: 44,
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  profileButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },

  // LAUDOS
contentFlat: {
  flex: 1,
  paddingHorizontal: 12,
  paddingTop: 16,
  paddingBottom: NAV_HEIGHT + 24,
  backgroundColor: colors.bg,
},

tabsWrap: {
  height: 32,
  backgroundColor: '#DFDFDF',
  borderRadius: 4,
  flexDirection: 'row',
  marginBottom: 10,
},

tabMed: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
},

tabLabel: {
  color: '#202020',
  fontSize: 10,
  fontWeight: '600',
},

tabUnderline: {
  position: 'absolute',
  bottom: 0,
  width: '75%',
  height: 2,
  backgroundColor: colors.primary,
},

laudoCard: {
  height: 78,
  borderRadius: 8,
  backgroundColor: colors.card,
  borderWidth: 1,
  borderColor: '#E0E0E0',
  marginBottom: 10,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
},

statusIconBox: {
  width: 38,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 8,
},

patientName: {
  fontSize: 12,
  color: colors.text,
  fontWeight: '800',
},

patientLine: {
  fontSize: 10,
  color: colors.text,
  marginTop: 2,
},

patientMuted: {
  fontSize: 10,
  color: '#565656',
  marginTop: 2,
},

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
    fontSize: 14,
    color: '#1D1D1D',
    fontWeight: '600',
  },

  // GERAIS
  page: {
    flex: 1,
    padding: 18,
    paddingBottom: NAV_HEIGHT + 20,
    gap: 14,
    backgroundColor: colors.bg,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 18,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },

  info: {
    fontSize: 14,
    color: colors.text,
    marginTop: 8,
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

  editBack: {
    position: 'absolute',
    left: 14,
    top: 58,
  },

  editHeaderTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
  },

  editContent: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 28,
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
  },

  editInput: {
    height: 38,
    borderWidth: 1.8,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.text,
    marginBottom: 40,
    elevation: 4,
  },

  editButton: {
    alignSelf: 'center',
    marginTop: 16,
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  editButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },

  supportTextarea: {
    height: 170,
    borderWidth: 1.8,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 14,
    color: colors.text,
    textAlignVertical: 'top',
    marginBottom: 40,
    elevation: 4,
  },

  horariosContent: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 24,
    paddingBottom: NAV_HEIGHT + 20,
    gap: 20,
  },

  horarioCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },

  horarioTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 12,
  },

  horarioText: {
    fontSize: 15,
    color: colors.text,
    marginBottom: 6,
  },

  // FAVORITOS
  favoriteHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },

  favoriteHeaderTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
  },

  favoriteContent: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: NAV_HEIGHT + 20,
  },

  favoriteSearchBox: {
    height: 38,
    borderWidth: 1.4,
    borderColor: colors.primary,
    borderRadius: 6,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 5,
    marginBottom: 26,
    elevation: 4,
  },

  favoriteSearchInput: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    fontSize: 14,
    color: colors.text,
  },

  favoriteList: {
    gap: 8,
  },

  favoriteCard: {
    height: 56,
    backgroundColor: colors.white,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  favoriteCardText: {
    flex: 1,
    marginLeft: 13,
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },

  favoriteActions: {
    flexDirection: 'row',
    gap: 12,
  },

  favoriteAction: {
    alignItems: 'center',
  },

  favoriteActionText: {
    fontSize: 8,
    color: '#333',
    marginTop: -2,
  },

  favoriteAddButton: {
    alignSelf: 'center',
    marginTop: 60,
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: '#17B90C',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  favoriteAddButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },

  // PACIENTE
  patientHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  patientHeaderTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
  },

  patientContent: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 8,
    paddingTop: 18,
    paddingBottom: NAV_HEIGHT + 20,
  },

  patientTopCard: {
    height: 54,
    backgroundColor: colors.white,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 20,
    elevation: 4,
  },

  patientTopName: {
    fontSize: 9,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  },

  patientTopInfoRow: {
    flexDirection: 'row',
    gap: 14,
  },

  patientTopInfo: {
    fontSize: 8,
    color: '#777',
  },

  patientDataCard: {
    backgroundColor: colors.white,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    overflow: 'hidden',
    elevation: 4,
  },

  patientDataRow: {
    height: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  patientDataRowLast: {
    borderBottomWidth: 0,
  },

  patientDataLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: colors.text,
  },

  patientDataValue: {
    fontSize: 9,
    color: '#777',
    textAlign: 'right',
  },

  patientButton: {
    alignSelf: 'center',
    marginTop: 43,
    height: 32,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  patientButtonText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },

  // AIH
  aihHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  aihBack: {
    position: 'absolute',
    left: 12,
    top: 58,
  },

  aihStar: {
    position: 'absolute',
    right: 16,
    top: 58,
  },

  aihTabs: {
    height: 34,
    marginHorizontal: 8,
    marginTop: 10,
    backgroundColor: '#DFDFDF',
    borderRadius: 5,
    flexDirection: 'row',
    elevation: 4,
  },

  aihTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  aihTabText: {
    fontSize: 11,
    color: '#1A1A1A',
    fontWeight: '700',
  },

  aihTabLine: {
    position: 'absolute',
    bottom: 0,
    width: '75%',
    height: 2,
    backgroundColor: colors.primary,
  },

  aihContent: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 19,
    paddingBottom: NAV_HEIGHT + 20,
    backgroundColor: colors.bg,
  },

  aihLabel: {
    fontSize: 11,
    color: '#111',
    marginBottom: 5,
  },

  required: {
    color: '#FF0000',
  },

  aihTextarea: {
    height: 68,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 8,
    marginBottom: 19,
    paddingHorizontal: 8,
    paddingTop: 6,
    textAlignVertical: 'top',
    fontSize: 12,
    color: colors.text,
    elevation: 3,
  },

  aihSelect: {
    width: 118,
    height: 24,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 7,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 6,
    marginBottom: 20,
  },

  aihSelectText: {
    fontSize: 9,
    color: '#8A8A8A',
  },

  aihSmallSearchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  aihSmallInput: {
    width: 72,
    height: 24,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    backgroundColor: colors.white,
    marginRight: 9,
    paddingHorizontal: 5,
  },

  aihCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  aihCodeInput: {
    width: 128,
    height: 24,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    backgroundColor: colors.white,
    marginRight: 8,
    paddingHorizontal: 5,
  },

  aihFullInput: {
    height: 24,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    marginBottom: 45,
  },

  aihButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
  },

  aihFavoriteButton: {
    height: 32,
    width: 78,
    borderRadius: 8,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },

  aihFavoriteButtonText: {
    fontSize: 10,
    color: '#6E767C',
  },

  aihFinishButton: {
    height: 32,
    width: 78,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  aihFinishButtonText: {
    fontSize: 10,
    color: colors.white,
  },

  // ESQUECI SENHA
  // ESQUECI SENHA
resetPage: {
  flex: 1,
  backgroundColor: colors.bg,
  paddingTop: 75,
  alignItems: 'center',
},

resetBack: {
  position: 'absolute',
  left: 18,
  top: 75,
},

resetTitle: {
  fontSize: 26,
  fontWeight: '800',
  color: colors.text,
},

resetInstruction: {
  marginTop: 70,
  marginBottom: 55,
  fontSize: 15,
  fontWeight: '800',
  color: colors.text,
  textAlign: 'center',
  paddingHorizontal: 28,
},

resetInput: {
  width: 220,
  height: 36,
  borderWidth: 1.5,
  borderColor: colors.primary,
  borderRadius: 7,
  backgroundColor: colors.white,
  paddingHorizontal: 10,
  paddingVertical: 0,
  fontSize: 13,
  color: colors.text,
  textAlign: 'center',
},

resetButton: {
  marginTop: 42,
  height: 36,
  paddingHorizontal: 22,
  borderRadius: 9,
  backgroundColor: colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 5,
},

resetButtonText: {
  color: colors.white,
  fontSize: 13,
  fontWeight: '700',
},

resetOption: {
  width: 230,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 28,
},

resetOptionText: {
  marginLeft: 10,
  fontSize: 13,
  color: colors.text,
},

resendButton: {
  marginTop: 22,
  width: 130,
  height: 32,
  borderWidth: 1.3,
  borderColor: colors.primary,
  borderRadius: 7,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.white,
},

resendButtonText: {
  fontSize: 12,
  color: colors.text,
},

resetSuccessPage: {
  flex: 1,
  backgroundColor: colors.bg,
  alignItems: 'center',
  paddingTop: 120,
},

resetLogo: {
  width: 125,
  height: 125,
  resizeMode: 'contain',
  marginBottom: 80,
},

resetSuccessText: {
  fontSize: 15,
  color: colors.text,
  marginBottom: 28,
},
});