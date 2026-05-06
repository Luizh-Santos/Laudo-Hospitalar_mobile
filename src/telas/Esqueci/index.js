import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Esqueci({ nav, step }) { const data={1:['Informe seu e-mail','E-mail',routes.esqueci2],2:['Confirme seus dados','CPF',routes.esqueci3],3:['Digite o código recebido','Código de verificação',routes.esqueci4],4:['Crie uma nova senha','Nova senha',routes.esqueci5],5:['Senha alterada com sucesso','',routes.login]}; const [title, ph, next]=data[step]; return <View style={styles.flex}><Header nav={nav}/><View style={styles.centerPage}><Card><SectionTitle title={title} text={step===5?'Agora você já pode entrar novamente no sistema.':'Siga as etapas para recuperar o acesso.'}/>{ph?<Input placeholder={ph} secure={step===4}/>:null}<Button label={step===5?'Ir para login':'Continuar'} onPress={()=>nav.go(next)}/></Card></View></View>; }
