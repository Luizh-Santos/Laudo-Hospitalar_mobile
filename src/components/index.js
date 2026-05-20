import React, { useRef } from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  Image,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles, colors } from '../styles/index.js';
import { routes } from '../routes.js';

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

export function HeaderLaudos({ onFilterPress }) {
  const searchInputRef = useRef(null);

  return (
    <View style={styles.medicoHeader}>
      <MedLogo white style={styles.whiteLogo} />

      <Text style={styles.screenTitle}>Laudos</Text>

      <View style={styles.searchRow}>
        <View
          style={styles.searchBox}
          onTouchStart={() => searchInputRef.current?.focus()}
        >
          <Feather name="search" size={16} color="#6A6A6A" />

          <TextInput
            ref={searchInputRef}
            placeholder="Pesquisar"
            placeholderTextColor="#9B9B9B"
            returnKeyType="search"
            showSoftInputOnFocus
            style={styles.searchInput}
          />
        </View>

        <Pressable style={styles.filterBtn} onPress={onFilterPress}>
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

export function BottomNav({ nav }) {
  const items = [
    {
      label: 'Laudos',
      icon: 'file-text',
      route: routes.medicoLaudos,
    },
    {
      label: 'Conversas',
      icon: 'message-circle',
      route: routes.conversas,
    },
    {
      label: 'Notificações',
      icon: 'bell',
      route: routes.notificacoes,
    },
    {
      label: 'Configurações',
      icon: 'settings',
      route: routes.configuracoes,
    },
  ];

  return (
    <View style={styles.bottomNav}>
      {items.map((item) => (
        <Pressable
          key={item.route}
          style={styles.bottomItem}
          onPress={() => nav.reset(item.route)}
        >
          <Feather
            name={item.icon}
            size={22}
            color="#111"
          />

          <Text style={styles.bottomText}>
            {item.label}
          </Text>
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
  ...inputProps
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
        {...inputProps}
      />
    </View>
  );
}
