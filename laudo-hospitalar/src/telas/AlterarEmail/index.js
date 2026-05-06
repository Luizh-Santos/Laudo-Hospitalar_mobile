import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function AlterarEmail({ nav }) { return <MedicoLayout nav={nav}><FormPage nav={nav} title="Alterar E-mail" fields={['E-mail atual','Novo e-mail']} button="Salvar" embedded /></MedicoLayout>; }
