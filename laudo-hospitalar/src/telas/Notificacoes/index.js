import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Notificacoes({ nav }) { return <MedicoLayout nav={nav}><ScrollView contentContainerStyle={styles.page}>{['Novo atendimento atribuído','Laudo pendente de finalização','Laudo concluído com sucesso'].map((n,i)=><Card key={n}><Text style={styles.cardTitle}>{n}</Text><Text style={styles.cardText}>{i===0?'Hoje, 10:30':'Ontem, 15:10'}</Text></Card>)}</ScrollView></MedicoLayout>; }
