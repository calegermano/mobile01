import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';


export default function Batman() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>DC</Text>
      <Image source={require('../assets/batman-logo.png')} style={styles.imagem}/>
      <Text style={styles.nome}>Batman</Text>
      <Text style={styles.texto}>O Cavaleiro das trevas</Text>
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 50,
    color:'white',
    fontWeight:'bold',
  },
  nome: {
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