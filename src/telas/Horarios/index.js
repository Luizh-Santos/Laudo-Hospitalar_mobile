import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Horarios({ nav }) { return <MedicoLayout nav={nav}><ListPage title="Horários de Atendimento" items={['Segunda a sexta: 08h às 18h','Sábado: 08h às 12h','Suporte emergencial: plantão interno']} icon="clock" /></MedicoLayout>; }
