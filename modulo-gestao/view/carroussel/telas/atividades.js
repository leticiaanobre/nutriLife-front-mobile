import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Atividades({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Atividades</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.articleContainer}>
        <Text style={styles.articleTitle}>Atividades Físicas e Seus Exemplos</Text>
        <Image source={require('../../../img/atividades.jpg')} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleMeta}>
            <Icon name="access-time" size={14} color="#828388" /> 18 min. read
            <Text> • 21.11.2023 • Saúde</Text>
          </Text>
          <Text style={styles.articleText}>
            A prática de atividades físicas é essencial para manter a saúde e o bem-estar. Neste artigo, discutiremos a importância das atividades físicas e forneceremos exemplos de como você pode incorporá-las em sua rotina diária.
          </Text>
          <Text style={styles.articleTextTitle}>O que são atividades físicas?</Text>
          <Text style={styles.articleText}>
            Atividades físicas são todos os movimentos corporais que resultam em gasto energético. Elas podem variar de exercícios estruturados a movimentos cotidianos. Aqui estão alguns exemplos:
          </Text>
          <Text style={styles.articleText}>→ Caminhada</Text>
          <Text style={styles.articleText}>
            A caminhada é uma atividade de baixo impacto que pode ser facilmente incorporada no dia a dia. É ótima para melhorar a saúde cardiovascular e fortalecer os músculos das pernas.
          </Text>
          <Text style={styles.articleText}>→ Natação</Text>
          <Text style={styles.articleText}>
            A natação é um exercício completo que trabalha todo o corpo. É especialmente benéfica para pessoas com problemas nas articulações, pois a água reduz o impacto.
          </Text>
          <Text style={styles.articleText}>→ Corrida</Text>
          <Text style={styles.articleText}>
            A corrida é uma excelente forma de melhorar a resistência cardiovascular. Também ajuda a queimar calorias e a fortalecer os músculos das pernas.
          </Text>
          <Text style={styles.articleText}>→ Bicicleta</Text>
          <Text style={styles.articleText}>
            Andar de bicicleta é um exercício divertido que pode ser feito ao ar livre ou em uma bicicleta ergométrica. É ótimo para o sistema cardiovascular e para tonificar as pernas.
          </Text>
          <Text style={styles.articleText}>→ Musculação</Text>
          <Text style={styles.articleText}>
            A musculação é importante para construir e manter a massa muscular. Ajuda a fortalecer os ossos, aumentar a força e melhorar a postura.
          </Text>
          <Text style={styles.articleText}>→ Yoga</Text>
          <Text style={styles.articleText}>
            O yoga combina exercícios de flexibilidade e força com técnicas de respiração e meditação. É ótimo para melhorar a flexibilidade, reduzir o estresse e aumentar a força muscular.
          </Text>
          <Text style={styles.articleTextTitle}>Benefícios das Atividades Físicas</Text>
          <Text style={styles.articleText}>
            A prática regular de atividades físicas traz inúmeros benefícios para a saúde física e mental. Aqui estão alguns deles:
          </Text>
          <Text style={styles.articleText}>
            • Melhora a saúde cardiovascular: Atividades como caminhada, corrida e natação ajudam a fortalecer o coração e melhorar a circulação sanguínea.
          </Text>
          <Text style={styles.articleText}>
            • Fortalece os músculos e ossos: Exercícios como musculação e yoga ajudam a aumentar a massa muscular e a densidade óssea.
          </Text>
          <Text style={styles.articleText}>
            • Reduz o estresse: A prática de atividades físicas libera endorfinas, que ajudam a reduzir o estresse e melhorar o humor.
          </Text>
          <Text style={styles.articleText}>
            • Melhora a flexibilidade e a postura: Exercícios como yoga e alongamento ajudam a aumentar a flexibilidade e melhorar a postura.
          </Text>
          <Text style={styles.articleText}>
            • Auxilia na perda de peso: A prática regular de atividades físicas ajuda a queimar calorias e a manter um peso saudável.
          </Text>
          <Text style={styles.articleText}>
            • Aumenta a energia: Atividades físicas regulares ajudam a aumentar os níveis de energia e reduzir a fadiga.
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
    color: '#828388',
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
