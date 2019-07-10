import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingLabelInput from './FloatingLabelInput';

export default class NewProcessScreenPart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: this.props.navigation.getParam('cliente'),
      morada: '',
      lote: '',
      andar: '',
      codigo_postal: '',
      localidade: '',
      fracao: '',
      area: '',
      contato: 'cliente',

    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'normal',
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        flex: 1
      },
      headerLeft: (
        <TouchableHighlight
          underlayColor="white"
          onPress={() => navigation.goBack()}
          style={{ padding: Platform.OS == 'ios' ? 10 : 20 }}
        >
          <Icon name={'chevron-left'} size={25} color={'#000'} />
        </TouchableHighlight>
      ),
      headerRight: (
        <TouchableHighlight
          underlayColor="white"
          style={{ padding: Platform.OS == 'ios' ? 10 : 20 }}
        // onPress={navigation.getParam('cleanFields')}
        >
          <Text style={{ color: "#000" }}></Text>
        </TouchableHighlight>
      ),
    }
  };

  cleanFields = async () => {
    this.setState({
      morada: '',
      lote: '',
      andar: '',
      codigo_postal: '',
      localidade: '',
      fracao: '',
      area: '',
      contato: 'cliente',
    });
  }

  componentDidMount() {
    this.props.navigation.setParams({ cleanFields: this.cleanFields });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>

            <View style={{ paddingHorizontal: 5, flex: .05, width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Text style={{ color: 'black', fontSize: 28, marginLeft: 15 }}>Novo pedido</Text>
            </View>
            <View style={{ flex: .95, flexDirection: 'column', width: '100%', margin: 10, paddingHorizontal: 10, paddingVertical: 10 }}>
              <Text style={{ color: 'black', fontSize: 18, marginVertical: 20,  fontWeight: 'bold' }}>Dados do serviço</Text>
              <FloatingLabelInput
                label="Serviço"
                mask="e-mail"
                // color={inputColor}
                // textColor={labelColor}
                value={'Jardinagem'}
                onBlur={text => this.setState({ valid_email: text })}
                onChangeText={text => this.setState({ email: text })}
                error='* O e-mail informado é inválido'
                keyboardType='email-address'
                autoCapitalize='none'
                secure={false}
              />
              <Text style={{ color: 'black', fontSize: 18, marginVertical: 20, fontWeight: 'bold' }}>Data</Text>
              <FloatingLabelInput
                label="Data"
                mask="e-mail"
                // color={inputColor}
                // textColor={labelColor}
                value={''}
                onBlur={text => this.setState({ valid_email: text })}
                onChangeText={text => this.setState({ email: text })}
                error='* O e-mail informado é inválido'
                keyboardType='email-address'
                autoCapitalize='none'
                secure={false}
              />
              <Text style={{ color: 'black', fontSize: 18, marginVertical: 10, fontWeight: 'bold' }}>Disponibilidade de horário</Text>
              <FloatingLabelInput
                label="Hora inicial"
                mask="e-mail"
                // color={inputColor}
                // textColor={labelColor}
                value={''}
                onBlur={text => this.setState({ valid_email: text })}
                onChangeText={text => this.setState({ email: text })}
                error='* O e-mail informado é inválido'
                keyboardType='email-address'
                autoCapitalize='none'
                secure={false}
              />
              <FloatingLabelInput
                label="Hora final"
                mask="e-mail"
                // color={inputColor}
                // textColor={labelColor}
                value={''}
                onBlur={text => this.setState({ valid_email: text })}
                onChangeText={text => this.setState({ email: text })}
                error='* O e-mail informado é inválido'
                keyboardType='email-address'
                autoCapitalize='none'
                secure={false}
              />            
              <View style={{ flexDirection: 'column', width: '100%', marginVertical: 20 }}>
                <TouchableHighlight
                  underlayColor={'transparent'}
                  style={{ width: '100%' }}
                  onPress={() => this.setState({ contato: 'cliente' })}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Descrição</Text>
                    <Icon name={'chevron-right'} size={16} color={'#cacacc'} />
                  </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomColor: '#cacacc',
                    borderBottomWidth: 1,
                  }}
                />
                <TouchableHighlight
                  underlayColor={'transparent'}
                  style={{ width: '100%' }}
                  onPress={() => this.setState({ contato: 'cliente' })}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Localização</Text>
                    <Icon name={'chevron-right'} size={16} color={'#cacacc'} />
                  </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomColor: '#cacacc',
                    borderBottomWidth: 1,
                  }}
                />
                <TouchableHighlight
                  underlayColor={'transparent'}
                  style={{ width: '100%' }}
                  onPress={() => this.setState({ contato: 'cliente' })}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Fotos</Text>
                    <Icon name={'chevron-right'} size={16} color={'#cacacc'} />
                  </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomColor: '#cacacc',
                    borderBottomWidth: 1,
                  }}
                />
                <TouchableHighlight
                  underlayColor={'transparent'}
                  style={{ width: '100%' }}
                  onPress={() => this.setState({ contato: 'cliente' })}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Observações</Text>
                    <Icon name={'chevron-right'} size={16} color={'#cacacc'} />
                  </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomColor: '#cacacc',
                    borderBottomWidth: 1,
                  }}
                />
              </View>

              <Text style={{ color: 'black', fontSize: 18, marginVertical: 20, fontWeight: 'bold' }}>Forma de pagamento</Text>
              <View style={{ flexDirection: 'column', width: '100%' }}>

                <TouchableHighlight
                  underlayColor={'transparent'}
                  style={{ width: '100%' }}
                  onPress={() => this.setState({ contato: 'cliente' })}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Cartão de crédito</Text>

                    <View style={{ width: 25, height: 25, borderRadius: 25, borderColor: this.state.contato == 'cliente' ? 'transparent' : '#cacacc', borderWidth: 1 }}>
                      {
                        this.state.contato == 'cliente' ?
                          <Image style={{ width: 24, height: 24 }} source={require('../../assets/images/checked.png')} />
                          : null
                      }
                    </View>
                  </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomColor: '#cacacc',
                    borderBottomWidth: 1,
                  }}
                />
                <TouchableHighlight
                  underlayColor={'transparent'}
                  style={{ width: '100%' }}
                  onPress={() => this.setState({ contato: 'imobiliaria' })}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Dinheiro</Text>

                    <View style={{ width: 25, height: 25, borderRadius: 25, borderColor: this.state.contato == 'cliente' ? '#cacacc' : 'transparent', borderWidth: 1 }}>
                      {
                        this.state.contato == 'imobiliaria' ?
                          <Image style={{ width: 24, height: 24 }} source={require('../../assets/images/checked.png')} />
                          : null
                      }
                    </View>
                  </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomColor: '#cacacc',
                    borderBottomWidth: 1,
                  }}
                />
              </View>




              <TouchableHighlight
                underlayColor='#fff'
                style={{ backgroundColor: '#1758aa', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginVertical: 30 }}
                onPress={() =>
                  this.props.navigation.navigate('Part3', {},
                    {
                      type: 'Navigate',
                      action: this.props.navigation.navigate({
                        routeName: 'Part3'
                      })
                    }
                  )}
              >

                <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Confirmar</Text>

              </TouchableHighlight>

            </View>
          </View>
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
