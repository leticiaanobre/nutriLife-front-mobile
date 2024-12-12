import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    gap: 18
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: 'grey', // Define a cor da borda
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8, // Alterado de "5px 8px" para apenas 8 horizontal
    paddingVertical: 5,   // Adicionado 5 vertical
    color: 'grey'
  },
  loginTitle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 18
  },
  loginTitleText1: {
    width: 100,
  },
  loginTitleText2: {
    // Estilos específicos para o primeiro filho
    fontWeight: 'bold',
    fontSize: 35,
    color: 'red',
  },
  login: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 18
  },
  button: {
    // Defina as propriedades de estilo para button aqui
  }
});
