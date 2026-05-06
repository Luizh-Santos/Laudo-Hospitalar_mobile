import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from '../../styles/index.js';
import { routes } from '../../routes.js';
import { HeaderConfig, BottomNav } from '../../components/index.js';

export default function Configuracoes({ nav }) {
  return (
    <View style={styles.flex}>
      <HeaderConfig />

      <ScrollView contentContainerStyle={styles.page}>
        <TouchableOpacity style={styles.configItem} onPress={() => nav.go(routes.perfil)}>
          <Feather name="user" size={22} color="#213D4C" />
          <Text style={styles.configText}>Perfil</Text>
          <Feather name="chevron-right" size={22} color="#213D4C" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.configItem} onPress={() => nav.go(routes.seguranca)}>
          <Feather name="lock" size={22} color="#213D4C" />
          <Text style={styles.configText}>Segurança e acesso</Text>
          <Feather name="chevron-right" size={22} color="#213D4C" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.configItem} onPress={() => nav.go(routes.suporte)}>
          <Feather name="help-circle" size={22} color="#213D4C" />
          <Text style={styles.configText}>Suporte</Text>
          <Feather name="chevron-right" size={22} color="#213D4C" />
        </TouchableOpacity>
      </ScrollView>

      <BottomNav nav={nav} />
    </View>
  );
}