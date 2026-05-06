import React from 'react';
import { SafeAreaView, View, Pressable, Text, TextInput, ScrollView, Image } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles, colors } from '../styles';
import { routes, routeTitles } from '../routes';

export function Header({ nav, medico=false }) {
  return (
    <SafeAreaView style={styles.safeHeader}>
      <View style={styles.header}>
        {nav.canBack ? (
          <Pressable onPress={nav.back} style={styles.headerIcon}><Feather name="chevron-left" size={24} color={colors.text}/></Pressable>
        ) : <View style={styles.headerIcon}/>}        
        <Text style={styles.headerTitle}>{routeTitles[nav.current]}</Text>
        {medico ? (
          <Pressable onPress={() => nav.go(routes.notificacoes)} style={styles.headerIcon}><Feather name="bell" size={20} color={colors.text}/></Pressable>
        ) : <Pressable onPress={() => nav.go(routes.login)} style={styles.headerLogin}><Text style={styles.headerLoginText}>Login</Text></Pressable>}
      </View>
    </SafeAreaView>
  );
}

export function MedLogo({ white=false, style }) {
  return <Image source={white ? require('../../assets/logobranca.png') : require('../../assets/logo.png')} style={style || styles.loginLogo} />;
}

export function MedInput({ icon='user', placeholder, secure=false, value, onChangeText }) {
  return (
    <View style={styles.medInputWrap}>
      <Feather name={icon} size={12} color="#7C7C7C" />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#8F8F8F"
        style={styles.medInput}
      />
    </View>
  );
}

export function MedicoHeader({ title='Laudos' }) {
  return (
    <View style={styles.medicoHeader}>
      <MedLogo white style={styles.whiteLogo} />
      <Text style={styles.screenTitle}>{title}</Text>
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Feather name="search" size={16} color="#6A6A6A" />
          <TextInput placeholder="Pesquisar" placeholderTextColor="#9B9B9B" style={styles.searchInput} />
        </View>
        <Pressable style={styles.filterBtn}>
          <Feather name="filter" size={18} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}

export function BottomNav({ nav }) {
  const items = [
    ['Laudos', 'file-text', routes.medicoLaudos],
    ['Conversas', 'message-circle', routes.menuPaciente],
    ['Notificações', 'bell', routes.notificacoes],
    ['Configurações', 'settings', routes.configuracoes],
  ];
  return (
    <View style={styles.bottomNav}>
      {items.map(([label, icon, route]) => (
        <Pressable key={route} onPress={() => nav.reset(route)} style={styles.bottomItem}>
          <Feather name={icon} size={16} color="#111" />
          <Text style={styles.bottomText}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export function MedicoLayout({ nav, title='Laudos', children }) {
  return (
    <View style={styles.flex}>
      <MedicoHeader title={title} />
      {children}
      <BottomNav nav={nav} />
    </View>
  );
}

export function HomeNav({ nav }) {
  return (
    <View style={styles.homeNav}>
      {[[ 'Início', routes.home ], [ 'Sobre', routes.sobre ], [ 'Funcionalidades', routes.funcionalidades ], [ 'Contato', routes.contato ]].map(([label, r]) => (
        <Pressable key={r} onPress={() => nav.reset(r)} style={[styles.homeNavBtn, nav.current===r && styles.homeNavBtnActive]}>
          <Text style={[styles.homeNavText, nav.current===r && styles.homeNavTextActive]}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export function Input({ placeholder, secure=false, multiline=false, value, onChangeText }) {
  return <TextInput placeholder={placeholder} secureTextEntry={secure} multiline={multiline} value={value} onChangeText={onChangeText}
    placeholderTextColor="#9aa5ab" style={[styles.input, multiline && styles.textarea]} />;
}

export function Button({ label, onPress, secondary=false, danger=false }) {
  return <Pressable onPress={onPress} style={[styles.button, secondary && styles.buttonSecondary, danger && styles.buttonDanger]}>
    <Text style={[styles.buttonText, secondary && styles.buttonSecondaryText]}>{label}</Text>
  </Pressable>;
}

export function Card({ children, style }) { return <View style={[styles.card, style]}>{children}</View>; }
export function SectionTitle({ title, text }) { return <><Text style={styles.title}>{title}</Text>{text ? <Text style={styles.subtitle}>{text}</Text> : null}</>; }
export function SearchList({ title, placeholder, items }) { return <ScrollView contentContainerStyle={styles.page}><SectionTitle title={title}/><Input placeholder={placeholder}/>{items.map(i=><Card key={i}><Text style={styles.cardText}>{i}</Text></Card>)}</ScrollView>; }
export function ListPage({ title, items, icon }) { return <ScrollView contentContainerStyle={styles.page}><SectionTitle title={title}/>{items.map(i=><Card key={i}><View style={styles.rowCenter}><Feather name={icon} size={20} color="#0aa4aa"/><Text style={styles.cardText}>{i}</Text></View></Card>)}</ScrollView>; }
export function FormPage({ nav, title, subtitle, fields=[], textarea, button, embedded=false, secure=false }) { const content=<ScrollView contentContainerStyle={styles.page}><Card><SectionTitle title={title} text={subtitle}/>{fields.map(f=><Input key={f} placeholder={f} secure={secure && f.toLowerCase().includes('senha')}/>) }{textarea?<Input placeholder={textarea} multiline/>:null}<Button label={button} onPress={()=> embedded ? nav.back() : nav.go(routes.home)}/></Card></ScrollView>; if(embedded) return content; return <View style={styles.flex}><Header nav={nav}/>{content}</View>; }
