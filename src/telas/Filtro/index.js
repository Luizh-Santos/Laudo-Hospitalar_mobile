import React, { useMemo, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '../../styles/index.js';
import { styles } from './styles.js';

export default function ModalFiltro({ visible, onClose, onAplicar }) {
  const [tipoAtendimento, setTipoAtendimento] = useState('convenios');
  const [convenio, setConvenio] = useState('');
  const [alaSetor, setAlaSetor] = useState('');
  const [abrirConvenio, setAbrirConvenio] = useState(false);
  const [abrirAlaSetor, setAbrirAlaSetor] = useState(false);

  const convenios = useMemo(
    () => [
      'Santa Casa Saude',
      'CASSI',
      'IASMPE',
      'CABESP',
      'Bradesco Saude',
      'CAASP',
      'SPA Saude',
      'Sul America',
      'UNIMED Intercambio',
      'UNIMED Tupa',
    ],
    []
  );

  const alasSetores = useMemo(
    () => [
      'Ala SUS-Masculino',
      'Ala SUS-Feminino',
      'Ala Cirurgica-SUS',
      'Ala Cirurgica-Mista',
      'Ala Maternidade',
      'Pronto Socorro',
      'UTI-A',
      'UTI-B',
      'UTI-C',
    ],
    []
  );

  function limparFiltros() {
    setTipoAtendimento('convenios');
    setConvenio('');
    setAlaSetor('');
    setAbrirConvenio(false);
    setAbrirAlaSetor(false);
  }

  function aplicarFiltros() {
    onAplicar?.({
      tipoAtendimento,
      convenio,
      alaSetor,
    });
    onClose();
  }

  function renderOption(value, label) {
    const active = tipoAtendimento === value;

    return (
      <Pressable
        style={[styles.filterSegmentItem, active && styles.filterSegmentItemActive]}
        onPress={() => {
          setTipoAtendimento(value);
          if (value !== 'convenios') {
            setConvenio('');
            setAbrirConvenio(false);
          }
        }}
      >
        <Text
          style={[
            styles.filterSegmentText,
            active && styles.filterSegmentTextActive,
          ]}
        >
          {label}
        </Text>
      </Pressable>
    );
  }

  function renderDropdownItem(item, selected, onPress) {
    return (
      <Pressable
        key={item}
        style={[styles.filterDropdownItem, selected && styles.filterDropdownItemSelected]}
        onPress={onPress}
      >
        <Text style={styles.filterDropdownText}>{item}</Text>
        {selected ? <Feather name="check" size={16} color={colors.primary} /> : null}
      </Pressable>
    );
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.filterOverlay}>
        <Pressable style={styles.filterBackdrop} onPress={onClose} />

        <View style={styles.filterModal}>
          <View style={styles.filterHeader}>
            <Text style={styles.filterTitle}>Filtro</Text>

            <Pressable style={styles.filterClose} onPress={onClose}>
              <Feather name="x" size={22} color={colors.primary} />
            </Pressable>
          </View>

          <ScrollView
            style={styles.filterScroll}
            contentContainerStyle={styles.filterContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.filterCard}>
              <Text style={styles.filterLabel}>Tipo de atendimento</Text>

              <View style={styles.filterSegment}>
                {renderOption('sus', 'SUS')}
                {renderOption('convenios', 'Convenios')}
                {renderOption('particular', 'Particular')}
              </View>
            </View>

            {tipoAtendimento === 'convenios' ? (
              <View style={styles.filterCard}>
                <Text style={styles.filterLabel}>Convenio</Text>

                <Pressable
                  style={styles.filterSelect}
                  onPress={() => {
                    setAbrirConvenio(!abrirConvenio);
                    setAbrirAlaSetor(false);
                  }}
                >
                  <Text style={styles.filterSelectText}>
                    {convenio || 'Selecionar Convenio'}
                  </Text>
                  <Feather name="chevron-down" size={20} color="#5F6B73" />
                </Pressable>

                {abrirConvenio ? (
                  <ScrollView
                    style={styles.filterDropdown}
                    nestedScrollEnabled
                    showsVerticalScrollIndicator={false}
                  >
                    {convenios.map((item) =>
                      renderDropdownItem(item, convenio === item, () => {
                        setConvenio(item);
                        setAbrirConvenio(false);
                      })
                    )}
                  </ScrollView>
                ) : null}
              </View>
            ) : null}

            <View style={styles.filterCard}>
              <Text style={styles.filterLabel}>Ala/Setor</Text>

              <Pressable
                style={styles.filterSelect}
                onPress={() => {
                  setAbrirAlaSetor(!abrirAlaSetor);
                  setAbrirConvenio(false);
                }}
              >
                <Text style={styles.filterSelectText}>
                  {alaSetor || 'Selecionar Ala/Setor'}
                </Text>
                <Feather name="chevron-down" size={20} color="#5F6B73" />
              </Pressable>

              {abrirAlaSetor ? (
                <ScrollView
                  style={styles.filterDropdown}
                  nestedScrollEnabled
                  showsVerticalScrollIndicator={false}
                >
                  {alasSetores.map((item) =>
                    renderDropdownItem(item, alaSetor === item, () => {
                      setAlaSetor(item);
                      setAbrirAlaSetor(false);
                    })
                  )}
                </ScrollView>
              ) : null}
            </View>
          </ScrollView>

          <View style={styles.filterActions}>
            <Pressable
              style={[styles.filterButton, styles.filterButtonSecondary]}
              onPress={limparFiltros}
            >
              <Text style={styles.filterButtonSecondaryText}>LIMPAR</Text>
            </Pressable>

            <Pressable
              style={[styles.filterButton, styles.filterButtonPrimary]}
              onPress={aplicarFiltros}
            >
              <Text style={styles.filterButtonPrimaryText}>APLICAR</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
