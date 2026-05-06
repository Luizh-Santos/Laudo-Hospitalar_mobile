import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '../../styles/index.js';
import { HeaderNotificacoes, BottomNav } from '../../components/index.js';

export default function Notificacoes({ nav }) {
  const notificacoes = [
    'JOAO MARCOS FRANÇA',
    'LUIS FERNANDO RODRIGUES BUENO',
    'TIAGO MELO',
    'LUIZ HENRIQUE',
  ];

  return (
    <View style={styles.flex}>
      <HeaderNotificacoes />

      <ScrollView style={styles.notificacaoContent}>
        {notificacoes.map((nome, index) => (
          <View key={index} style={styles.notificacaoItem}>
            <Image
              source={require('../../../assets/logo.png')}
              style={styles.notificacaoIconLogo}
            />

            <View style={styles.notificacaoTextArea}>
              <Text style={styles.notificacaoTitle}>
                Nova internação atribuida ao seu cuidado!
              </Text>

              <View style={styles.notificacaoPatientRow}>
                <Ionicons name="person-outline" size={15} color="#000" />
                <Text style={styles.notificacaoPatient}>{nome}</Text>
              </View>
            </View>

            <Text style={styles.notificacaoTime}>Hoje, 10:30</Text>
          </View>
        ))}
      </ScrollView>

      <BottomNav nav={nav} />
    </View>
  );
}