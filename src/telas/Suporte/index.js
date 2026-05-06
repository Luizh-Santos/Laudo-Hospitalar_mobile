import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Suporte({ nav }) { return <MedicoLayout nav={nav}><ScrollView contentContainerStyle={styles.page}><Button label="Fale Conosco" onPress={()=>nav.go(routes.faleConosco)}/><Button label="Horários de Atendimento" onPress={()=>nav.go(routes.horarios)} secondary/></ScrollView></MedicoLayout>; }
