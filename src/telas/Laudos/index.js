import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { styles, colors } from '../../styles/index.js';
import { routes } from '../../routes.js';
import { HeaderLaudos, BottomNav } from '../../components/index.js';

export default function Laudos({ nav }) {
  const [tab, setTab] = useState('pendentes');

  const laudos = [
    { nome: 'JOAO MARCOS FRANCA', tipo: 'SUS', setor: 'ALA SUS: 53' },
    { nome: 'JOAO MARCOS FRANCA', tipo: 'SUS', setor: 'ALA SUS: 53' },
    { nome: 'JOAO MARCOS FRANCA', tipo: 'SUS', setor: 'ALA SUS: 53' },
  ];

  return (
    <View style={styles.flex}>
      <HeaderLaudos />

      <ScrollView style={styles.contentFlat}>
        <View style={styles.tabsWrap}>
          <TouchableOpacity style={styles.tabMed} onPress={() => setTab('pendentes')}>
            <Text style={styles.tabLabel}>Laudos Pendentes</Text>
            {tab === 'pendentes' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabMed} onPress={() => setTab('concluidos')}>
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
                <Ionicons name="checkmark-circle" size={26} color={colors.success} />
              )}
            </View>

            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>{item.nome}</Text>
              <Text style={styles.patientLine}>{item.tipo}</Text>
              <Text style={styles.patientMuted}>{item.setor}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomNav nav={nav} />
    </View>
  );
}