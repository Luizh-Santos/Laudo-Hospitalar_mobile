import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from '../../styles/index.js';

export default function FaleConosco({ nav }) {
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
          Fale Conosco
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.editContent}>
        <TextInput
          placeholder="Assunto"
          placeholderTextColor="#777"
          style={styles.editInput}
        />

        <TextInput
          placeholder="Digite sua mensagem"
          placeholderTextColor="#777"
          multiline
          style={styles.supportTextarea}
        />

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>
            ENVIAR
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}