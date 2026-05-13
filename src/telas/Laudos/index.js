import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { styles, colors } from '../../styles/index.js';
import { routes } from '../../routes.js';
import { HeaderLaudos, BottomNav } from '../../components/index.js';
import ModalFiltro from '../Filtro/index.js';

export default function Laudos({ nav }) {
  const [tab, setTab] = useState('pendentes');
  const [filtroAberto, setFiltroAberto] = useState(false);

  const laudos = [
    { nome: 'JOAO MARCOS FRANCA', tipo: 'SUS', setor: 'ALA SUS: 53' },
    { nome: 'JOAO MARCOS FRANCA', tipo: 'SUS', setor: 'ALA SUS: 53' },
    { nome: 'JOAO MARCOS FRANCA', tipo: 'SUS', setor: 'ALA SUS: 53' },
  ];

  return (
    <View style={styles.flex}>
      <HeaderLaudos onFilterPress={() => setFiltroAberto(true)} />

      <ScrollView style={styles.contentFlat}>
        <View style={styles.tabsWrap}>
          <TouchableOpacity style={styles.tabMed} onPress={() => setTab('pendentes')}>
            <Text style={styles.tabLabel}>Laudos Pendentes</Text>
            {tab === 'pendentes' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabMed} onPress={() => setTab('concluidos')}>
            <View style={styles.tabLabelRow}>
              <Text style={styles.tabLabel}>Laudos Concluídos</Text>
            </View>
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
                <MaterialIcons
                  name="verified"
                  size={28}
                  color={colors.success}
                />
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

      <ModalFiltro
        visible={filtroAberto}
        onClose={() => setFiltroAberto(false)}
        onAplicar={() => setFiltroAberto(false)}
      />
    </View>
  );
}
