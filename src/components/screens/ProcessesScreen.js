import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const info = [
  {
    consultor: 'João Silva',
    titulo: '05/06/2019',
    agencia : '',
    status: 'Aberto',
    codigo: 'Conserto'
  },
  {
    consultor: 'Mohamed Al',
    titulo: '05/06/2019',
    agencia: '',
    status: 'Concluído',
    codigo: 'Conserto'
  },
  {
    consultor: 'John Wick',
    titulo: '06/06/2019',
    agencia: '',
    status: 'Concluído',
    codigo: 'Instalação'
  },
  {
    consultor: 'Robert Downey Jr',
    titulo: '08/06/2019',
    agencia: '',
    status: 'Cancelado',
    codigo: 'Conserto'
  },
]

export default class ProcessesScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: .06, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', margin: 10, marginTop: 10 }}>

          <Input
            containerStyle={{ backgroundColor: '#f0eff5', width: '95%', height: 40, borderRadius: 10 }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder=' Pesquisar serviço'
            leftIcon={{ type: 'font-awesome', name: 'search', size: 18, color: '#c8c7cd' }}
            rightIcon={{ type: 'font-awesome', name: 'close', size: 18, color: '#c8c7cd' }}
          />
        </View>
        <View style={{ paddingHorizontal: 5, flex: .05, width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>

          <Text style={{ color: 'black', fontSize: 28, marginLeft: 15 }}>Serviços Realizados</Text>
        </View>
        <View style={{ flex: .8, width: '100%' }}>
          <FlatList
            data={info}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) =>
              <View style={{ flex: 1, flexDirection: 'row', width: '100%', padding: 20, borderBottomColor: '#d1d1d1', borderBottomWidth: 1 }}>
                <View style={{ flex: .5, flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Text>{item.consultor}</Text>
                  <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{item.codigo}</Text>

                  <Text style={{ fontSize: 16 }}>{item.titulo}</Text>
                </View>
                <View style={{ flex: .5, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                  <Text style={{ fontSize: 24 }}>{item.agencia}</Text>
                  <Text style={{ color: 'white', fontSize: 16, backgroundColor: item.status == 'Concluído' ? '#4cda64' : item.status == 'Aberto'? 'blue' : 'red', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 5 }}>{item.status}</Text>
                </View>
              </View>
            }
          />
        </View>
      </View>
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
