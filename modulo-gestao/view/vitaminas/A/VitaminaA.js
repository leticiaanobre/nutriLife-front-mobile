import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VitaminaA = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ width: 24 }} />
      </View>
      <Image 
        source={require('../../../img/photoA.jpg')} 
        style={styles.image} 
      />
      <View style={styles.header}>
        <Text style={styles.title}>Vitamina A</Text>
        <Text style={styles.subtitle}>Retinol</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionContent}>A vitamina A é um nutriente essencial que desempenha diversas funções vitais no organismo humano. Também conhecida como retinol, essa vitamina é crucial para a manutenção da saúde dos olhos, da pele, do sistema imunológico e do crescimento e desenvolvimento celular.</Text>
        <Text style={styles.sectionTitle}>O que é</Text>
        <Text style={styles.sectionContent}>
          A vitamina A é um composto lipossolúvel, o que significa que é solúvel em gordura e pode ser armazenada no fígado para uso futuro. Ela existe em duas formas principais:
        </Text>
        <Text style={styles.sectionContent}>
          • Retinol: A forma ativa da vitamina A, encontrada em alimentos de origem animal.
        </Text>
        <Text style={styles.sectionContent}>
          • Carotenoides pró-vitamina A: Compostos encontrados em alimentos de origem vegetal que o corpo pode converter em retinol. O mais conhecido desses carotenoides é o beta-caroteno.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Importância</Text>
        <Text style={styles.sectionContent}>
          1. Saúde dos Olhos: A vitamina A é essencial para a visão, especialmente para a visão noturna. Ela é um componente vital da rodopsina, uma proteína dos olhos que permite a visão em condições de baixa luminosidade. A deficiência de vitamina A pode levar à cegueira noturna e, em casos graves, à xeroftalmia, uma condição que pode resultar em danos irreversíveis à córnea e cegueira.
        </Text>
        <Text style={styles.sectionContent}>
          2. Função Imunológica: A vitamina A fortalece o sistema imunológico ao manter a integridade e função das células da pele e das mucosas, que agem como barreiras contra infecções. Além disso, ela ajuda na produção e função de glóbulos brancos, que combatem patógenos.
        </Text>
        <Text style={styles.sectionContent}>
          3. Saúde da Pele: A vitamina A é importante para a manutenção e reparação da pele. Ela ajuda na produção de células saudáveis e na prevenção de danos causados por radicais livres, contribuindo para uma pele mais saudável e radiante.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Onde encontrar</Text>
        <Text style={styles.sectionContent}>
          • Alimentos de origem animal: fígado, óleo de fígado de peixe, leite e produtos lácteos, ovos.
        </Text>
        <Text style={styles.sectionContent}>
          • Alimentos de origem vegetal: cenouras, batata-doce, abóbora, espinafre e outras folhas verde-escuras, pimentão vermelho, manga, melão cantaloupe.
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
  icon: {
    padding: 15,
    marginVertical: 10,
    backgroundColor:'transparent',
    position:'fixed'
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
  nutritionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#F4F4F4',
    padding: 10
  },
  nutrient: {
    fontSize: 14,
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

export default VitaminaA;
