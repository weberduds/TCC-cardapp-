
import { Text,
	AppRegistry,
	TextInput,
	View,
	TouchableNativeFeedback,
	TouchableOpacity,
	Button,
	NativeModules,

} from 'react-native';
import React, { Component } from  'react';
import {Router, Scene } from 'react-native-router-flux';
import {createStore} from 'redux';
import Rotas from './src/components/Rotas';
import AutenticacaoUsuario from './src/components/AutenticacaoUsuario';

import firebase from 'react-native-firebase';

export default class App extends Component{

    
	render(){
		return(
				<Rotas/>
			);
	}
}


AppRegistry.registerComponent('trabalho', () => App);