import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Pigz</Text>
      <Text style={styles.subtitle}>Para entregadores</Text>

      <Text style={styles.label}>Email ou Telefone</Text>
      <TextInput
        placeholder="example@pigz.com.br"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="********"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.register}>Não tem uma Conta? <Text style={styles.link}>Criar agora!</Text></Text>

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>Entrar com</Text>
        <View style={styles.separator} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Continuar com o Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  logo: { fontSize: 48, fontWeight: 'bold', color: '#F26600', textAlign: 'center' },
  subtitle: { textAlign: 'center', marginBottom: 30, fontSize: 16, color: '#333' },
  label: { fontWeight: '600', marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#F26600', borderRadius: 8, padding: 10, marginTop: 5 },
  link: { color: '#F26600', marginTop: 10 },
  button: { backgroundColor: '#F26600', padding: 15, borderRadius: 8, marginTop: 20 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  register: { textAlign: 'center', marginTop: 20, color: '#333' },
  separatorContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  separator: { flex: 1, height: 1, backgroundColor: '#ccc' },
  separatorText: { marginHorizontal: 10, color: '#777' },
  googleButton: { borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 8, alignItems: 'center' },
  googleText: { fontWeight: 'bold' }
});