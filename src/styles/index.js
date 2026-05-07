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
    backgroundColor: '#F4F4F4',
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
    height: 34,
    borderWidth: 2,
    borderColor: '#213D4C',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
  },

  medInput: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    paddingHorizontal: 5,
    fontSize: 13,
    color: '#101820',
  },

  forgotLink: {
    fontSize: 11,
    color: '#9A9A9A',
    textDecorationLine: 'underline',
    marginTop: -8,
  },

  loginButton: {
    marginTop: 42,
    backgroundColor: '#213D4C',
    borderRadius: 13,
    width: 80,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  // HEADER LAUDOS

  medicoHeader: {
    height: 132,
    backgroundColor: colors.primary,
    
    paddingHorizontal: 7,
    
  },

  whiteLogo: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 12,
  },

  screenTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    marginTop: 10,
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

  // NOTIFICAÇÕES

notificacaoHeader: {
  height: 150,
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
  paddingBottom: 70,
  backgroundColor: colors.bg,
},

notificacaoItem: {
  minHeight: 62,
  flexDirection: 'row',
  alignItems: 'flex-start',
  borderBottomWidth: 1,
  borderBottomColor: '#D9D9D9',
  paddingBottom: 8,
  marginBottom: 8,
},

notificacaoIconLogo: {
  width: 34,
  height: 34,
  resizeMode: 'contain',
  marginRight: 8,
  marginTop: 0,
},

notificacaoTextArea: {
  flex: 1,
},

notificacaoTitle: {
  fontSize: 13,
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
  fontSize: 10,
  color: colors.text,
  textTransform: 'uppercase',
},

notificacaoTime: {
  position: 'absolute',
  right: 0,
  bottom: 7,
  fontSize: 9,
  color: '#8E8E8E',
},

  // CONFIG

 configProfileHeader: {
  height: 150,
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
  backgroundColor: colors.bg,
},

configMenuItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 28,
},

configMenuText: {
  fontSize: 17,
  color: '#2A2A2A',
  marginLeft: 10,
},

logoutButton: {
  marginTop: 28,
  alignSelf: 'center',
  width: 65,
  height: 36,
  borderRadius: 12,
  backgroundColor: '#E00000',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 3 },
  elevation: 5,
},

logoutButtonText: {
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: '800',
},
  // PERFIL

  profileEditHeader: {
  height: 197,
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
  paddingHorizontal: 12,
  backgroundColor: colors.bg,
},

profileLabel: {
  fontSize: 16,
  color: colors.text,
  marginBottom: 7,
},

profileInput: {
  height: 35,
  borderWidth: 1,
  borderColor: '#BFBFBF',
  borderRadius: 4,
  backgroundColor: '#F7F7F7',
  marginBottom: 15,
  paddingHorizontal: 8,
  fontSize: 13,
  color: colors.text,
},

profileButton: {
  alignSelf: 'center',
  marginTop: 44,
  height: 36,
  paddingHorizontal: 15,
  borderRadius: 10,
  backgroundColor: colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 3 },
  elevation: 5,
},

profileButtonText: {
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: '700',
},

  // LAUDOS

  contentFlat: {
    flex: 1,
    paddingHorizontal: 4,
    paddingTop: 9,
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

  // NAVBAR

  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
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
    fontSize: 13,
    color: '#1D1D1D',
  },

  // GERAIS

  page: {
    padding: 18,
    paddingBottom: 80,
    gap: 14,
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

editHeader: {
  height: 118,
  backgroundColor: colors.primary,
  borderBottomLeftRadius: 3,
  borderBottomRightRadius: 3,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 4 },
  elevation: 6,
},

editBack: {
  position: 'absolute',
  left: 12,
  top: 45,
},

editHeaderTitle: {
  color: '#FFFFFF',
  fontSize: 20,
  fontWeight: '800',
},

editContent: {
  flex: 1,
  paddingTop: 32,
  paddingHorizontal: 38,
  backgroundColor: colors.bg,
},

editInput: {
  borderWidth: 1.8,
  borderColor: colors.primary,
  borderRadius: 8,
  backgroundColor: '#FFFFFF',
  paddingHorizontal: 6,
  fontSize: 14,
  color: colors.text,
  marginBottom: 40,
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 2 },
  elevation: 4,
},

editButton: {
  alignSelf: 'center',
  marginTop: 16,
  height: 34,
  paddingHorizontal: 17,
  borderRadius: 10,
  backgroundColor: colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 3 },
  elevation: 5,
},

editButtonText: {
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: '700',
},
supportTextarea: {
  height: 170,
  borderWidth: 1.8,
  borderColor: colors.primary,
  borderRadius: 8,
  backgroundColor: '#FFFFFF',
  paddingHorizontal: 10,
  paddingTop: 10,
  fontSize: 14,
  color: colors.text,
  textAlignVertical: 'top',
  marginBottom: 40,
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 2 },
  elevation: 4,
},

horariosContent: {
  padding: 24,
  gap: 20,
},

horarioCard: {
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  padding: 20,
  shadowColor: '#000',
  shadowOpacity: 0.15,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
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
favoriteHeader: {
  height: 119,
  backgroundColor: colors.primary,
  borderBottomLeftRadius: 3,
  borderBottomRightRadius: 3,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 4 },
  elevation: 6,
},

favoriteHeaderTitle: {
  color: '#FFFFFF',
  fontSize: 20,
  fontWeight: '800',
},

favoriteContent: {
  flex: 1,
  backgroundColor: colors.bg,
  paddingHorizontal: 13,
  paddingTop: 12,
},

favoriteSearchBox: {
  height: 34,
  borderWidth: 1.4,
  borderColor: colors.primary,
  borderRadius: 6,
  backgroundColor: '#FFFFFF',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 8,
  paddingRight: 5,
  marginBottom: 26,
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 2 },
  elevation: 4,
},

favoriteSearchInput: {
  flex: 1,
  height: '100%',
  paddingVertical: 0,
  fontSize: 13,
  color: colors.text,
},

favoriteList: {
  gap: 7,
},

favoriteCard: {
  height: 51,
  backgroundColor: '#FFFFFF',
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
  height: 34,
  paddingHorizontal: 17,
  borderRadius: 10,
  backgroundColor: '#17B90C',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 3 },
  elevation: 5,
},

favoriteAddButtonText: {
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: '700',
},
});