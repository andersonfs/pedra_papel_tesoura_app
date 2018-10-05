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
  View
} from 'react-native';


class MeuComponente extends Component {
  render() {
    return  (
      <View>
        <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.xyz}</Text>
        <Text>{this.props.p}</Text>
      </View>
    );
  }
}

class pedra_papel_tesoura_app extends Component {
  
  render() {
    return (
      <MeuComponente propriedade1='Banana' xyz='Abacaxi' p='Uva'></MeuComponente>
    );
  }
}

AppRegistry.registerComponent('pedra_papel_tesoura_app', () => pedra_papel_tesoura_app);