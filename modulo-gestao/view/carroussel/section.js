import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native';

const Data = [
  {
    titulo: "Alimentos",
    description: "Aprenda mais sobre os alimentos e seus benefícios.",
    image: require('../../img/alimentos.jpg'),
    navigateTo: 'Alimentos'
  },
  {
    titulo: "Atividades",
    description: "Descubra os tipos de atividades físicas e suas vantagens.",
    image: require('../../img/atividades.jpg'),
    navigateTo: 'Atividades'
  },
  {
    titulo: "Profissional",
    description: "Consulte-se com um profissional da saúde.",
    image: require('../../img/nutricionistaPIC.jpg'),
    navigateTo: 'Exercicios'
  },
  {
    titulo: "Rotina",
    description: "Entenda como começar uma rotina mais saudável.",
    image: require('../../img/rotina.jpg'),
    navigateTo: 'Rotina'
  },
];

const renderItem = ({ item, navigation }) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.titulo}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(item.navigateTo)}>
      <Text style={styles.buttonText}>Saiba mais</Text>
    </TouchableOpacity>
  </View>
);

export default function Section({ navigation }) {
  const renderItemWithNavigation = ({ item }) => renderItem({ item, navigation });

  return (
    <View style={styles.container}>
      <Text style={styles.textoGray}>Tópicos</Text>
      <FlatList
        data={Data}
        renderItem={renderItemWithNavigation}
        keyExtractor={(item) => item.titulo}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5
  },
  textoGray: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#F2F4F7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%', // Ajuste para ter dois itens por linha
    padding: 10,
    gap: 5
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    marginBottom: 8,
    color: '#7c7c7c'
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
