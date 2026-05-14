import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles.js';
import { routes } from '../../routes.js';
import { BottomNav } from '../../components/index.js';

export default function Seguranca({ nav }) {
  return (
    <View style={styles.flex}>
      <View style={styles.configProfileHeader}>
        <Feather name="lock" size={72} color="#FFFFFF" />
        <Text style={styles.configProfileName}>Segurança e Acesso</Text>
      </View>

      <ScrollView contentContainerStyle={styles.page}>
        <TouchableOpacity
          style={styles.configMenuItem}
          onPress={() => nav.go(routes.alterarEmail)}
        >
          <Feather name="mail" size={24} color="#222" />
          <Text style={styles.configMenuText}>Alterar E-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.configMenuItem}
          onPress={() => nav.go(routes.alterarSenha)}
        >
          <Feather name="key" size={24} color="#222" />
          <Text style={styles.configMenuText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => nav.go(routes.configuracoes)}
        >
          <Text style={styles.logoutButtonText}>VOLTAR</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav nav={nav} />
    </View>
  );
}