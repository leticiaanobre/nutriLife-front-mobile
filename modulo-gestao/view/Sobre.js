import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SobreApp from './SobreApp';
import SobreDesenvolvedores from './SobreDesenvolvedores';
import Colaboradores from './colaboradores';

export default function Sobre({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
    if (filter === 'All') {
      navigation.navigate('SobreAppp');
    } else if (filter === 'Appointment') {
      navigation.navigate('DoctorDetail', { doctorName: 'Dr. Alexander Mitchell' });
    } else if (filter === 'Medical') {
      navigation.navigate('SobreDesenvolvedoress');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorite</Text>
      </View>
      <View style={styles.filters}>
        <TouchableOpacity 
          style={[styles.filterButton, selectedFilter === 'All' && styles.filterButtonActive]} 
          onPress={() => handleFilterPress('All')}
        >
          <Text style={[styles.filterText, selectedFilter === 'All' && styles.filterTextActive]}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, selectedFilter === 'Appointment' && styles.filterButtonActive]} 
          onPress={() => handleFilterPress('Appointment')}
        >
          <Text style={[styles.filterText, selectedFilter === 'Appointment' && styles.filterTextActive]}>Profissionais</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, selectedFilter === 'Medical' && styles.filterButtonActive]} 
          onPress={() => handleFilterPress('Medical')}
        >
          <Text style={[styles.filterText, selectedFilter === 'Medical' && styles.filterTextActive]}>Desenvolvedores</Text>
        </TouchableOpacity>
      </View>
      {selectedFilter === 'Appointment' && (
        <ScrollView contentContainerStyle={styles.content}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NutriDetail', { doctorName: 'Victor Nobre Vidal' })}>
            <Image source={require('../img/victor.jpeg')} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Victor Nobre Vidal</Text>
              <Text style={styles.cardSubtitle}>5.0 (18 reviews)</Text>
              <Text style={styles.cardDescription}>Profissional da saúde</Text>
              <View style={styles.specialties}>
                <Text style={styles.specialty}>• Nutricionista</Text>
                <Text style={styles.specialty}>• Gastronomia</Text>
                <Text style={styles.specialty}>• Nutrição esportiva</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      )}
      {selectedFilter === 'All' && (
        <ScrollView contentContainerStyle={styles.content}>
          <SobreApp/>
        </ScrollView>
      )}
      {selectedFilter === 'Medical' && (
        <ScrollView contentContainerStyle={styles.content}>
          <Colaboradores/>
        </ScrollView>
      )}
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
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    marginTop: 32,
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  filterButton: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#36622B'
  },
  filterButtonActive: {
    backgroundColor: 'green',
    borderColor: 'green'
  },
  filterText: {
    fontSize: 14,
    color: '#000',
  },
  filterTextActive: {
    color: '#fff',
  },
  content: {
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  cardTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  specialties: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  specialty: {
    fontSize: 14,
    color: '#777',
    marginRight: 10,
  },
});
