import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Rotina({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rotina</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.articleContainer}>
        <Text style={styles.articleTitle}>
          Como começar e implementar uma rotina na sua vida
        </Text>
        <Image source={require('../../../img/rotina.jpg')} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleMeta}>
            <Icon name="access-time" size={14} color="#828388" /> 10 min. read
            <Text> • 01.06.2024 • Lifestyle</Text>
          </Text>
          <Text style={styles.articleText}>
            Estabelecer uma rotina pode trazer inúmeros benefícios para a sua vida, incluindo maior produtividade, melhor saúde mental e física, e um senso de controle e organização. Aqui estão algumas dicas de como começar e implementar uma rotina eficaz.
          </Text>
          <Text style={styles.articleTextTitle}>
            1. Defina seus objetivos
          </Text>
          <Text style={styles.articleText}>
            Antes de começar, é importante entender o que você quer alcançar com a sua rotina. Seus objetivos podem incluir melhorar a saúde, aumentar a produtividade ou simplesmente organizar melhor o seu tempo.
          </Text>
          <Text style={styles.articleTextTitle}>
            2. Comece com pequenas mudanças
          </Text>
          <Text style={styles.articleText}>
            Tente incorporar mudanças pequenas e incrementais na sua rotina diária. Mudanças drásticas podem ser difíceis de manter, então comece devagar e vá ajustando conforme necessário.
          </Text>
          <Text style={styles.articleTextTitle}>
            3. Crie um cronograma
          </Text>
          <Text style={styles.articleText}>
            Um cronograma detalhado pode ajudar a manter sua rotina no caminho certo. Use um planejador ou aplicativos de produtividade para manter o controle das suas atividades diárias.
          </Text>
          <Text style={styles.articleTextTitle}>
            4. Priorize o sono
          </Text>
          <Text style={styles.articleText}>
            Dormir bem é fundamental para manter uma rotina saudável. Certifique-se de ter horários consistentes para dormir e acordar, e tente dormir pelo menos 7-8 horas por noite.
          </Text>
          <Text style={styles.articleTextTitle}>
            5. Inclua atividades físicas
          </Text>
          <Text style={styles.articleText}>
            Exercícios físicos regulares são essenciais para a saúde física e mental. Tente incluir pelo menos 30 minutos de atividade física na sua rotina diária.
          </Text>
          <Text style={styles.articleTextTitle}>
            6. Reserve tempo para relaxar
          </Text>
          <Text style={styles.articleText}>
            Não se esqueça de incluir momentos de lazer e relaxamento na sua rotina. Isso pode ajudar a reduzir o estresse e melhorar a sua qualidade de vida.
          </Text>
          <Text style={styles.articleTextTitle}>
            7. Seja flexível
          </Text>
          <Text style={styles.articleText}>
            Nem sempre será possível seguir sua rotina à risca todos os dias, e tudo bem. Seja flexível e esteja disposto a ajustar seu cronograma conforme necessário.
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
