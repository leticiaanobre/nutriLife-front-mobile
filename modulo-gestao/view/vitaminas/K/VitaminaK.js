import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VitaminaK = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ width: 24 }} />
      </View>
      <Image 
        source={require('../../../img/photoK.jpg')} 
        style={styles.image} 
      />
      <View style={styles.header}>
        <Text style={styles.title}>Vitamina K</Text>
        <Text style={styles.subtitle}>Filoquinona</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionContent}>A vitamina K é uma vitamina lipossolúvel essencial para a coagulação sanguínea e a saúde óssea.</Text>
        <Text style={styles.sectionTitle}>O que é</Text>
        <Text style={styles.sectionContent}>
          Existem duas formas principais de vitamina K:
        </Text>
        <Text style={styles.sectionContent}>
          • K1 (Filoquinona): Encontrada em vegetais verdes folhosos.
        </Text>
        <Text style={styles.sectionContent}>
          • K2 (Menaquinona): Produzida por bactérias intestinais e encontrada em alimentos fermentados e produtos de origem animal.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Importância</Text>
        <Text style={styles.sectionContent}>
          1. Coagulação Sanguínea: A vitamina K é essencial para a síntese de proteínas necessárias para a coagulação sanguínea, prevenindo sangramentos excessivos.
        </Text>
        <Text style={styles.sectionContent}>
          2. Saúde Óssea: Auxilia na regulação do metabolismo do cálcio e na saúde óssea.
        </Text>
        <Text style={styles.sectionContent}>
          3. Saúde Cardiovascular: Ajuda a prevenir a calcificação das artérias e outros tecidos moles.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Onde encontrar</Text>
        <Text style={styles.sectionContent}>
          A vitamina K pode ser encontrada em vegetais verdes folhosos, brócolis, couve, espinafre e alimentos fermentados como natto.
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

export default VitaminaK;
