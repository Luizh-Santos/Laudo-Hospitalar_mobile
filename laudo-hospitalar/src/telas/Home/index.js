import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Home({ nav }) {
  return <View style={styles.flex}><Header nav={nav}/><HomeNav nav={nav}/><ImageBackground source={require('../../../assets/telainicial.png')} style={styles.hero} resizeMode="cover"><View style={styles.overlay}/><View style={styles.heroContent}><Text style={styles.heroTitle}>Preenchimento de Laudo Hospitalar Integrado e Gestão</Text><View style={styles.heroLine}/><Text style={styles.heroSub}>Transformando laudos em agilidade: conectando médicos e faturamento para um hospital 100% digital.</Text><Button label="Fale com um especialista" onPress={() => nav.go(routes.contato)}/></View></ImageBackground></View>;
}
