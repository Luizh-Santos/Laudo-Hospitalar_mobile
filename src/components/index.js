import React from 'react';
import {
  SafeAreaView,
  View,
  Pressable,
  Text,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles, colors } from '../styles/index.js';
import { routes, routeTitles } from '../routes.js';

export function Header({ nav, medico = false }) {
  return (
    <SafeAreaView style={styles.safeHeader}>
      <View style={styles.header}>
        {nav.canBack ? (
          <Pressable onPress={nav.back} style={styles.headerIcon}>
            <Feather name="chevron-left" size={24} color={colors.text} />
          </Pressable>
        ) : (
          <View style={styles.headerIcon} />
        )}

        <Text style={styles.headerTitle}>{routeTitles[nav.current]}</Text>

        {medico ? (
          <Pressable
            onPress={() => nav.go(routes.notificacoes)}
            style={styles.headerIcon}
          >
            <Feather name="bell" size={20} color={colors.text} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => nav.go(routes.login)}
            style={styles.headerLogin}
          >
            <Text style={styles.headerLoginText}>Login</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

export function MedLogo({ white = false, style }) {
  return (
    <Image
      source={
        white
          ? require('../../assets/logobranca.png')
          : require('../../assets/logo.png')
      }
      style={style || styles.loginLogo}
    />
  );
}

export function HeaderLaudos() {
  return (
    <View style={styles.medicoHeader}>
      <MedLogo white style={styles.whiteLogo} />

      <Text style={styles.screenTitle}>Laudos</Text>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Feather name="search" size={16} color="#6A6A6A" />

          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#9B9B9B"
            style={styles.searchInput}
          />
        </View>

        <Pressable style={styles.filterBtn}>
          <Feather name="filter" size={18} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}

export function HeaderNotificacoes() {
  return (
    <View style={styles.notificacaoHeader}>
      <MedLogo white style={styles.notificacaoLogo} />
    </View>
  );
}

export function HeaderConfig() {
  return (
    <View style={styles.configHeader}>
      <MedLogo white style={styles.configLogo} />

      <Text style={styles.configTitle}>Configurações</Text>
    </View>
  );
}

export function HeaderPerfil() {
  return (
    <View style={styles.perfilHeader}>
      <MedLogo white style={styles.perfilLogo} />

      <Text style={styles.perfilTitle}>Perfil</Text>
    </View>
  );
}

export function BottomNav({ nav }) {
  const items = [
    ['Laudos', 'file-text', routes.medicoLaudos],
    ['Conversas', 'message-circle'],
    ['Notificações', 'bell', routes.notificacoes],
    ['Configurações', 'settings', routes.configuracoes],
  ];

  return (
    <View style={styles.bottomNav}>
      {items.map(([label, icon, route]) => (
        <Pressable
          key={route}
          onPress={() => nav.go(route)}
          style={styles.bottomItem}
        >
          <Feather name={icon} size={22} color="#111" />
          <Text style={styles.bottomText}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export function MedInput({
  icon = 'user',
  placeholder,
  secure = false,
  value,
  onChangeText,
}) {
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

export function HomeNav({ nav }) {
  const items = [
    ['Início', routes.home],
    ['Sobre', routes.sobre],
    ['Funcionalidades', routes.funcionalidades],
    ['Contato', routes.contato],
  ];

  return (
    <View style={styles.homeNav}>
      {items.map(([label, route]) => (
        <Pressable
          key={route}
          onPress={() => nav.reset(route)}
          style={[
            styles.homeNavBtn,
            nav.current === route && styles.homeNavBtnActive,
          ]}
        >
          <Text
            style={[
              styles.homeNavText,
              nav.current === route && styles.homeNavTextActive,
            ]}
          >
            {label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

export function Input({
  placeholder,
  secure = false,
  multiline = false,
  value,
  onChangeText,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secure}
      multiline={multiline}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#9aa5ab"
      style={[styles.input, multiline && styles.textarea]}
    />
  );
}

export function Button({
  label,
  onPress,
  secondary = false,
  danger = false,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        secondary && styles.buttonSecondary,
        danger && styles.buttonDanger,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          secondary && styles.buttonSecondaryText,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function SectionTitle({ title, text }) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      {text ? <Text style={styles.subtitle}>{text}</Text> : null}
    </>
  );
}

export function SearchList({ title, placeholder, items }) {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <SectionTitle title={title} />
      <Input placeholder={placeholder} />

      {items.map((item) => (
        <Card key={item}>
          <Text style={styles.cardText}>{item}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}

export function ListPage({ title, items, icon }) {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <SectionTitle title={title} />

      {items.map((item) => (
        <Card key={item}>
          <View style={styles.rowCenter}>
            <Feather name={icon} size={20} color="#0aa4aa" />
            <Text style={styles.cardText}>{item}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

export function FormPage({
  nav,
  title,
  subtitle,
  fields = [],
  textarea,
  button,
  embedded = false,
  secure = false,
}) {
  const content = (
    <ScrollView contentContainerStyle={styles.page}>
      <Card>
        <SectionTitle title={title} text={subtitle} />

        {fields.map((field) => (
          <Input
            key={field}
            placeholder={field}
            secure={secure && field.toLowerCase().includes('senha')}
          />
        ))}

        {textarea ? <Input placeholder={textarea} multiline /> : null}

        <Button
          label={button}
          onPress={() => (embedded ? nav.back() : nav.go(routes.login))}
        />
      </Card>
    </ScrollView>
  );

  if (embedded) return content;

  return (
    <View style={styles.flex}>
      <Header nav={nav} />
      {content}
    </View>
  );
}