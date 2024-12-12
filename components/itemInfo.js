import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const Data = [
  {
    titulo: "Vitamina A",
    description: "230 Kcal",
    image: require('../modulo-gestao/img/vitaminA.png'),
    navigateTo: 'VitaminaA'
  },
  {
    titulo: "Vitamina B",
    description: "230 Kcal",
    image: require('../modulo-gestao/img/vitaminB.png'),
    navigateTo: 'VitaminaB'
  },
  {
    titulo: "Vitamina C",
    description: "230 Kcal",
    image: require('../modulo-gestao/img/vitaminC.png'),
    navigateTo: 'VitaminaC'
  },
  {
    titulo: "Vitamina D",
    description: "230 Kcal",
    image: require('../modulo-gestao/img/vitaminD.png'),
    navigateTo: 'VitaminaD'
  },
  {
    titulo: "Vitamina E",
    description: "230 Kcal",
    image: require('../modulo-gestao/img/vitaminE.png'),
    navigateTo: 'VitaminaE'
  },
  {
    titulo: "Vitamina K",
    description: "230 Kcal",
    image: require('../modulo-gestao/img/vitaminK.png'),
    navigateTo: 'VitaminaK'
  },
];

const renderItem = ({ item, navigation }) => (
  <TouchableOpacity style={styles.carouselItem} onPress={() => navigation.navigate(item.navigateTo)}>
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
    <Text style={styles.title}>{item.titulo}</Text>
  </TouchableOpacity>
);

export default function ItemInfo({ navigation }) {
  const renderItemWithNavigation = ({ item }) => renderItem({ item, navigation });

  return (
    <View style={styles.container}>
      <Text style={styles.textoGray}>Conheça as vitaminas</Text>
      <Carousel
        data={Data}
        renderItem={renderItemWithNavigation}
        sliderWidth={screenWidth}
        itemWidth={100}
        layout={'default'}
        inactiveSlideScale={1} // Mantém o mesmo tamanho para todos os slides
        inactiveSlideOpacity={1} // Mantém a mesma opacidade para todos os slides
        loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textoGray: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 15,
  },
  carouselItem: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 12
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#000',
  },
});
