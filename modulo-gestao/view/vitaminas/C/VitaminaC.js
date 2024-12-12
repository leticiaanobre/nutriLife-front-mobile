import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VitaminaC = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ width: 24 }} />
      </View>
      <Image 
        source={require('../../../img/photoC.jpg')} 
        style={styles.image} 
      />
      <View style={styles.header}>
        <Text style={styles.title}>Vitamina C</Text>
        <Text style={styles.subtitle}>Ácido Ascórbico</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionContent}>A vitamina C, ou ácido ascórbico, é uma vitamina essencial solúvel em água conhecida por suas propriedades antioxidantes e seu papel na síntese de colágeno.</Text>
        <Text style={styles.sectionTitle}>O que é</Text>
        <Text style={styles.sectionContent}>
          A vitamina C é uma vitamina solúvel em água que não pode ser armazenada pelo corpo, necessitando de ingestão diária através da dieta.
        </Text>
        <Text style={styles.sectionContent}>
          • Antioxidante: Protege as células contra os danos causados pelos radicais livres.
        </Text>
        <Text style={styles.sectionContent}>
          • Síntese de Colágeno: Fundamental para a produção de colágeno, uma proteína importante para a pele, cartilagens e ossos.
        </Text>
        <Text style={styles.sectionContent}>
          • Absorção de Ferro: Aumenta a absorção de ferro não-heme encontrado em alimentos de origem vegetal.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Importância</Text>
        <Text style={styles.sectionContent}>
          1. Sistema Imunológico: A vitamina C é conhecida por fortalecer o sistema imunológico, ajudando na prevenção e tratamento de infecções.
        </Text>
        <Text style={styles.sectionContent}>
          2. Reparação dos Tecidos: Promove a cicatrização de feridas e a manutenção de tecidos conectivos saudáveis.
        </Text>
        <Text style={styles.sectionContent}>
          3. Prevenção de Doenças Crônicas: Seus efeitos antioxidantes ajudam na prevenção de doenças crônicas como doenças cardíacas e câncer.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Onde encontrar</Text>
        <Text style={styles.sectionContent}>
          A vitamina C pode ser encontrada em frutas cítricas, morangos, kiwis, pimentões, brócolis e espinafre.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FAFAFA',
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
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 5,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  section: {
    marginBottom: 10,
    padding: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 10
  },
});

export default VitaminaC;
