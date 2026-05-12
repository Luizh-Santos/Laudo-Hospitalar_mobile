import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from '../../styles/index.js';
import { routes } from '../../routes.js';
import { BottomNav } from '../../components/index.js';

export default function Suporte({ nav }) {
  return (
    <View style={styles.flex}>
      <View style={styles.configProfileHeader}>
        <Feather name="life-buoy" size={72} color="#FFFFFF" />
        <Text style={styles.configProfileName}>Suporte</Text>
      </View>

      <ScrollView contentContainerStyle={styles.page}>
        <TouchableOpacity
          style={styles.configMenuItem}
          onPress={() => nav.go(routes.faleConosco)}
        >


          <Feather name="message-circle" size={24} color="#222" />
          <Text style={styles.configMenuText}>Fale Conosco</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.configMenuItem}
          onPress={() => nav.go(routes.horarios)}
        >
          <Feather name="clock" size={24} color="#222" />
          <Text style={styles.configMenuText}>Horários de Atendimento</Text>
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