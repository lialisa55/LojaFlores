import React, { useState, useEffect } from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Firebase from './FireBase';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro() {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  function cadastrar() {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        Alert.alert('Atenção', 'Dados cadastrados com sucesso. Faça Login..');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/email-already-in-use') {
          Alert.alert('Atenção', 'Este e-mail já tem cadastro.');
        } else if (errorCode == 'auth/weak-password') {
          Alert.alert('Senha', 'Deve ter no mínimo 6 caracteres.');
        } else if (errorCode == 'auth/invalid-email') {
          Alert.alert('E-mail', 'Este Email é invalido.');
        }
        Alert.alert(errorCode);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Cadastre seus Dados</Text>
      <Image style={styles.foto} source={require('../assets/flor.png')} />

      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        placeholder="Digite o E-mail"
        value={email}
        required
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
        secureTextEntry={true}
        required
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          cadastrar()
        }}>
        <Text style={styles.botaoTxt}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Acesso')}>
        <Text style={styles.botaoTxt}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  titulo: {
    margin: 10,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  foto: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderRadius: 190,
    margin: 10,
  },
  input: {
    textAlign: 'center',
    borderStyle: 'dotted',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    marginHorizontal: 30,
  },
  botao: {
    backgroundColor: 'red',
    width: 150,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    margin: 10,
    padding: 5,
    textAlign: 'center',
  },
  botaoTxt: {
    fontSize: 18,
    color: 'white',
  },
});
