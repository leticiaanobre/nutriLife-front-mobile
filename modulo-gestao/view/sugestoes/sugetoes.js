import React from 'react';
import { View, Text, VirtualizedList, StatusBar, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Data = [
  {
    titulo: "Antes do almoço",
    description: "",
    image: require('../../../modulo-gestao/img/before_lunch.jpg'),
    navigateTo: 'Manha'
  },
  {
    titulo: "Pós almoço",
    description: "",
    image: require('../../../modulo-gestao/img/after_lunch.jpg'),
    navigateTo: 'Tarde'
  },
];

const getItems = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: data[index].titulo,
  description: data[index].description,
  image: data[index].image,
  navigateTo: data[index].navigateTo
});

const getItemsCount = (data) => data.length;

const Item = ({ title, description, image, onPress }) => (
  <TouchableOpacity style={estilos.item} onPress={onPress}>
    <Image source={image} style={estilos.image} />
    <View style={estilos.textContainer}>
      <Text style={estilos.title}>{title}</Text>
    </View>
    <Icon name="chevron-right" size={24} color="#000" />
  </TouchableOpacity>
);

export default function Sugestoes({ navigation }) {
  const navigateToOtherPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.headerTop}>
        <Image source={require('../../../assets/logohealthapp.png')} style={estilos.logo} />
      </View>
      <ScrollView>
      <View style={estilos.header}>
        <Text style={estilos.headerTitle}>Não sabe por onde começar?</Text>
        <View style={estilos.headerImage}>
        <Image source={require('../../img/suggestionInfo2.jpg')} style={estilos.firstimage}/>
        </View>
        <Text style={estilos.headerDescription}>Começar a mudar os hábitos alimentares durante o dia pode não ser de conhecimento da maioria das pessoas. Por isso, preparamos para você algumas sugestões para você aplicar no seu dia a dia.</Text>
        <Text style={estilos.headerDescription}>No entanto, vale ressaltar que esses são apenas alguns palpites opicionais, não tendo como objetivo o emagrecimento ou ganho de massa muscular, mas sim a sugestão de comidas nutritivas que agregam na sua saúde diária.Conheça abaixo alguma delas e melhore sua rotina!</Text>
      </View>
      <Text style={estilos.textoGray}>Indicações</Text>
      <VirtualizedList
        data={Data}
        initialNumToRender={4}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => navigateToOtherPage(item.navigateTo)}
          />
        )}
        keyExtractor={(item) => item.id}
        getItemCount={() => getItemsCount(Data)}
        getItem={getItems}
      />
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 108,
    height: 20
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none',
    paddingTop: 45,
    paddingBottom: 12,
    paddingHorizontal: 20
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },
  headerImage: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  headerDescription: {
    fontSize: 16,
    marginVertical:12,
    color: '#666'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 3,
    borderRadius: 8,
    shadowColor: '#7c7c7c',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  firstimage: {
    width: 200,
    height: 200,
    marginRight: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: 'grey',
  },
  textoGray: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    padding:12
  },
});
