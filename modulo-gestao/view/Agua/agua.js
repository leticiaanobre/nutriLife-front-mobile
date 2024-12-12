import React from 'react';
import { View, Text, VirtualizedList, StatusBar, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Agua({ navigation }) {


  return (
    <View style={estilos.container}>
      <View style={estilos.headerTop}>
        <Image source={require('../../../assets/logohealthapp.png')} style={estilos.logo} />
      </View>
      <ScrollView>
      <View style={estilos.header}>
        <Text style={estilos.headerTitle}>A água é essencial!</Text>
        <Text style={estilos.headerDescription}>Beber água é essencial para a manutenção da saúde e bem-estar do corpo humano. Por isso, aqui estão alguns dos principais motivos pelos quais você não pode deixar de consumir muita água durante o dia:</Text>
        <View style={estilos.headerAlign}>
        <Image source={require('../../img/drinking_water.jpg')} style={estilos.firstimage}/>
        </View>
      </View>
      <View style={estilos.headerSection}>
        <Text style={estilos.headerSubtitle}>Hidratação</Text>
        <Text style={estilos.headerDescription}>A água é fundamental para manter o equilíbrio de fluidos no corpo. Cerca de 60% do nosso corpo é composto por água, que é necessária para manter as células hidratadas e funcionando corretamente.</Text>
      </View>
      <View style={estilos.headerSection}>
        <Text style={estilos.headerSubtitle}>Função dos órgãos</Text>
        <Text style={estilos.headerDescription}>Cada órgão do corpo humano precisa de água para funcionar de maneira eficiente. O cérebro, por exemplo, é composto por cerca de 73% de água. A hidratação adequada é crucial para o desempenho cognitivo e a concentração.</Text>
      </View>
      <View style={estilos.headerSection}>
        <Text style={estilos.headerSubtitle}>Digestão e metabolismo</Text>
        <Text style={estilos.headerDescription}>A água é essencial para o processo de digestão, ajudando na dissolução dos nutrientes e facilitando a sua absorção. Além disso, a água ajuda no metabolismo, promovendo a quebra dos alimentos e a liberação de energia.</Text>
      </View>
      <View style={estilos.recommendationContainer}>
        <Text style={estilos.headerTitle}>Recomendações</Text>
        <View style={estilos.recommendation}>
        <View style={estilos.recommendationItens}>
          <Icon name="female" size={35} color="#000" />
          <View style={estilos.recommendationDescription}>
          <Text style={estilos.recommendationTitle}>Mulheres</Text>
          <Text style={estilos.recommendationText}>2,7L por dia</Text>
          </View>
        </View>
        <View style={estilos.recommendationItens}>
          <Icon name="male" size={35} color="#000" />
          <View style={estilos.recommendationDescription}>
          <Text style={estilos.recommendationTitle}>Homens</Text>
          <Text style={estilos.recommendationText}>3,7L por dia</Text>
          </View>
        </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 108,
    height: 20
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none',
    paddingTop: 45,
    paddingBottom: 12,
    paddingHorizontal: 20
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },
  headerAlign: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerDescription: {
    fontSize: 16,
    marginVertical:25,
    color: '#666'
  },
  headerSection: {
    padding: 15
  },
  firstimage: {
    width: 200,
    height: 200,
    marginRight: 15,
  },
  recommendationContainer: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 15
  },
  recommendation: {
    display: 'flex',
    flexDirection: 'row',
    gap: 35
  },
  recommendationItens: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  recommendationDescription: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  recommendationTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000'
  },
  recommendationText: {
    color: '#666'
  },
});
