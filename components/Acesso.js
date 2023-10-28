import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Acesso() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Aplicativo de Flores</Text>
      <Image style={styles.foto} source={require('../assets/flor.png')} />

      <TextInput style={styles.input} placeholder="Digite o E-mail" />
      <TextInput style={styles.input} placeholder="Digite a senha" />
      
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTxt}>Acessar</Text>
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
    textAlign: 'center'
  },
  botaoTxt:{
    fontSize: 18,
    color: 'white',
  }
});
