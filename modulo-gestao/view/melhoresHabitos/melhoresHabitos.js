import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MelhoresHabitos({ navigation }) {
  return (
    <ScrollView style={estilos.container}>
      <View style={estilos.headerTop}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={estilos.header}>
        <Image source={require('../../img/rotulos.jpg')} style={estilos.articleImage} />
        <Text style={estilos.headerTitle}>Guia para Iniciantes: Como Ler Rótulos Nutricionais</Text>
        <Text style={estilos.headerDescription}>Entender como ler rótulos nutricionais é essencial para fazer escolhas alimentares saudáveis e informadas. Aqui está um guia passo a passo para te ajudar a interpretar as informações nos rótulos dos alimentos:</Text>
      </View>
        <Image source={require('../../img/lerrotulos.png')} style={estilos.articleImage2} />
      <View style={estilos.headerSection}>
        <Text style={estilos.headerSubtitle}>LEIA A LISTA DE INGREDIENTES</Text>
        <Text style={estilos.headerDescription}>Você sabia que o primeiro ingrediente da lista é o que contém maior quantidade? Sim, os componentes apresentam-se no rótulo nutricional na ordem decrescente, ou seja, caso o primeiro ingrediente seja a farinha de trigo, esta conterá maior abundância, se na sequência vier óleo soja, será o segundo que contém maior quantidade, e assim por diante.</Text>
        <Text style={estilos.headerDescription}>Com esta informação você já poderá detectar o que o alimento propõe, se está composto por ingredientes benéficos ou maléficos, em maior ou menor concentração.</Text>
      </View>
      <View style={estilos.headerSection}>
        <Text style={estilos.headerSubtitle}>EVITE!</Text>
        <Text style={estilos.headerDescription}>Ademais, há aqueles ingredientes que precisam ser evitados, pois não fazem bem à saúde: xarope de milho, de arroz, de glicose, de frutose, glicose, glucose , derivados de milho ou soja transgênicos (cuidado), corante artificial, aspartame, acessulfame de potássio, sacarina sódica, ciclamato, açúcar invertido, açúcar líquido, nitrito e nitrato de sódio, sucralose, glutamato monossódico, gordura vegetal hidrogenada e SIGLAS que você não sabe o que significam.
A gordura trans também deve ser evitada, por ser maléfica à saúde.</Text>
      </View>
      <View style={estilos.headerSection}>
        <Text style={estilos.headerSubtitle}>CUIDADO COM OS AÇÚCARES OCULTOS</Text>
        <Text style={estilos.headerDescription}>E, ainda, há os temidos açúcares que ficam escondidos na composição.</Text>
        <Text style={estilos.headerDescription}>
Por estarem juntos aos carboidratos na tabela nutricional, não há uma regulamentação para medi-los ainda. Logo, é recomendado ler a lista de ingredientes para identificar o açúcar. Ele também pode estar disfarçado com os seguintes nomes: Glicose, Frutose, Sacarose, Açúcar mascavo, Açúcar do coco, Açúcar cristal, Glicose de milho, Açúcar invertido, Açúcar de confeiteiro, Néctar, Xarope de malte, Extrato de malte, Xarope de milho, Dextrose, Maltose, Açúcar orgânico, Xarope de Agáve, Xarope de açúcar ou Calda de açúcar.</Text>
      </View>
      <View style={estilos.headerSection}>
        <Text style={estilos.headerSubtitle}>CALCULE A PORÇÃO, CALORIAS E NUTRIENTES PROPORCIONAIS</Text>
        <Text style={estilos.headerDescription}>A porção (medida em g ou ml) é a quantidade média de alimento que vai ser consumida, baseada em uma alimentação saudável. Importante: a indicação dos nutrientes se refere a essa porção indicada no rótulo, portanto, deve-se atentar à porção do alimento inteiro e fazer o cálculo da proporção.</Text>
        <Text style={estilos.headerDescription}>Os nutrientes indicados na tabela devem ser lidos a fim de identificar sua quantidade e fazer o cálculo proporcional ao que vai ser consumido, além disso, as quantidades recomendadas pelo médico endocrinologista devem ser observadas, mensurando-se as porções e os valores energéticos contidos.</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 32,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },
  articleImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  articleImage2: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 10,
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
    marginVertical: 15,
    color: '#666',
  },
  headerSection: {
    padding: 15,
  },
});
