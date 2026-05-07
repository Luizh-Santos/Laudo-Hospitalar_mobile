import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from '../../styles/index.js';

export default function Perfil({ nav }) {
  return (
    <View style={styles.flex}>
      <View style={styles.profileEditHeader}>
        <TouchableOpacity onPress={() => nav.back()} style={styles.editBack}>
          <Feather name="chevron-left" size={32} color="#FFFFFF" />
        </TouchableOpacity>

        <Feather name="user" size={96} color="#FFFFFF" />

        <Text style={styles.profilePhotoText}>Alterar Foto</Text>
      </View>

      <View style={styles.profileForm}>
        <Text style={styles.profileLabel}>Nome</Text>
        <TextInput style={styles.profileInput} />

        <Text style={styles.profileLabel}>CRM</Text>
        <TextInput style={styles.profileInput} />

        <Text style={styles.profileLabel}>Telefone</Text>
        <TextInput style={styles.profileInput} />

        <Text style={styles.profileLabel}>Instituição</Text>
        <TextInput style={styles.profileInput} />

        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>ATUALIZAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}