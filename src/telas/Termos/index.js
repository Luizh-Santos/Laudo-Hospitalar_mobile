import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles.js';
import { routes } from '../../routes.js';
import { BottomNav } from '../../components/index.js';

export default function Termos({ nav }) {
  return (
    <View style={styles.flex}>
      <View style={styles.configProfileHeader}>
        <Feather name="file-text" size={72} color="#FFFFFF" />
        <Text style={styles.configProfileName}>Termos de Uso</Text>
      </View>

      <ScrollView contentContainerStyle={styles.page}>
        <Text style={styles.cardTitle}>Termos de Uso e Privacidade</Text>

        <Text style={styles.info}>
          Este aplicativo é destinado ao auxílio no gerenciamento e preenchimento
          de laudos hospitalares.
        </Text>

        <Text style={styles.info}>
          As informações exibidas devem ser utilizadas apenas por usuários
          autorizados.
        </Text>

        <Text style={styles.info}>
          O acesso, uso e compartilhamento de dados devem respeitar as normas de
          segurança e privacidade da instituição.
        </Text>

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