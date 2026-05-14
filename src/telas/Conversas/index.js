import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles.js';
import { HeaderNotificacoes, BottomNav } from '../../components/index.js';

export default function Conversas({ nav }) {
  return (
    <View style={styles.flex}>
      <HeaderNotificacoes />

      <View style={styles.mensagemPage}>
        <View style={styles.mensagemCard}>
          <View style={styles.mensagemIcon}>
            <Feather name="message-circle" size={34} color="#314B5D" />
          </View>

          <View style={styles.mensagemBadge}>
            <Text style={styles.mensagemBadgeText}>Em breve!</Text>
          </View>

          <Text style={styles.mensagemTitle}>Mensagens</Text>

          <Text style={styles.mensagemText}>
            O recurso de mensagens esta em desenvolvimento e sera disponibilizado
            em uma atualizacao futura do sistema MedSync.
          </Text>
        </View>
      </View>

      <BottomNav nav={nav} />
    </View>
  );
}
