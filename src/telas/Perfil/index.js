import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Perfil({ nav }) { return <MedicoLayout nav={nav}><FormPage nav={nav} title="Meu Perfil" fields={['Nome','Telefone','Instituição']} button="Alterar" embedded /></MedicoLayout>; }
