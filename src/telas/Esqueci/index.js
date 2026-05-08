import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from '../../styles/index.js';
import { routes } from '../../routes.js';
import { MedLogo } from '../../components/index.js';

export default function Esqueci({ nav, step = 1 }) {
  function nextStep() {
    if (step === 1) nav.go(routes.esqueci2);
    if (step === 2) nav.go(routes.esqueci3);
    if (step === 3) nav.go(routes.esqueci4);
    if (step === 4) nav.go(routes.esqueci5);
    if (step === 5) nav.reset(routes.login);
  }

  if (step === 5) {
    return (
      <View style={styles.resetSuccessPage}>
        <MedLogo style={styles.resetLogo} />

        <Text style={styles.resetSuccessText}>
          SENHA ALTERADA COM SUCESSO
        </Text>

        <Feather name="check" size={42} color="#009CA6" />

        <TouchableOpacity style={styles.resetButton} onPress={nextStep}>
          <Text style={styles.resetButtonText}>CONCLUÍDO</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.resetPage}>
      <TouchableOpacity onPress={() => nav.back()} style={styles.resetBack}>
        <Feather name="chevron-left" size={22} color="#222" />
      </TouchableOpacity>

      <Text style={styles.resetTitle}>Redefinir Senha</Text>

      {step === 1 && (
        <>
          <Text style={styles.resetInstruction}>
            Digite o seu CPF cadastrado para{'\n'}redefinir sua senha
          </Text>

          <TextInput
            placeholder="CPF"
            placeholderTextColor="#9A9A9A"
            style={styles.resetInput}
          />

          <TouchableOpacity style={styles.resetButton} onPress={nextStep}>
            <Text style={styles.resetButtonText}>CONTINUAR</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 2 && (
        <>
          <Text style={styles.resetInstruction}>
            Escolha um contato para{'\n'}confirmar sua conta
          </Text>

          <TouchableOpacity style={styles.resetOption}>
            <Feather name="target" size={13} color="#111" />
            <Text style={styles.resetOptionText}>
              Envie um código para o celular:{'\n'}
              149****4967
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetOption}>
            <Feather name="target" size={13} color="#111" />
            <Text style={styles.resetOptionText}>
              Envie um código para o e-mail:{'\n'}
              jo**********47@gmail.com
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton} onPress={nextStep}>
            <Text style={styles.resetButtonText}>CONTINUAR</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 3 && (
        <>
          <Text style={styles.resetInstruction}>
            Insira o código que enviamos
          </Text>

          <TextInput
            placeholder="Insira o Código"
            placeholderTextColor="#9A9A9A"
            style={styles.resetInput}
          />

          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.resendButtonText}>Reenviar Código</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.resetButton, { marginTop: 36 }]} onPress={nextStep}>
            <Text style={styles.resetButtonText}>CONTINUAR</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 4 && (
        <>
          <Text style={styles.resetInstruction}>
            Insira uma nova senha
          </Text>

          <TextInput
            placeholder="Nova Senha"
            placeholderTextColor="#9A9A9A"
            secureTextEntry
            style={styles.resetInput}
          />

          <TextInput
            placeholder="Confirmar Senha"
            placeholderTextColor="#9A9A9A"
            secureTextEntry
            style={[styles.resetInput, { marginTop: 14 }]}
          />

          <TouchableOpacity style={[styles.resetButton, { marginTop: 36 }]} onPress={nextStep}>
            <Text style={styles.resetButtonText}>ALTERAR SENHA</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}