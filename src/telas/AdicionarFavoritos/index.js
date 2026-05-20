import React, { useMemo, useRef, useState } from 'react';
import { Alert, Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { routes } from '../../routes.js';

import { styles } from './styles.js';

export default function AdicionarFavoritos({
  nav,
  laudos = [],
  onIniciarCadastroFavorito,
  onEditarLaudoFavorito,
  onExcluirLaudoFavorito,
  onSairFavoritos,
}) {
  const searchInputRef = useRef(null);
  const [texto, setTexto] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [nomeNovoLaudo, setNomeNovoLaudo] = useState('');
  const [laudoParaEditar, setLaudoParaEditar] = useState(null);

  const laudosFiltrados = useMemo(() => {
    const termo = texto.trim().toLowerCase();

    if (!termo) return laudos;

    return laudos.filter((laudo) =>
      laudo.nome.toLowerCase().includes(termo)
    );
  }, [laudos, texto]);

  function voltar() {
    onSairFavoritos?.();

    if (nav.current === routes.favoritosConfig) {
      nav.reset(routes.configuracoes);
      return;
    }

    nav.reset(routes.medicoLaudos);
  }

  function salvarLaudo() {
    setLaudoParaEditar(null);
    setNomeNovoLaudo('');
    setModalVisivel(true);
  }

  function confirmarNovoLaudo() {
    const nome = nomeNovoLaudo.trim().toUpperCase();

    if (!nome) {
      Alert.alert('Campo obrigatorio', 'Digite o nome do laudo.');
      return;
    }

    if (laudoParaEditar) {
      onEditarLaudoFavorito?.({ ...laudoParaEditar, nome });
    } else {
      onIniciarCadastroFavorito?.(nome);
    }

    setModalVisivel(false);
    setLaudoParaEditar(null);
    setNomeNovoLaudo('');
    setTexto('');
    nav.go(routes.preencherLaudos);
  }

  function editarLaudo(laudo) {
    setLaudoParaEditar(laudo);
    setNomeNovoLaudo(laudo.nome);
    setModalVisivel(true);
  }

  function excluirLaudo(id) {
    onExcluirLaudoFavorito?.(id);

    setTexto('');
  }

  return (
    <View style={styles.flex}>
      <View style={styles.favoriteHeader}>
        <TouchableOpacity onPress={voltar} style={styles.editBack}>
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
            value={texto}
            onChangeText={setTexto}
            returnKeyType="search"
            showSoftInputOnFocus
            style={styles.favoriteSearchInput}
          />
          <Feather name="search" size={28} color="#666" />
        </View>

        <View style={styles.favoriteList}>
          {laudosFiltrados.map((item) => (
            <View key={item.id} style={styles.favoriteCard}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={28}
                color="#222"
              />

              <Text style={styles.favoriteCardText}>{item.nome}</Text>

              <View style={styles.favoriteActions}>
                <TouchableOpacity
                  style={styles.favoriteAction}
                  onPress={() => editarLaudo(item)}
                >
                  <Feather name="edit-2" size={20} color="#222" />
                  <Text style={styles.favoriteActionText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.favoriteAction}
                  onPress={() => excluirLaudo(item.id)}
                >
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

        <TouchableOpacity style={styles.favoriteAddButton} onPress={salvarLaudo}>
          <Text style={styles.favoriteAddButtonText}>ADICIONAR LAUDO</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={modalVisivel}
        animationType="fade"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.favoriteModalOverlay}>
          <View style={styles.favoriteModal}>
            <Text style={styles.favoriteModalTitle}>Nome do laudo</Text>

            <TextInput
              placeholder="Digite o nome"
              placeholderTextColor="#8A8A8A"
              value={nomeNovoLaudo}
              onChangeText={setNomeNovoLaudo}
              autoCapitalize="characters"
              style={styles.favoriteModalInput}
            />

            <View style={styles.favoriteModalActions}>
              <TouchableOpacity
                style={styles.favoriteModalCancelButton}
                onPress={() => {
                  setModalVisivel(false);
                  setLaudoParaEditar(null);
                }}
              >
                <Text style={styles.favoriteModalCancelText}>CANCELAR</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.favoriteModalConfirmButton}
                onPress={confirmarNovoLaudo}
              >
                <Text style={styles.favoriteModalConfirmText}>CONTINUAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
