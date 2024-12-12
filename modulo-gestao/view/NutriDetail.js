import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NutriDetail({ route, navigation }) {
  const { doctorName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nutricionista</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        <Image source={require('../img/victor.jpeg')} style={styles.image} />
        <Text style={styles.title}>{doctorName}</Text>
        <Text style={styles.subtitle}>5.0 (18 reviews)</Text>
        <Text style={styles.description}>Profissional da saúde</Text>
        <View style={styles.specialties}>
          <Text style={styles.specialty}>• Nutricionista</Text>
          <Text style={styles.specialty}>• Gastronomia</Text>
          <Text style={styles.specialty}>• Nutrição esportiva</Text>
        </View>
      </View>
    </View>
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
    marginVertical: 32,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  specialties: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  specialty: {
    fontSize: 14,
    color: '#777',
    marginRight: 10,
    marginBottom: 10,
  },
});
