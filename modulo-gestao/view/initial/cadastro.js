import { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { estilos } from '../../css/estilos';

export default class TelaCadastro extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      displayName: '',
      gender: null,
      isLoading: false,
    };
  }

  atualizarValores = (val, props) => {
    this.setState({ [props]: val });
  }

  userCadastro = () => {
    if (
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.displayName === '' ||
      this.state.gender === null
    ) {
      alert('Por favor, preencha todos os campos!');
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
          response.user.updateProfile({
            displayName: this.state.displayName,
          });
          this.setState({
            email: '',
            password: '',
            displayName: '',
            gender: null,
            isLoading: false,
          });
          this.props.navigation.navigate('TelaLogin');
        })
        .catch((error) => {
          alert(error.message);
          this.setState({isLoading: false});
        });
    }
  }

  renderGenderButtons() {
    const genders = ["Masculino", "Feminino", "Nenhum"];
    return genders.map(gender => (
      <TouchableOpacity
        key={gender}
        style={this.state.gender === gender ? styles.genderButtonSelected : styles.genderButton}
        onPress={() => this.setState({ gender })}
        onFocus={() => this.setState({ gender })}
      >
        <Text style={this.state.gender === gender ? styles.genderTextSelected : styles.genderText}>
          {gender}
        </Text>
      </TouchableOpacity>
    ));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#9e9e9e" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.profilePictureContainer}>
          <Text style={styles.profileText}>Criar conta</Text>
        </View>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={this.state.displayName}
          onChangeText={(val) => this.atualizarValores(val, 'displayName')}
          placeholder="Seu nome"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(val) => this.atualizarValores(val, 'email')}
          placeholder="Seu email"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(val) => this.atualizarValores(val, 'password')}
          secureTextEntry={true}
          placeholder="Escolha sua senha"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Gênero</Text>
        <View style={styles.genderContainer}>
          {this.renderGenderButtons()}
        </View>
        <TouchableOpacity style={styles.button} onPress={this.userCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('TelaLogin')}>
          Já tem uma conta? Entre aqui.
        </Text>
      </View>
    );
  }
}

// styles atualizados para botões de gênero
const styles = StyleSheet.create({
  genderButton: {
    paddingVertical: 8, // Reduz o padding vertical
    paddingHorizontal: 10, // Mantém o padding horizontal
    borderWidth: 1,
    borderColor: '#d0d0d0',
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 1,
    margin: 2,
    alignItems: 'center',
    height: 40, // Define uma altura fixa menor
  },
  genderButtonSelected: {
    paddingVertical: 8, // Reduz o padding vertical
    paddingHorizontal: 10, // Mantém o padding horizontal
    borderWidth: 1,
    borderColor: '#36622B',
    borderRadius: 20,
    flex: 1,
    margin: 2,
    alignItems: 'center',
    height: 40, // Define uma altura fixa menor
  },
  genderText: {
    color: 'black',
  },
  genderTextSelected: {
    color: '#36622B',
  },
  profilePictureContainer:{
    gap:30,
    alignItems: 'center',
    marginBottom: 30
  },
  profileText:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#36622b'
  },
  // profilePicture:{
  //   width: 50,
  //   height: 50,
  //   borderRadius: 50
  // },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 80,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#D1DACF',
    height: 52,
    marginBottom: 16
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 58
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 16, // Adiciona uma pequena margem vertical para separação
    width: '100%', // Assegura que a largura preencha a largura do contêiner pai
  },
    label: {
    alignSelf: 'flex-start', // Alinha o rótulo à esquerda do contêiner
    fontSize: 16, // Define o tamanho da fonte para o rótulo
    color: 'black', // Define a cor do texto
  },
  loginText: {
    marginVertical: 15
  }
});
