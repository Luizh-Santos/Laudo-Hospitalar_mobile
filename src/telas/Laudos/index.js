import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles, colors } from '../../styles/index.js';
import { routes } from '../../routes.js';

export default function Laudos({ nav }) {
  const [tab, setTab] = useState('pendentes');

  const laudos = [
    {
      nome: 'JOAO MARCOS FRANCA',
      tipo: 'SUS',
      setor: 'ALA SUS: 53',
    },
    {
      nome: 'JOAO MARCOS FRANCA',
      tipo: 'SUS',
      setor: 'ALA SUS: 53',
    },
    {
      nome: 'JOAO MARCOS FRANCA',
      tipo: 'SUS',
      setor: 'ALA SUS: 53',
    },
  ];

  return (
    <View style={styles.flex}>
      <View style={styles.medicoHeader}>
        <Image
          source={require('../../../assets/logobranca.png')}
          style={styles.whiteLogo}
        />

        <Text style={styles.screenTitle}>Laudos</Text>

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Feather name="search" size={16} color="#6E767C" />
            <TextInput
              placeholder="Pesquisar"
              placeholderTextColor="#9A9A9A"
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="filter-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.contentFlat}>
        <View style={styles.tabsWrap}>
          <TouchableOpacity
            style={styles.tabMed}
            onPress={() => setTab('pendentes')}
          >
            <Text style={styles.tabLabel}>Laudos Pendentes</Text>
            {tab === 'pendentes' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabMed}
            onPress={() => setTab('concluidos')}
          >
            <Text style={styles.tabLabel}>Laudos Concluídos</Text>
            {tab === 'concluidos' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        </View>

        {laudos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.laudoCard}
            onPress={() => nav.go(routes.menuPaciente)}
          >
            <View style={styles.statusIconBox}>
              {tab === 'pendentes' ? (
                <MaterialCommunityIcons
                  name="clipboard-alert-outline"
                  size={28}
                  color={colors.danger}
                />
              ) : (
                <Ionicons
                  name="checkmark-circle"
                  size={26}
                  color={colors.success}
                />
              )}
            </View>

            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>{item.nome}</Text>
              <Text style={styles.patientLine}>{item.tipo}</Text>
              <Text style={styles.patientMuted}>{item.setor}</Text>
            </View>

            {tab === 'concluidos' && (
              <View style={styles.rightAction}>
                <MaterialCommunityIcons
                  name="clipboard-check-outline"
                  size={18}
                  color="#1D1D1D"
                />
                <Text style={styles.rightActionText}>Novo AH</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() => nav.go(routes.medicoLaudos)}
        >
          <MaterialCommunityIcons
            name="file-document-outline"
            size={18}
            color="#1D1D1D"
          />
          <Text style={styles.bottomText}>Laudos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() => nav.go(routes.favoritos)}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={18} color="#1D1D1D" />
          <Text style={styles.bottomText}>Conversas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() => nav.go(routes.notificacoes)}
        >
          <Ionicons name="notifications-outline" size={18} color="#1D1D1D" />
          <Text style={styles.bottomText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() => nav.go(routes.configuracoes)}
        >
          <Ionicons name="settings-outline" size={18} color="#1D1D1D" />
          <Text style={styles.bottomText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}