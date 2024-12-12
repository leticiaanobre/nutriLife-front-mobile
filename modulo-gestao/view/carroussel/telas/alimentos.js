import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Alimentos({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alimentos</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.articleContainer}>
        <Text style={styles.articleTitle}>
          Alimentação: como ela influencia em nosso corpo e na nossa vida cotidiana.
        </Text>
        <Image source={require('../../../img/alimentos.jpg')} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleMeta}>
            <Icon name="access-time" size={14} color="#828388" /> 18 min. read
            <Text> • 21.11.2023 • Alimentação</Text>
          </Text>
          <Text style={styles.articleText}>
            A alimentação é um dos pilares fundamentais da saúde e do bem-estar. Os alimentos que consumimos fornecem os nutrientes necessários para o funcionamento adequado do corpo, influenciam a nossa energia diária, o desempenho mental, a resistência a doenças e a qualidade de vida em geral. Vamos explorar como os alimentos afetam nosso corpo e nosso cotidiano.
          </Text>
          <Text style={styles.articleTextTitle}>
            Alimentos construtores
          </Text>
          <Text style={styles.articleText}>
            Fornecem proteína ao corpo, fazendo com que o corpo resista a doenças. Elas estão presentes em carnes,
            ovos, leite e derivados, e nas leguminosas secas (feijão, ervilha, lentilha e soja).
          </Text>
          <Text style={styles.articleTextTitle}>
            Alimentos energéticos
          </Text>
          <Text style={styles.articleText}>
            São responsáveis pelo fornecimento de carboidratos e lipídeos ao organismo.
          </Text>
          <Text style={styles.articleText}>
            - Carboidratos: Fornecem energia e estão presentes nos cereais (arroz, milho, trigo e aveia), pães, tubérculos, raízes e açúcares.
          </Text>
          <Text style={styles.articleText}>
            - Lipídeos: Transportam as vitaminas A, D, E e K, protegendo o corpo da perda excessiva de calor. Estão presentes em óleos e gorduras.
          </Text>
          <Text style={styles.articleTitle}>
            Conheça alguns mitos e verdades da Nutrição
          </Text>
          <Image source={require('../../../img/mito_verdade.jpg')} style={styles.articleImage2}/>
          <Text style={styles.articleText}>
            <Text style={{ fontWeight: 'bold', color: 'red'}}>Mito:</Text> COMER CARBOIDRATOS À NOITE ENGORDA.
          </Text>
          <Text style={styles.articleText}>
            <Text style={{ fontWeight: 'bold', color: 'green' }}>Verdade:</Text> O ganho de peso está relacionado ao consumo total de calorias e não ao horário em que os alimentos são consumidos.
          </Text>
          <Text style={styles.articleText}>
            <Text style={{ fontWeight: 'bold', color: 'red' }}>Mito:</Text> TODOS OS SUPLEMENTOS SÃO SEGUROS E BENÉFICOS.
          </Text>
          <Text style={styles.articleText}>
            <Text style={{ fontWeight: 'bold', color: 'green' }}>Verdade:</Text> Nem todos os suplementos são necessários ou seguros para todas as pessoas. É importante consultar um profissional de saúde antes de iniciar qualquer suplementação.
          </Text>
          <Text style={styles.articleText}>
            <Text style={{ fontWeight: 'bold', color: 'red' }}>Mito:</Text> DIETAS DETOX SÃO EFICAZES PARA LIMPEZA DO CORPO.
          </Text>
          <Text style={styles.articleText}>
            <Text style={{ fontWeight: 'bold', color: 'green' }}>Verdade:</Text> O corpo humano possui sistemas naturais de desintoxicação, como o fígado e os rins, e não há evidências científicas de que dietas detox ofereçam benefícios adicionais.
          </Text>
          <Text style={styles.articleText}>
            <Text style={{ fontWeight: 'bold', color: 'red' }}>Mito:</Text> COMER GORDURA FAZ MAL À SAÚDE.
          </Text>
          <Text style={styles.articleText}>
            <Text style={{ fontWeight: 'bold', color: 'green' }}>Verdade:</Text> Consumir gorduras saudáveis, como as encontradas no abacate, nozes e azeite, é essencial para a saúde do coração e a função cerebral.
          </Text>
        </View>
      </View>
    </ScrollView>
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
    marginTop: 32,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  articleContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
  },
  articleImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  articleImage2: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 10,
  },
  articleContent: {
    paddingLeft: 10,
  },
  articleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    color: '#828388',
    marginBottom: 20,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  articleText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  articleTextTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  readMore: {
    fontSize: 16,
    color: '#36622B',
    fontWeight: 'bold',
  },
});
