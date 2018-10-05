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


class MeuComponente extends Component {
  render() {
    return  (
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }
}

class pedra_papel_tesoura_app extends Component {
  
  constructor(props) {
    super(props);
    this.state = { texto : 'Texto teste padrão' };
    this.clicks = 1;
  }

  alteraTexto() {
    this.setState({ texto : 'Texto alterado ' + this.clicks });
    this.clicks++;    
  }
  
  render() {
    return (
      <View> 
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button
          title='Botão'
          onPress={() => { this.alteraTexto()}}
        />
      </View>
      
    );
  }
}

AppRegistry.registerComponent('pedra_papel_tesoura_app', () => pedra_papel_tesoura_app);