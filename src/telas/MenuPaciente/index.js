import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles.js';
import { routes } from '../../routes.js';

export default function MenuPaciente({ nav }) {
  return (
    <View style={styles.flex}>
      <View style={styles.patientHeader}>
        <TouchableOpacity onPress={() => nav.back()} style={styles.editBack}>
          <Feather name="chevron-left" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.patientHeaderTitle}>Paciente</Text>
      </View>

      <View style={styles.patientContent}>
        <View style={styles.patientTopCard}>
          <Feather name="user" size={42} color="#5B5B5B" />

          <View>
            <Text style={styles.patientTopName}>
             João Marcos de França Santos
            </Text>

          </View>
        </View>

        <View style={styles.patientDataCard}>
          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Paciente</Text>
            <Text style={styles.patientDataValue}> João Marcos de França Santos</Text>
          </View>

          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Convênio</Text>
            <Text style={styles.patientDataValue}>SUS</Text>
          </View>

          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Setor / Leito</Text>
            <Text style={styles.patientDataValue}>UTI A: EO1</Text>
          </View>

          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Atendimento</Text>
            <Text style={styles.patientDataValue}>50</Text>
          </View>

        </View>

        <TouchableOpacity
          style={styles.patientButton}
          onPress={() => nav.go(routes.preencherLaudos)}
        >
          <Text style={styles.patientButtonText}>PREENCHER AIH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}