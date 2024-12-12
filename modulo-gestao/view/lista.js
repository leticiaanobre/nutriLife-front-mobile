import {View, Text, Button, StyleSheet, SectionList, StatusBar} from 'react-native'

const Data = [
  {
  titulo: "Sistemas",
  data: ['Computadores', 'Tablets', 'Tv', 'Máquinas Virtuais']
  },
  {
  titulo: "Ambientação",
  data: ['Sala de estudos', 'Auditório', 'Refeitório']
  },
  {
  titulo: "Networking",
  data: ['Patrocinadores', 'Líderes empresariais', 'Desenvolvedores', 'Administradores']
  },
];

const Item = ({titulo}) => (
  <View style={estilos.item}>
    <Text style={estilos.titulo}>{titulo}</Text>
  </View>
)

export default function Lista({navigation}){
  return (
    <View style={estilos.container}>
      <Text style={estilos.headerTitle}>Oferecidos pela nossa comunidade</Text>
      <SectionList
      sections = {Data}
      keyExtractor = {(item, index) => item + index}
      renderItem = {({item}) => <Item titulo = {item} />}
      renderSectionHeader = {({section: {titulo}}) => 
        (<Text style={estilos.header}>{titulo}</Text>
        )}
      />
      <Button title="Home" 
              onPress={
                        ()=>navigation.navigate('Home')
                      }
      />
    </View>
  )
}

const estilos = StyleSheet.create(
  {
    container:{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#f7f7f5'
    },
    headerTitle:{
      backgroundColor: '#f7f7f5',
      height: 60,
      padding: '0.5rem',
      fontSize: 22,
      fontWeight: 700,
      color: '#00224D',
      borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    },
    item: {
      backgroundColor: '#fff',
      padding: 18,
      marginVertical: 2,
      marginHorizontal: 7,
      borderRadius: 8
    },
    titulo: {
      fontSize: 14,
      color: '#212b2a',
    },
    header: {
      fontSize: 18,
      backgroundColor: '#f7f7f5',
      padding: 10,
      color: '#00224D',
      fontWeight: 500
    }
  }
)