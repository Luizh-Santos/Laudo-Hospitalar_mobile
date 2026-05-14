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
              JOAO MARCOS DE FRANCA SANTOS
            </Text>

            <View style={styles.patientTopInfoRow}>
              <Text style={styles.patientTopInfo}>MASCULINO</Text>
              <Text style={styles.patientTopInfo}>22 ANOS</Text>
              <Text style={styles.patientTopInfo}>SUS UNIFICADO</Text>
            </View>
          </View>
        </View>

        <View style={styles.patientDataCard}>
          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Numero do atendimento</Text>
            <Text style={styles.patientDataValue}>25500000235689</Text>
          </View>

          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Tipo</Text>
            <Text style={styles.patientDataValue}>Internação</Text>
          </View>

          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Convênio</Text>
            <Text style={styles.patientDataValue}>SUS</Text>
          </View>

          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Ala</Text>
            <Text style={styles.patientDataValue}>Ala Sus Masculino</Text>
          </View>

          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Apartamento</Text>
            <Text style={styles.patientDataValue}>Apart. 55</Text>
          </View>

          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Admissão</Text>
            <Text style={styles.patientDataValue}>01/01/2025</Text>
          </View>

          <View style={styles.patientDataRow}>
            <Text style={styles.patientDataLabel}>Alta</Text>
            <Text style={styles.patientDataValue}>13/01/2025</Text>
          </View>

          <View style={[styles.patientDataRow, styles.patientDataRowLast]}>
            <Text style={styles.patientDataLabel}>Médico Responsável</Text>
            <Text style={styles.patientDataValue}>
              Luis Alberto Andrade Bueno
            </Text>
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