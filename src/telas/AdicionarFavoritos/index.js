import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { routes } from '../../routes.js';

import { styles } from './styles.js';

export default function AdicionarFavoritos({ nav }) {
  const searchInputRef = useRef(null);
  const laudos = ['PNEUMONIA', 'PNEUMONIA', 'PNEUMONIA', 'PNEUMONIA'];

  return (
    <View style={styles.flex}>
      <View style={styles.favoriteHeader}>
        <TouchableOpacity
  onPress={() => {
    if (nav.current === routes.favoritosConfig) {
      nav.reset(routes.configuracoes);
    } else {
      nav.reset(routes.medicoLaudos);
    }
  }}
  style={styles.editBack}
>
          <Feather name="chevron-left" size={32} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.favoriteHeaderTitle}>Laudos Favoritos</Text>
      </View>

      <View style={styles.favoriteContent}>
        <View
          style={styles.favoriteSearchBox}
          onTouchStart={() => searchInputRef.current?.focus()}
        >
          <TextInput
            ref={searchInputRef}
            placeholder="Pesquisar"
            placeholderTextColor="#8A8A8A"
            returnKeyType="search"
            showSoftInputOnFocus
            style={styles.favoriteSearchInput}
          />
          <Feather name="search" size={28} color="#666" />
        </View>

        <View style={styles.favoriteList}>
          {laudos.map((item, index) => (
            <View key={index} style={styles.favoriteCard}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={28}
                color="#222"
              />

              <Text style={styles.favoriteCardText}>{item}</Text>

              <View style={styles.favoriteActions}>
                <TouchableOpacity style={styles.favoriteAction}>
                  <Feather name="edit-2" size={20} color="#222" />
                  <Text style={styles.favoriteActionText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.favoriteAction}>
                  <MaterialCommunityIcons
                    name="file-remove-outline"
                    size={20}
                    color="#222"
                  />
                  <Text style={styles.favoriteActionText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.favoriteAddButton}>
          <Text style={styles.favoriteAddButtonText}>ADICIONAR LAUDO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
