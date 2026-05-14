import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function BuscarProcedimentos({ nav }) { return <MedicoLayout nav={nav}><SearchList title="Buscar Procedimentos" placeholder="Digite o procedimento" items={['Internação clínica','Tomografia computadorizada','Eletrocardiograma']} /></MedicoLayout>; }
