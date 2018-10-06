/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Button
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';


class pedra_papel_tesoura_app extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '',  escolhaComputador: '',  resultado: '' };
  }

  jokenpo(escolhaUsuario) {   
    //gerar um número aleatório (0, 1 ou 2)
    const numAleatorio = Math.floor(Math.random() * 3);
    const usuarioGanhouMessage = 'Você Ganhou!';
    const computadorGanhouMessage = 'Você perdeu!';
    const empateMessage = 'Empatou!';

    let escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = empateMessage;
      } else if (escolhaUsuario === 'papel') {
        resultado = usuarioGanhouMessage;
      } else {
        resultado = computadorGanhouMessage;
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = empateMessage;
      } else if (escolhaUsuario === 'tesoura') {
        resultado = usuarioGanhouMessage;
      } else {
        resultado = computadorGanhouMessage;
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = empateMessage;
      } else if (escolhaUsuario === 'pedra') {
        resultado = usuarioGanhouMessage;
      } else {
        resultado = computadorGanhouMessage;
      }
    }

    this.setState( { escolhaUsuario, escolhaComputador, resultado });
  }
  
  render() {
    return (
        <View>
          <Topo />
          <View style={styles.painelAcoes}>
            <View style={styles.btnEscolha}>
              <Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
            </View>
            <View style={styles.btnEscolha}>
              <Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
            </View>
            <View style={styles.btnEscolha}>
              <Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
            </View>
          </View>
          <View style={styles.palco}>
            <Text style={styles.txtResultado}>{this.state.resultado}</Text>
            <Icone escolha={this.state.escolhaComputador} jogador='Computador'/>
            <Icone escolha={this.state.escolhaUsuario} jogador='Usuário' />           
          </View>         
          </View>      
      );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
    alignItems: 'center',
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('pedra_papel_tesoura_app', () => pedra_papel_tesoura_app);
