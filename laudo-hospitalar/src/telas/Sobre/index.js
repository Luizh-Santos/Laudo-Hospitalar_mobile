import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Sobre({ nav }) {
  const cards = [['zap','Tecnologia moderna para gestão e integração de laudos.'],['shield','Segurança de dados e transparência em todas as operações.'],['award','Integridade, responsabilidade e respeito em cada processo.'],['heart','Otimização do tempo da equipe e melhor experiência do paciente.']];
  return <View style={styles.flex}><Header nav={nav}/><HomeNav nav={nav}/><ScrollView contentContainerStyle={styles.page}><ImageBackground source={require('../../../assets/telasobre.png')} style={styles.banner}><View style={styles.overlay}/><Text style={styles.bannerTitle}>MedSync: Tecnologia que Cuida de Quem Cuida.</Text><Text style={styles.bannerText}>Nossa missão é transformar a gestão hospitalar, liberando a equipe médica de processos burocráticos.</Text></ImageBackground><View style={styles.grid}>{cards.map(([i,t])=><Card key={t} style={styles.miniCard}><Feather name={i} size={26} color={colors.teal}/><Text style={styles.cardText}>{t}</Text></Card>)}</View><SectionTitle title="Nossa Equipe"/><View style={styles.teamRow}>{['joao.png','luiz.png','luisfernando.png','thiago.png'].map((img,idx)=><View key={img} style={styles.member}><Image source={idx===0?require('../../../assets/joao.png'):idx===1?require('../../../assets/luiz.png'):idx===2?require('../../../assets/luisfernando.png'):require('../../../assets/thiago.png')} style={styles.memberImg}/><Text style={styles.memberName}>{['João Marcos','Luiz Henrique','Luis Fernando','Thiago'][idx]}</Text></View>)}</View></ScrollView></View>;
}
