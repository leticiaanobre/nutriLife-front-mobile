import {View, Text, Button, VirtualizedList, StatusBar, StyleSheet, Image} from 'react-native'

const Data = [
  {
  titulo: "Leticia Nobre",
  description: "Análise e Desenvolvimento de Sistemas.",
  image: require('../img/photo.jpg')
  },
  {
  titulo: "Geovanna Maia",
  description: "Análise e Desenvolvimento de Sistemas.",
  image: require('../img/geo.jpg')
  },
  {
  titulo: "Davi de Almeida",
  description: "Ciência da Computação.",
  image: require('../img/davi.jpg')
  },
  {
  titulo: "Gabriel Tales",
  description: "Ciência da Computação.",
  image: require('../img/gabriel.jps.jpg')
  },
];
const getItems = (data,index) =>({
  id:Math.random().toString(12).substring(0),
  title: data[index].titulo,
  description: data[index].description,
  image: data[index].image
});

const getItemsCount = (data) => data.length;

const Item = ({title,description, image}) => (
  <View style={estilos.item}>
    <View style={estilos.imageContainer}>
      <Image
        source={image}
        style={estilos.image}
      />
    </View>
    <View style={estilos.textContainer}>
      <Text style={estilos.title}>{title}</Text>
      <Text style={estilos.description}>{description}</Text>
    </View>
  </View>
)

export default function Colaboradores({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.textoGray}>Conheça nossos colaboradores:</Text>
      <VirtualizedList
        data={Data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} 
                                        description={item.description}
                                        image={item.image}
                                  />
                  }
        keyExtractor={(item) => item.key}
        getItemCount={() => getItemsCount(Data)}
        getItem={getItems}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    backgroundImage: 'linear-gradient(135deg, #ff204e 0%, #a0153e 35%, #5d0e41 100%)'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    padding: 10,
    borderRadius: 8,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
  },
  title: {
    fontSize: 16,
    fontWeight: 600
  },
  description:{
    fontSize: 16,
    color: '#7C7C7C'
  },
  imageContainer: {
  marginRight: 10,
  },
  image: {
    width: 70, 
    height: 70, 
    borderRadius: 50, 
  },
  textContainer: {
    flex: 1,
  },
  textoGray:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
})


