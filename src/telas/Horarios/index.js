import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from '../../styles/index.js';

export default function Horarios({ nav }) {
  return (
    <View style={styles.flex}>
      <View style={styles.editHeader}>
        <TouchableOpacity
          onPress={() => nav.back()}
          style={styles.editBack}
        >
          <Feather name="chevron-left" size={32} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.editHeaderTitle}>
          Horários
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.horariosContent}>
        <View style={styles.horarioCard}>
          <Text style={styles.horarioTitle}>
            Atendimento Geral
          </Text>

          <Text style={styles.horarioText}>
            Segunda à Sexta
          </Text>

          <Text style={styles.horarioText}>
            08:00 às 18:00
          </Text>
        </View>

        <View style={styles.horarioCard}>
          <Text style={styles.horarioTitle}>
            Suporte Técnico
          </Text>

          <Text style={styles.horarioText}>
            Segunda à Domingo
          </Text>

          <Text style={styles.horarioText}>
            24 Horas
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}