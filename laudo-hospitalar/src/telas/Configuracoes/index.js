import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Configuracoes({ nav }) { const opts=[['Meu Perfil','user',routes.perfil],['Segurança e Acesso','lock',routes.seguranca],['Adicionar Laudos Favoritos','star',routes.adicionarFavoritos],['Suporte','life-buoy',routes.suporte],['Termos de Uso e Privacidade','file-text',routes.termos]]; return <MedicoLayout nav={nav}><ScrollView contentContainerStyle={styles.page}>{opts.map(([t,i,r])=><Pressable key={t} onPress={()=>nav.go(r)} style={styles.configItem}><Feather name={i} size={22} color={colors.teal}/><Text style={styles.configText}>{t}</Text><Feather name="chevron-right" size={22} color={colors.muted}/></Pressable>)}<Button label="Sair" danger onPress={()=>nav.reset(routes.login)}/></ScrollView></MedicoLayout>; }
