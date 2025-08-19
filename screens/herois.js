import { StyleSheet, Text, View, Image, FlatList} from 'react-native';

export default function herois() {
    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>DC</Text>
                <Text style={styles.titulo}>Outros Heróis</Text>
    <FlatList
            data={heroisDC}
            renderItem={({item})=>
                <View>
                <Image style={styles.imagem} source={item.img}/>
                <Text style={styles.heroi}> {item.nome}</Text>
                <Text style={styles.texto}> {item.titulo}</Text>
                </View>
            }
            />

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
    heroi: {
    fontSize: 45,
    color:'white',
    fontWeight:'bold',
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
  texto: {
    fontSize: 35,
    color:'white',
    paddingBottom:10,
  },
})

const heroisDC = [
    {
        uid: 1,
        nome: 'Mulher Maravilha',
        titulo: 'Princesa Diana de Themyscira',
        img:require('../assets/mulher-maravilha-logo.png')
    },
    {
        uid: 2,
        nome: 'Capitão Marvel',
        titulo: 'Shazam',
        img:require('../assets/shazam-logo.png')
    },
    {
        uid: 3,
        nome: 'Lanterna Verde',
        titulo: 'O maior Lanterna Verde',
        img:require('../assets/lanterna-verde-logo.png')
    },
    {
        uid: 4,
        nome: 'Flash',
        titulo: 'O Homem Mais Rápido do Mundo',
        img:require('../assets/flash-logo.png')
    },
    {
        uid: 5,
        nome: 'Aquaman',
        titulo: 'Rei de Atlântida',
        img:require('../assets/aquaman-logo.png')
    }
]



