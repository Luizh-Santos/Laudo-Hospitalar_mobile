import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from '../../styles/index.js';
import { HeaderPerfil, BottomNav, Card } from '../../components/index.js';

export default function Perfil({ nav }) {
  return (
    <View style={styles.flex}>
      <HeaderPerfil />

      <ScrollView contentContainerStyle={styles.page}>
        <Card>
          <Text style={styles.cardTitle}>Dados do perfil</Text>
          <Text style={styles.info}>Nome: João Marcos França</Text>
          <Text style={styles.info}>CRM: 000000/SP</Text>
          <Text style={styles.info}>E-mail: medico@medsync.com</Text>
        </Card>
      </ScrollView>

      <BottomNav nav={nav} />
    </View>
  );
}