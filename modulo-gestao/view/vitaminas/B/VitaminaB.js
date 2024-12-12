import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VitaminaB = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ width: 24 }} />
      </View>
      <Image 
        source={require('../../../img/photoB.jpg')} 
        style={styles.image} 
      />
      <View style={styles.header}>
        <Text style={styles.title}>Vitamina B</Text>
        <Text style={styles.subtitle}>Complexo B</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionContent}>A vitamina B é um grupo de vitaminas essenciais que desempenham papéis cruciais no metabolismo celular, na produção de energia e na manutenção da saúde do sistema nervoso.</Text>
        <Text style={styles.sectionTitle}>O que é</Text>
        <Text style={styles.sectionContent}>
          O complexo de vitamina B inclui várias vitaminas, cada uma com funções específicas:
        </Text>
        <Text style={styles.sectionContent}>
          • B1 (Tiamina): Importante para o metabolismo da glicose e a função nervosa.
        </Text>
        <Text style={styles.sectionContent}>
          • B2 (Riboflavina): Necessária para a produção de energia e o metabolismo das gorduras.
        </Text>
        <Text style={styles.sectionContent}>
          • B3 (Niacina): Auxilia na saúde da pele, sistema nervoso e digestão.
        </Text>
        <Text style={styles.sectionContent}>
          • B5 (Ácido Pantotênico): Essencial para a síntese de coenzima A, importante no metabolismo celular.
        </Text>
        <Text style={styles.sectionContent}>
          • B6 (Piridoxina): Importante para o metabolismo de proteínas e a produção de neurotransmissores.
        </Text>
        <Text style={styles.sectionContent}>
          • B7 (Biotina): Auxilia no metabolismo de carboidratos, gorduras e proteínas.
        </Text>
        <Text style={styles.sectionContent}>
          • B9 (Ácido Fólico): Essencial para a síntese de DNA e a saúde celular.
        </Text>
        <Text style={styles.sectionContent}>
          • B12 (Cobalamina): Importante para a formação de glóbulos vermelhos e a saúde do sistema nervoso.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Importância</Text>
        <Text style={styles.sectionContent}>
          1. Produção de Energia: As vitaminas do complexo B são essenciais para a conversão de alimentos em energia, facilitando o metabolismo dos carboidratos, gorduras e proteínas.
        </Text>
        <Text style={styles.sectionContent}>
          2. Função Nervosa: As vitaminas B, especialmente B6, B9 e B12, desempenham papéis críticos na manutenção da saúde do sistema nervoso.
        </Text>
        <Text style={styles.sectionContent}>
          3. Saúde da Pele: A niacina (B3) e a biotina (B7) são importantes para a manutenção de uma pele saudável.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Onde encontrar</Text>
        <Text style={styles.sectionContent}>
          As vitaminas do complexo B podem ser encontradas em uma variedade de alimentos, incluindo carne, ovos, nozes, sementes, vegetais verdes folhosos e grãos integrais.
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

export default VitaminaB;
