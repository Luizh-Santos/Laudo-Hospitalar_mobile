import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles, colors } from '../../styles';
import { routes } from '../../routes';
import { MedicoLayout } from '../../components';

const pacientes = [
  ['JOAO MARCOS FRANCA', 'SUS', 'ALA SUS: 53'],
  ['JOAO MARCOS FRANCA', 'SUS', 'ALA SUS: 53'],
  ['JOAO MARCOS FRANCA', 'SUS', 'ALA SUS: 53'],
];

function Tabs({ aba, setAba }) {
  return (
    <View style={styles.tabsWrap}>
      {[
        ['pendentes', 'Laudos Pendentes'],
        ['concluidos', 'Laudos Concluídos'],
      ].map(([value, label]) => (
        <Pressable key={value} style={styles.tabMed} onPress={() => setAba(value)}>
          <Text style={styles.tabLabel}>{label}</Text>
          {aba === value ? <View style={styles.tabUnderline} /> : null}
        </Pressable>
      ))}
    </View>
  );
}

function LaudoCard({ item, concluido, nav }) {
  return (
    <Pressable style={styles.laudoCard} onPress={() => nav.go(routes.preencherLaudos)}>
      <View style={styles.statusIconBox}>
        {concluido ? (
          <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: colors.success, alignItems: 'center', justifyContent: 'center' }}>
            <Feather name="check" size={15} color={colors.white} />
          </View>
        ) : (
          <MaterialCommunityIcons name="clipboard-text-outline" size={28} color={colors.danger} />
        )}
      </View>

      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{item[0]}</Text>
        <Text style={styles.patientLine}>{item[1]}</Text>
        <Text style={styles.patientMuted}>{item[2]}</Text>
      </View>

      {concluido ? (
        <View style={styles.rightAction}>
          <MaterialCommunityIcons name="clipboard-check-outline" size={17} color="#1D1D1D" />
          <Text style={styles.rightActionText}>Novo AIH</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

export default function Laudos({ nav }) {
  const [aba, setAba] = useState('pendentes');
  const concluido = aba === 'concluidos';

  return (
    <MedicoLayout nav={nav} title="Laudos">
      <ScrollView style={styles.contentFlat} contentContainerStyle={{ paddingBottom: 68 }}>
        <Tabs aba={aba} setAba={setAba} />
        {pacientes.map((paciente, index) => (
          <LaudoCard key={`${paciente[0]}-${index}`} item={paciente} concluido={concluido} nav={nav} />
        ))}
      </ScrollView>
    </MedicoLayout>
  );
}
