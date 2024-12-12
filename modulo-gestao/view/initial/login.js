import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import firebase from 'firebase';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false
    };
  }

  atualizarValores = (val, props) => {
    this.setState({ [props]: val });
  }

  userLogin = () => {
    if (this.state.email === '' || this.state.password === '') {
      alert("Digite detalhes do usuário!");
    } else {
      this.setState({isLoading: true});
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.setState({
            email: '',
            password: '',
            isLoading: false
          });
          this.props.navigation.navigate('AppTabs'); // Atualizado para navegar para AppTabs
        }).catch((error) => {
          alert(error.message);
          this.setState({isLoading: false});
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
        <View style={styles.container}>
          <View style={styles.loginTitle}>
            <Image source={require('../../../assets/logoapp.png')} style={styles.logoapp} />
            <Image source={require('../../../assets/logohealthapp.png')} style={styles.logo} />
            <Text style={styles.titleText}>Sua vida mais ativa!</Text>
          </View>
          <View style={styles.inputCard}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input} 
              value={this.state.email} 
              onChangeText={(val) => this.atualizarValores(val, 'email')} 
              placeholder="E-mail"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.inputCard}>
            <Text style={styles.label}>Senha</Text>
            <TextInput 
              style={styles.input} 
              value={this.state.password} 
              onChangeText={(val) => this.atualizarValores(val, 'password')} 
              secureTextEntry={true} 
              placeholder="Password"
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.userLogin}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.socialLogin}>
            <Image source={require('../../img/Google.png')} style={styles.socialIcon} />
            <Image source={require('../../img/Facebook.png')} style={styles.socialIcon} />
            <Image source={require('../../img/Apple.png')} style={styles.socialIcon} />
          </View>
          <Text onPress={() => this.props.navigation.navigate("TelaCadastro")}>Não tem uma conta? Cadastre aqui.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '23%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#F9F9F9"
  },
  loginTitle: {
    alignItems: 'center',
    marginBottom: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#36622B',
  },
  headerText: {
    fontSize: 18,
    color: '#36622b',
    fontWeight: '600'
  },
  logo: {
    width: 290,
    height: 55,
    marginBottom: 25
  },
  logoapp: {
    width: 120,
    height: 120,
    marginBottom: 25
  },
  inputCard: {
    width: '100%',
    marginBottom: 10
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#36622B',
    borderRadius: 8,
    height: 52,
  },
  label: {
    fontSize: 16
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
    fontWeight: 'bold',
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 20
  },
  socialIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
});
