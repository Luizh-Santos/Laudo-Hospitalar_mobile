import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Termos({ nav }) { return <MedicoLayout nav={nav}><ScrollView contentContainerStyle={styles.page}><Card><Text style={styles.cardTitle}>Termos de Uso e Privacidade</Text><Text style={styles.cardText}>O sistema MedSync utiliza informações hospitalares apenas para apoio aos fluxos de laudos, mantendo foco em segurança, rastreabilidade e uso responsável dos dados.</Text></Card></ScrollView></MedicoLayout>; }
