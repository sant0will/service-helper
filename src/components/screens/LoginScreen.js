import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, TouchableHighlight, Keyboard, Image } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeLogo: 250,
      email: '',
      valid_email: '',
      password: '',
      valid_password: '',
      visible_forgot: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {

    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      sizeLogo: 150
    }, () => {
      return true;
    })
  }

  _keyboardDidHide = () => {
    this.setState({
      sizeLogo: 250
    }, () => {
      return true;
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.visible_forgot}
          onRequestClose={() => {
            this.setState({ visible_forgot: false })
          }}
        >
          <View style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>

            <View
              style={{ marginTop: 20, margin: 10, flex: .4, display: 'flex', alignItems: 'center' }}
            >
              <Image
                source={require('../../assets/images/logo.png')}
                resizeMode={'contain'}
                style={{ width: 200, height: 200, borderRadius: 10 }}
              />

            </View>
            <View
              style={{ flex: .95, height: '60%', width: '90%', alignItems: 'flex-start' }}
            >
              <FloatingLabelInput
                label="Nome"
                mask="e-mail"
                // color={inputColor}
                // textColor={labelColor}
                value={this.state.email}
                onBlur={text => this.setState({ valid_email: text })}
                onChangeText={text => this.setState({ email: text })}
                error='* O e-mail informado é inválido'
                keyboardType='email-address'
                autoCapitalize='none'
                secure={false}
              />
              <FloatingLabelInput
                label="E-mail"
                mask="e-mail"
                // color={inputColor}
                // textColor={labelColor}
                value={this.state.email}
                onBlur={text => this.setState({ valid_email: text })}
                onChangeText={text => this.setState({ email: text })}
                error='* O e-mail informado é inválido'
                keyboardType='email-address'
                autoCapitalize='none'
                secure={false}
              />
              <FloatingLabelInput
                label="Senha"
                mask="e-mail"
                // color={inputColor}
                // textColor={labelColor}
                value={this.state.email}
                onBlur={text => this.setState({ valid_email: text })}
                onChangeText={text => this.setState({ email: text })}
                error='* O e-mail informado é inválido'
                keyboardType='email-address'
                autoCapitalize='none'
                secure={false}
              />
              <FloatingLabelInput
                label="Confirme a senha"
                mask="e-mail"
                // color={inputColor}
                // textColor={labelColor}
                value={this.state.email}
                onBlur={text => this.setState({ valid_email: text })}
                onChangeText={text => this.setState({ email: text })}
                error='* O e-mail informado é inválido'
                keyboardType='email-address'
                autoCapitalize='none'
                secure={false}
              />
              <TouchableHighlight
                underlayColor='#fff'
                style={{ backgroundColor: '#1758aa', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginVertical: 10 }}
                onPress={() => alert('Recuperar senha')}
              >
                <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Criar</Text>
              </TouchableHighlight>

              <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                <View style={styles.hairline} />
                <Text style={styles.loginButtonBelowText1}>OU</Text>
                <View style={styles.hairline} />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>

                {/* Facebook */}
                <TouchableHighlight
                  underlayColor="#2196f3"
                  style={{ backgroundColor: '#2196f3', width: '48%', height: 50, borderRadius: 15, alignItems: 'center', marginRight: 1 }}
                >
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'facebook'} size={25} color={'#fff'} />
                    <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18, marginLeft: 15 }}>Facebook</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="#dedede"
                  style={{ backgroundColor: '#dedede', width: '48%', height: 50, borderRadius: 15, alignItems: 'center', marginLeft: '4%' }}
                >
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'google'} size={25} color={'#ea4335'} />
                    <Text style={{ color: '#ea4335', alignSelf: 'center', fontSize: 18, marginLeft: 15 }}>Google</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>

        </Modal>
        <View
          style={{ margin: 10, flex: .4, display: 'flex', alignItems: 'center' }}
        >
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode={'contain'}
            style={{ width: this.state.sizeLogo, height: this.state.sizeLogo, borderRadius: 10 }}
          />

        </View>
        <View
          style={{ flex: .4, height: '60%', width: '90%', alignItems: 'flex-start' }}
        >
          <Text style={{ color: '#000', alignSelf: 'flex-start', fontSize: 18, marginBottom: 10 }}>Faça login para entrar</Text>


          <FloatingLabelInput
            label="E-mail"
            mask="e-mail"
            // color={inputColor}
            // textColor={labelColor}
            value={this.state.email}
            onBlur={text => this.setState({ valid_email: text })}
            onChangeText={text => this.setState({ email: text })}
            error='* O e-mail informado é inválido'
            keyboardType='email-address'
            autoCapitalize='none'
            secure={false}
          />

          <FloatingLabelInput
            label="Senha"
            mask="name"
            // color={inputColor}
            // textColor={labelColor}
            value={this.state.password}
            onBlur={text => this.setState({ valid_password: text })}
            onChangeText={text => this.setState({ password: text })}
            error='* A senha informado é inválido'
            keyboardType='default'
            autoCapitalize='none'
            secure={true}
          />
          <TouchableHighlight
            underlayColor='#fff'
            style={{ width: '100%' }}
          >
            <Text style={{ color: '#000', alignSelf: 'flex-start', fontSize: 18, marginVertical: 20 }}>Recuperar senha</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='#fff'
            style={{ backgroundColor: '#1758aa', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginVertical: 10 }}
            onPress={() => this.props.navigation.navigate('Processes')}
          >
            <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='#fff'
            style={{ backgroundColor: '#fff', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginVertical: 10 }}
            onPress={() => this.setState({
              visible_forgot: true,
            })}
          >

            <Text style={{ color: '#f4900c', alignSelf: 'center', fontSize: 18 }}>Cadastre-se</Text>

          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  hairline: {
    marginTop: 8,
    backgroundColor: '#A2A2A2',
    height: 1,
    width: 165
  },

  loginButtonBelowText1: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },
});
