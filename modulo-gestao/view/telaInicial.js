import { Component } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import firebase from 'firebase';
import { estilos } from '../css/estilos';

export default class TelaInicial extends Component {
  constructor() {
    super();
    this.state = {
      uid: '',
      nome: '',
      idade: '',
      matricula: '',
      displayName: '',
      isLoading: false,
    };
    this.state.displayName = firebase.auth().currentUser.displayName;
    this.state.uid = firebase.auth().currentUser.uid;

    this.db = firebase.firestore();
  }

  cadastrarDados = () => {
    if (
      this.state.displayName === '' ||
      this.state.idade === '' ||
      this.state.matricula === ''
    ) {
      alert('Favor digite dados solicitados');
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: true });
      const data = {
        nome: this.state.displayName,
        idade: this.state.idade,
        matricula: this.state.matricula,
      };
      this.db
        .collection('perfilUsuario')
        .doc('aluno')
        .set(data)
        .then((response) => {
          this.setState({
            nome: '',
            idade: '',
            matricula: '',
            isLoading: false,
          });
          alert('Perfil do usuario cadastrado com sucesso' + response);
        })
        .catch((erro) => {
          alert('erro ao cadastrar perfilo do usuario..' + erro);
        });
    }
  };

  atualizarValor = (valor, props) => {
    const state = this.state;
    state[props] = valor;
    this.setState(state);
  };
  sair = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Usuario fez logout com sucesso!');
      })
      .catch((erro) => {
        alert('erro ao efetuar logout..' + erro);
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#9e9e9e" />
        </View>
      );
    }

    return (
      <View >
        <Card>
          <Card.Title>Perfil do usuario</Card.Title>
          <Card.Divider />
          <Card.Image 
          source={require('../img/perfil_snack.png')}
          />
          <View style={estilos.container}>
        <TextInput
          style={estilos.input}
          defaultValue={this.state.nome}
          onChangeText={(val) => this.atualizarValor(val, 'nome')}
          placeholder={'Nome Completo'}
        />
        <TextInput
          style={estilos.input}
          value={this.state.idade}
          onChangeText={(val) => this.atualizarValor(val, 'idade')}
          placeholder={'Idade'}
        />

        <TextInput
          style={estilos.input}
          value={this.state.matricula}
          onChangeText={(val) => this.atualizarValor(val, 'matricula')}
          placeholder={'Matricula'}
          maxLength={12}
        />

        <View style={estilos.button}>
          <Button
            title="Cadastrar perfil"
            onPress={() => this.cadastrarDados()}
          />
        </View>
        <View style={estilos.button}>
          <Button title="sair" onPress={() => this.sair()} />
        </View>
          </View>
        </Card>
      </View>
    );
  }
}
