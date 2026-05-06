import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Contato({ nav }) { return <FormPage nav={nav} title="Entre em Contato Conosco" subtitle="Tem dúvidas sobre o sistema, deseja agendar uma demonstração ou falar com nossa equipe?" fields={['Nome','Empresa','Telefone','E-mail']} textarea="Mensagem" button="Enviar" />; }
