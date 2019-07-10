import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class NewProcessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencia: 'Agência',
      nome: '',
      nif: '',
      morada: '',
      lote: '',
      andar: '',
      codigo_postal: '',
      localidade: '',
      email: ''
    };
  }

  static navigationOptions = {
    header: null
  }

  cleanFields = async () => {
    this.setState({
      agencia: 'Agência',
      nome: '',
      nif: '',
      morada: '',
      lote: '',
      andar: '',
      codigo_postal: '',
      localidade: '',
      email: '',
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

            <View style={{ paddingHorizontal: 5, flex: .05, width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
              <Text style={{ color: 'black', fontSize: 28, marginLeft: 15 }}>Novo pedido</Text>
            </View>
            <View style={{ flex: .95, flexDirection: 'column', width: '100%', margin: 10, paddingHorizontal: 10, paddingVertical: 10 }}>
              <Text style={{ color: 'black', fontSize: 18 }}>Selecione o tipo de serviço que deseja</Text>

              <View style={{ flexDirection: 'column', marginTop: 30 }}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#7bc564', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                    onPress={() => { this.props.navigation.navigate('Part2')}}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/plant.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Jardinagem</Text>

                    </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#fff067', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/broom.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Diarista</Text>

                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#57e6ff', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/baby.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Babá</Text>

                    </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#dedede', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/grandfather.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Cuidador</Text>

                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#004e5c', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/antenna.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Manutenção de antenas</Text>

                    </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#ff6a2a', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/pipe.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Encanador</Text>

                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#f9ce00', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/carpenter.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Marceneiro</Text>

                    </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#ff4b40', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/pedreiro.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Pedreiro</Text>

                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#007e59', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/light.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Eletricista</Text>

                    </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor='#fff'
                    style={{ backgroundColor: '#4d4d4d', width: '48%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                  >
                    <View style={{ width: '50%', height: 125, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/images/helmet.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Motorista</Text>

                    </View>
                  </TouchableHighlight>
                </View>

              </View>

              {/* <TouchableHighlight
                underlayColor='#fff'
                style={{ backgroundColor: '#1758aa', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginVertical: 20 }}
                onPress={() =>
                  this.props.navigation.navigate('Part2', {},
                    {
                      type: 'Navigate',
                      action: this.props.navigation.navigate({
                        routeName: 'Part2',
                        params: {
                          cliente: {
                            agencia: this.state.agencia,
                            nome: this.state.nome,
                            nif: this.state.nif,
                            morada: this.state.morada,
                            lote: this.state.lote,
                            andar: this.state.andar,
                            codigo_postal: this.state.codigo_postal,
                            localidade: this.state.localidade,
                            email: this.state.email
                          },
                        }
                      })
                    }
                  )}
              >
                <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Seguinte</Text>
              </TouchableHighlight> */}

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
