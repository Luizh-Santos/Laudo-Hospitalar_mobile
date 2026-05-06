import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function AdicionarFavoritos({ nav }) { return <MedicoLayout nav={nav}><FormPage nav={nav} title="Adicionar Laudo Favorito" fields={['Título do modelo']} textarea="Texto do laudo favorito" button="Adicionar" embedded /></MedicoLayout>; }
