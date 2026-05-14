import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/index.js';
import { styles } from './styles.js';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Funcionalidades({ nav }) {
 const items=[['file-text','Preenchimento de Laudos',['Acesso rápido aos atendimentos abertos.','Preenchimento digital e automação de dados.','Envio automático após conclusão.']],['folder','Gestão de Laudos',['Visualização de pendentes, prontos e anexados.','Filtros por médico, paciente, data ou convênio.','Organização rápida por status.']],['bell','Notificações e Alertas',['Avisos de novos atendimentos.','Lembretes de laudos pendentes.','Avisos de laudos concluídos.']],['message-square','Comunicação Integrada',['Canal de suporte e contato.','Redução de retrabalho entre setores.']]];
 return <View style={styles.flex}><Header nav={nav}/><HomeNav nav={nav}/><ScrollView contentContainerStyle={styles.page}><ImageBackground source={require('../../../assets/telafuncionalidades.png')} style={styles.banner}><View style={styles.overlay}/><Text style={styles.bannerTitle}>Funcionalidades do Sistema de Laudos</Text><Text style={styles.bannerText}>Agilidade, organização e comunicação entre setores.</Text></ImageBackground>{items.map(([icon,title,bullets])=><Card key={title}><View style={styles.rowCenter}><Feather name={icon} size={26} color={colors.teal}/><Text style={styles.cardTitle}>{title}</Text></View>{bullets.map(b=><Text key={b} style={styles.bullet}>• {b}</Text>)}</Card>)}</ScrollView></View>;
}
