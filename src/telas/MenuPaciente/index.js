import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from '../../styles/index.js';
import { routes } from '../../routes.js';
import { HeaderLaudos, BottomNav, Card } from '../../components/index.js';

export default function MenuPaciente({ nav }) {
  return (
    <View style={styles.flex}>
      <HeaderLaudos />

      <ScrollView contentContainerStyle={styles.page}>
        <Card>
          <Text style={styles.cardTitle}>JOAO MARCOS FRANCA</Text>
          <Text style={styles.info}>Tipo: SUS</Text>
          <Text style={styles.info}>Setor: ALA SUS: 53</Text>
        </Card>

        <TouchableOpacity
          style={styles.configItem}
          onPress={() => nav.go(routes.preencherLaudos)}
        >
          <Feather name="edit-3" size={22} color="#213D4C" />
          <Text style={styles.configText}>Preencher laudo</Text>
          <Feather name="chevron-right" size={22} color="#213D4C" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.configItem}
          onPress={() => nav.go(routes.buscarCid)}
        >
          <Feather name="search" size={22} color="#213D4C" />
          <Text style={styles.configText}>Buscar CID</Text>
          <Feather name="chevron-right" size={22} color="#213D4C" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.configItem}
          onPress={() => nav.go(routes.buscarProcedimentos)}
        >
          <Feather name="file-text" size={22} color="#213D4C" />
          <Text style={styles.configText}>Buscar procedimentos</Text>
          <Feather name="chevron-right" size={22} color="#213D4C" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.configItem}
          onPress={() => nav.go(routes.adicionarFavoritos)}
        >
          <Feather name="star" size={22} color="#213D4C" />
          <Text style={styles.configText}>Adicionar aos favoritos</Text>
          <Feather name="chevron-right" size={22} color="#213D4C" />
        </TouchableOpacity>
      </ScrollView>

      <BottomNav nav={nav} />
    </View>
  );
}