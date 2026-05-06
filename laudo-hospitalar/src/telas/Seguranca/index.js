import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Seguranca({ nav }) { return <MedicoLayout nav={nav}><ScrollView contentContainerStyle={styles.page}><Button label="Alterar E-mail" onPress={()=>nav.go(routes.alterarEmail)}/><Button label="Alterar Senha" onPress={()=>nav.go(routes.alterarSenha)} secondary/></ScrollView></MedicoLayout>; }
