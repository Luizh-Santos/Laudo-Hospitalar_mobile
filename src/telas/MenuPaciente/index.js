import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function MenuPaciente({ nav }) { return <MedicoLayout nav={nav}><ScrollView contentContainerStyle={styles.page}><SectionTitle title="Dados do Paciente" text="Resumo do atendimento selecionado."/><Card><Text style={styles.info}>Paciente: João Marcos França</Text><Text style={styles.info}>Setor: ALA SUS 53</Text><Text style={styles.info}>Convênio: SUS</Text><Text style={styles.info}>Status: Laudo pendente</Text></Card><Button label="Preencher Laudo" onPress={()=>nav.go(routes.preencherLaudos)}/></ScrollView></MedicoLayout>; }
