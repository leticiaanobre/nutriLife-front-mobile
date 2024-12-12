import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VitaminaD = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ width: 24 }} />
      </View>
      <Image 
        source={require('../../../img/photoD.jpg')} 
        style={styles.image} 
      />
      <View style={styles.header}>
        <Text style={styles.title}>Vitamina D</Text>
        <Text style={styles.subtitle}>Colecalciferol</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionContent}>A vitamina D, ou colecalciferol, é uma vitamina lipossolúvel essencial para a saúde óssea e a função imunológica.</Text>
        <Text style={styles.sectionTitle}>O que é</Text>
        <Text style={styles.sectionContent}>
          A vitamina D pode ser obtida através da exposição ao sol e de certos alimentos. Existem duas formas principais:
        </Text>
        <Text style={styles.sectionContent}>
          • D2 (Ergocalciferol): Obtida de fontes vegetais e alimentos fortificados.
        </Text>
        <Text style={styles.sectionContent}>
          • D3 (Colecalciferol): Obtida de fontes animais e pela exposição da pele à luz solar.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Importância</Text>
        <Text style={styles.sectionContent}>
          1. Saúde Óssea: A vitamina D é crucial para a absorção de cálcio e fósforo, minerais essenciais para a formação e manutenção de ossos e dentes fortes.
        </Text>
        <Text style={styles.sectionContent}>
          2. Função Imunológica: Ajuda a fortalecer o sistema imunológico, protegendo contra infecções e doenças autoimunes.
        </Text>
        <Text style={styles.sectionContent}>
          3. Saúde Muscular: Contribui para a função muscular adequada e a prevenção de quedas em idosos.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Onde encontrar</Text>
        <Text style={styles.sectionContent}>
          A vitamina D pode ser encontrada em peixes gordurosos, óleo de fígado de bacalhau, gemas de ovo e alimentos fortificados como leite e cereais.
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

export default VitaminaD;
