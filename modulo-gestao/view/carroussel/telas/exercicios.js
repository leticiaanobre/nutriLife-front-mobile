import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ConsultarProfissional({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Consultar um Profissional</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.articleContainer}>
          <Text style={styles.articleTitle}>
            A Importância de consultar um Nutricionista
          </Text>
        <Image source={require('../../../img/nutricionistaPIC.jpg')} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleMeta}>
            <Icon name="access-time" size={14} color="#828388" /> 10 min. read
            <Text> • 01.06.2024 • Saúde</Text>
          </Text>
          <Text style={styles.articleText}>
            Consultar um profissional de saúde regularmente é fundamental para a manutenção da saúde e adaptação de rotina. Por isso essencial que um nutricionista seja consultado, já que somente ele pode prescrever dietas e outras orientações relacionadas a saúde alimentar.
          </Text>
          <Text style={styles.articleTextTitle}>Por que consultar um profissional de saúde?</Text>
          <Text style={styles.articleText}>
            Consultar um nutricionista oferece diversos benefícios, incluindo:
          </Text>
          <Text style={styles.articleText}>
            • Prevenção de doenças: Consultas regulares ajudam na identificação precoce de potenciais problemas de saúde, permitindo uma intervenção rápida e eficaz.
          </Text>
          <Text style={styles.articleText}>
            • Orientação personalizada: Os profissionais de saúde fornecem orientações personalizadas baseadas nas suas necessidades individuais, ajudando a manter e melhorar sua saúde.
          </Text>
          <Text style={styles.articleText}>
            • Acompanhamento contínuo: Consultas regulares permitem o acompanhamento contínuo da rotina alimentar, garantindo que elas estejam bem controladas.
          </Text>
          <Text style={styles.articleTextTitle}>O que esperar durante uma consulta?</Text>
          <Text style={styles.articleText}>
            Durante uma consulta com um profissional de saúde, você pode esperar:
          </Text>
          <Text style={styles.articleText}>
            • Anamnese: O profissional de saúde fará perguntas sobre seu histórico médico, estilo de vida e sintomas atuais.
          </Text>
          <Text style={styles.articleText}>
            • Antropometria: O nutricionista tirará suas medidas para melhor planejar sua dieta.
          </Text>
          <Text style={styles.articleText}>
            • Avaliação bioquímica: Se necessário, podem ser solicitados exames laboratoriais entender como está o seu metabolismo, no caso de emagrecimento podemos avaliar se vc precisa e o quanto precisa, reduzir o consumo de proteínas ou carboidratos.
          </Text>
          <Text style={styles.articleText}>
            • Plano de tratamento: Com base na avaliação, o profissional de saúde desenvolverá uma dieta, baseado nas avaliações anteriores, condizente e compatível com os costumes e a rotina do paciente para mudanças no estilo de vida.
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
    marginBottom: 5,
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
