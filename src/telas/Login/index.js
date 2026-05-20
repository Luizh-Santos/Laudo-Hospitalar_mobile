import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, Text, View } from 'react-native';
import { styles } from './styles.js';
import { routes } from '../../routes';
import { MedLogo, MedInput } from '../../components';

export default function Login({ nav }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function entrar() {
    const emailInformado = email.trim().toLowerCase();
    const senhaInformada = senha.trim();

    if (!emailInformado || !senhaInformada) {
      setErro('Informe e-mail e senha para entrar.');
      return;
    }

    if (emailInformado !== 'medico@medsync.com' || senhaInformada !== '123456') {
      setErro('E-mail ou senha inválidos.');
      return;
    }

    setErro('');
    nav.reset(routes.medicoLaudos);
  }

  function atualizarEmail(texto) {
    setEmail(texto);
    if (erro) setErro('');
  }

  function atualizarSenha(texto) {
    setSenha(texto);
    if (erro) setErro('');
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.loginPage}>
      <MedLogo />

      <View style={styles.loginForm}>
        <MedInput
          icon="user"
          placeholder="E-mail"
          value={email}
          onChangeText={atualizarEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <MedInput
          icon="key"
          placeholder="Senha"
          secure
          value={senha}
          onChangeText={atualizarSenha}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {erro ? <Text style={styles.loginError}>{erro}</Text> : null}

        <Pressable onPress={() => nav.go(routes.esqueci1)}>
          <Text style={styles.forgotLink}>Esqueci minha senha</Text>
        </Pressable>

        <Pressable style={styles.loginButton} onPress={entrar}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
