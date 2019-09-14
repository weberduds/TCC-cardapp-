/**
 * @format
 */

import React, { Component } from  'react';
import { Text,
	View,
	TouchableNativeFeedback,
	TouchableOpacity,
	Image,
	ScrollView, NativeModules} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import Rotas from './Rotas';
	import Voice from 'react-native-voice';


export default class BarraNavegacao extends Component{
	constructor(prop) {
    super(prop);
    Voice.onSpeechResults =  (resp) => {
   		alert(JSON.stringify(resp));
   	};
    
  }
	render(){
		return(
				<View>
					<View style={Estilos.divisaotela}>
						<View>
							<TouchableOpacity 
							onPress={() => {Actions.principal(); }}>
								<Image style={Estilos.logo} source={require('../images/star.png')}/>
							</TouchableOpacity>
						</View>
						<View>
							<TouchableOpacity 
							onPress={() => Voice.start(he)} >
								<Image style={Estilos.mic} source={require('../images/mic.png')}/>
							</TouchableOpacity>
						</View>
						
						
					</View>
					<View style={Estilos.barra}></View>
					<View style={Estilos.divisaotela}>
						<View style={Estilos.menu}>
							<TouchableOpacity onPress={() => {Actions.comida(); }}>
								<Image style={Estilos.imagem} source={require('../images/comidaas.png' ) }/>
							</TouchableOpacity>
						</View>
						<View style={Estilos.menu}>
							<TouchableOpacity onPress={() => {Actions.bebida(); }}>
								<Image style={Estilos.imagem} source={require('../images/bebidas.png' ) }/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={Estilos.barra2}></View>
				</View>
			);
	}
}


const Estilos = {
	menu: {
		backgroundColor: 'ghostwhite',
		height: 75,
		width:200,	
	},
	barra: {
		backgroundColor: '#036635',
		height: 10
	},
	barra2: {
		backgroundColor: '#036635',
		height: 5
	},
	botao: {
		backgroundColor: 'ghostwhite',
		color: '#036635',
		fontSize: 25,
		marginLeft: 30,
		width: 350,
		
	},
	imagem: {
		width: 150,
		height: 75,
		padding: 5,

	},
	imgnovidade: {
		width:390,
		height:390,
		

	},
	divisaotela:{
		flexDirection:'row',
	},

	logo: {
		width: 220,
		height: 75,
		marginLeft:10,

	},
	mic: {
		width: 50,
		height: 50,
		marginTop:10,
		marginLeft:60,

	},

};