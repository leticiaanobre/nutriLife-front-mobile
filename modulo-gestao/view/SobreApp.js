import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SobreApp({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sobre nós</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>É fundamental se informar sobre hábitos saudáveis, pois a nutrição adequada desempenha um papel crucial na promoção da saúde e no bem-estar geral.</Text>
        <Image source={require('../../assets/logoapp.png')} style={styles.image} />
        <Text style={styles.text}>Ao compreender os princípios da alimentação saudável, podemos fazer escolhas conscientes que beneficiam nosso corpo e mente a longo prazo. A educação sobre hábitos alimentares saudáveis nos capacita a evitar doenças crônicas, fortalecer o sistema imunológico, aumentar os níveis de energia e melhorar a qualidade de vida.</Text>
        <Image source={require('../img/about.jpg')} style={styles.image} />
        <Text style={styles.text}>Além disso, ao adotar hábitos saudáveis, não apenas beneficiamos a nós mesmos, mas também influenciamos positivamente nossos amigos, familiares e comunidades, criando um ambiente propício para o bem-estar coletivo. Portanto, buscar conhecimento sobre nutrição e hábitos saudáveis é essencial para viver uma vida plena e equilibrada.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  }
});
