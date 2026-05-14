import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles.js';
import { routes } from '../../routes.js';
import { BottomNav } from '../../components/index.js';

export default function Configuracoes({ nav }) {
  return (
    <View style={styles.flex}>
      <View style={styles.configProfileHeader}>
        <Feather name="user" size={92} color="#FFFFFF" />
        <Text style={styles.configProfileName}>Configurações</Text>
      </View>

      <View style={styles.configMenu}>
        <TouchableOpacity
          style={styles.configMenuItem}
          onPress={() => nav.go(routes.perfil)}
        >
          <MaterialCommunityIcons name="account-group" size={24} color="#222" />
          <Text style={styles.configMenuText}>Meu Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.configMenuItem}
          onPress={() => nav.go(routes.favoritosConfig)}
        >
          <Feather name="star" size={24} color="#222" />
          <Text style={styles.configMenuText}>Adicionar laudos Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.configMenuItem}
          onPress={() => nav.go(routes.seguranca)}
        >
          <Feather name="lock" size={24} color="#222" />
          <Text style={styles.configMenuText}>Segurança e Acesso</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.configMenuItem}
          onPress={() => nav.go(routes.suporte)}
        >
          <Feather name="life-buoy" size={24} color="#222" />
          <Text style={styles.configMenuText}>Suporte</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.configMenuItem}
          onPress={() => nav.go(routes.termos)}
        >
          <Feather name="file-text" size={24} color="#222" />
          <Text style={styles.configMenuText}>Termos de Uso e Privacidade</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => nav.reset(routes.login)}
        >
          <Text style={styles.logoutButtonText}>SAIR</Text>
        </TouchableOpacity>
      </View>

      <BottomNav nav={nav} />
    </View>
  );
}