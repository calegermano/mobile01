import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';


export default function Superman() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.nome}>DC</Text>
      <Image source={require('../assets/superman-logo.png')} style={styles.imagem}/>
      <Text style={styles.titulo}>Superman</Text>
      <Text style={styles.texto}>O Homem de aço</Text>
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  nome: {
    fontSize: 50,
    color:'white',
    fontWeight:'bold',
  },
  titulo: {
    fontSize: 45,
    color:'white',
    fontWeight:'bold',
  },
  texto: {
    fontSize: 35,
    color:'white',
    paddingBottom:10,
  },

});