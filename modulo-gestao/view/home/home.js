import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, ScrollView, Image } from 'react-native';
import Section from '../carroussel/section';
import CustomComponent from '../../../components/customComponent';
import ItemInfo from '../../../components/itemInfo';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <View style={estilos.header}>
        <Image source={require('../../../assets/logohealthapp.png')} style={estilos.logo} />
      </View>
      <View style={estilos.contentContainer}>
        <CustomComponent
          title="Lendo rótulos"
          text="Saiba como entender melhor rótulos nutricionais."
          buttonText="Clique Aqui!"
          imageSource={require('../../img/foodComponent.png')}
          onPress={() => navigation.navigate('MelhoresHabitos')}
        />
      </View>
      <ItemInfo navigation={navigation} />
      <Section navigation={navigation} />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
    header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none',
    paddingTop: 45,
    paddingBottom: 12,
    paddingHorizontal: 20
  },
    logo: {
    width: 108,
    height: 20
  },
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
});
