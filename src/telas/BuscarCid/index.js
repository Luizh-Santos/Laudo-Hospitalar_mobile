import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function BuscarCid({ nav }) { return <MedicoLayout nav={nav}><SearchList title="Buscar CID" placeholder="Digite o CID ou descrição" items={['J18.9 - Pneumonia não especificada','I10 - Hipertensão essencial','E11 - Diabetes mellitus tipo 2']} /></MedicoLayout>; }
