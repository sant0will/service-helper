import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image, Linking, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'
const list = [
  {
    name: 'Suporte',
    icon: <Icon name='question-circle' size={26} color='#000' />,
  },
  {
    name: 'Notificações',
    icon: <Icon name='bell' size={26} color='#000' />,
  },
  {
    name: 'Política de privacidade',
    icon: <Icon name='file-alt' size={26} color='#000' />,
  },
  {
    name: 'Quem somos',
    icon: <Icon name='building' size={26} color='#000' />,
  },
  {
    name: 'Configurações',
    icon: <Icon name='cog' size={26} color='#000' />,
  },
  {
    name: 'Logout',
    icon: <Icon name='sign-out-alt' size={26} color='#000' />,
  },

];

export default class SettingsScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/sh-banner.png')}
          resizeMode={'contain'}
          style={{ width: 400, height: 200 }}
        />

        <View style={{ paddingHorizontal: 5, flex: .05, width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginVertical: 20 }}>
          <Text style={{ color: 'black', fontSize: 28, marginLeft: 15 }}>Sobre</Text>
        </View>
        <View style={{ paddingHorizontal: 5, flex: .95, width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>

          {
            list.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  containerStyle={{ backgroundColor: '#fff', borderBottomColor: '#d7d8dd', borderBottomWidth: 1, width: '100%' }}
                  title={item.name}
                  rightIcon={item.icon}
                  titleStyle={{ fontSize: 16, fontFamily: 'NeoSansPro-Bold', color: '#000' }}
                />
              );
            })
          }

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
