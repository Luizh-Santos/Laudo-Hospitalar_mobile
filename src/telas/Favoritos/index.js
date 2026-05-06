import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { Header, HomeNav, Input, Button, Card, SectionTitle, MedicoLayout, SearchList, ListPage, FormPage } from '../../components';

export default function Favoritos({ nav }) { return <MedicoLayout nav={nav}><ListPage title="Laudos Favoritos" items={['Pneumonia comunitária','Insuficiência cardíaca','Pós-operatório geral']} icon="star" /></MedicoLayout>; }
