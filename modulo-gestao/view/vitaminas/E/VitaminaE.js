import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VitaminaE = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ width: 24 }} />
      </View>
      <Image 
        source={require('../../../img/photoE.jpg')} 
        style={styles.image} 
      />
      <View style={styles.header}>
        <Text style={styles.title}>Vitamina E</Text>
        <Text style={styles.subtitle}>Tocoferol</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionContent}>A vitamina E, ou tocoferol, é uma vitamina lipossolúvel conhecida por suas propriedades antioxidantes, que protegem as células contra danos.</Text>
        <Text style={styles.sectionTitle}>O que é</Text>
        <Text style={styles.sectionContent}>
          A vitamina E é composta por oito compostos, incluindo tocoferóis e tocotrienóis, com o alfa-tocoferol sendo a forma mais ativa no corpo humano.
        </Text>
        <Text style={styles.sectionContent}>
          • Antioxidante: Protege as células dos danos oxidativos.
        </Text>
        <Text style={styles.sectionContent}>
          • Anti-inflamatório: Ajuda a reduzir a inflamação no corpo.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Importância</Text>
        <Text style={styles.sectionContent}>
          1. Saúde da Pele: A vitamina E é frequentemente usada em produtos para a pele devido às suas propriedades hidratantes e antioxidantes.
        </Text>
        <Text style={styles.sectionContent}>
          2. Função Imunológica: Fortalece o sistema imunológico, ajudando a combater infecções.
        </Text>
        <Text style={styles.sectionContent}>
          3. Prevenção de Doenças Crônicas: Os antioxidantes ajudam a proteger contra doenças cardíacas e câncer.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Onde encontrar</Text>
        <Text style={styles.sectionContent}>
          A vitamina E pode ser encontrada em óleos vegetais, nozes, sementes, espinafre e brócolis.
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

export default VitaminaE;
