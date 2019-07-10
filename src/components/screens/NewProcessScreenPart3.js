import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class NewProcessScreenPart3 extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      cliente: this.props.navigation.getParam('cliente'),
      imovel: this.props.navigation.getParam('imovel'),

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 128, height: 128 }} source={require('../../assets/images/success.png')} />
        <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', marginTop: 20, padding: 10 }}>Sua solicitação de serviço foi realizada com sucesso! Basta aguardar que o prestador do serviço a confirme. {'\n\n'}Obrigado por utilizar o Service Helper!</Text>
        <TouchableHighlight
          underlayColor="#fff"
          style={{ backgroundColor: '#fff', width: '48%', height: 50, borderRadius: 15, alignItems: 'center', marginRight: 1 }}
          onPress={() => { this.props.navigation. navigate('Prices')}}
        >
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#3db39e', alignSelf: 'center', fontSize: 18 }}>Voltar ao início</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3db39e',
    width: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
