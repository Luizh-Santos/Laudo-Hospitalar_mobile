import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles.js';

export default function AlterarEmail({ nav }) {
  return (
    <View style={styles.flex}>
      <View style={styles.editHeader}>
        <TouchableOpacity onPress={() => nav.back()} style={styles.editBack}>
          <Feather name="chevron-left" size={32} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.editHeaderTitle}>Alterar E-mail</Text>
      </View>

      <View style={styles.editContent}>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="E-mail Atual"
          placeholderTextColor="#777"
          style={styles.editInput}
        />

        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Novo e-mail"
          placeholderTextColor="#777"
          style={styles.editInput}
        />

        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Confirmar Novo e-mail"
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