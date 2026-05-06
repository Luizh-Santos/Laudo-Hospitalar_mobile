import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function AlterarSenha({ nav }) { return <MedicoLayout nav={nav}><FormPage nav={nav} title="Alterar Senha" fields={['Senha atual','Nova senha','Confirmar senha']} button="Salvar" embedded secure /></MedicoLayout>; }
