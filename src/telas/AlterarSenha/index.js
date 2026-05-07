import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from '../../styles/index.js';

export default function AlterarEmail({ nav }) {
  return (
    <View style={styles.flex}>
      <View style={styles.editHeader}>
        <TouchableOpacity onPress={() => nav.back()} style={styles.editBack}>
          <Feather name="chevron-left" size={32} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.editHeaderTitle}>Alterar Senha</Text>
      </View>

      <View style={styles.editContent}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#777"
          style={styles.editInput}
        />

        <TextInput
          placeholder="Nova Senha"
          placeholderTextColor="#777"
          style={styles.editInput}
        />

        <TextInput
          placeholder="Confirmar Nova Senha"
          placeholderTextColor="#777"
          style={styles.editInput}
        />

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}