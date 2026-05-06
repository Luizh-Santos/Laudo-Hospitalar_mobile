import React from 'react';
import { KeyboardAvoidingView, Platform, Pressable, Text, View } from 'react-native';
import { styles } from '../../styles';
import { routes } from '../../routes';
import { MedLogo, MedInput } from '../../components';

export default function Login({ nav }) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.loginPage}>
      <MedLogo />

      <View style={styles.loginForm}>
        <MedInput icon="user" placeholder="Usuário" />
        <MedInput icon="key" placeholder="Senha" secure />

        <Pressable onPress={() => nav.go(routes.esqueci1)}>
          <Text style={styles.forgotLink}>Esqueci minha senha</Text>
        </Pressable>

        <Pressable style={styles.loginButton} onPress={() => nav.reset(routes.medicoLaudos)}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
