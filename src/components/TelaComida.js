import React, { Component } from  'react';
import { Text,AppRegistry,View,TouchableNativeFeedback,Image,ScrollView } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const Estilos = {
	titulo:{
		marginTop: 10,
		marginRight:10,
		width:150,
		height:50,
		marginLeft:10,
		backgroundColor: '#036635',
		alignItems:'center',

	},
	tituloTexto:{
		fontSize:30,
		color: 'white',
		
		
	},
	imgComida:{
		borderRadius:100,
		marginTop:20,
		marginLeft:20,
	},
	divisaotela:{
		flexDirection:'row',
	},
	textoDesc:{
		marginTop:40,
		marginLeft:15,
		
	},
	textoDescView:{
		fontSize:20,
		width:175,
	},


};

export default class TelaComida extends Component{
	render(){
		return(

				
		<View>
		
			<ScrollView>
			<BarraNavegacao/>
				<View style={Estilos.titulo}>
					<Text style={Estilos.tituloTexto}>Comidas</Text>
				</View>

				<View style={Estilos.divisaotela}>
					<View>
						<Image style={Estilos.imgComida} source={require('../images/muffin.jpg')}/>
					</View>
					<View style={Estilos.textoDesc}>
						<Text style={Estilos.textoDescView}>Muffin de Queijo Parmesão</Text>
						<Text style={Estilos.textoDescView}>R$8,00</Text>
					</View>
				</View>

				<View style={Estilos.divisaotela}>
					<View>
						<Image style={Estilos.imgComida} source={require('../images/cruffins.jpg')}/>
					</View>
					<View style={Estilos.textoDesc}>
						<Text style={Estilos.textoDescView}>Cruffins de Churros</Text>
						<Text style={Estilos.textoDescView}>R$8,50</Text>
					</View>
				</View>

				<View style={Estilos.divisaotela}>
					<View>
						<Image style={Estilos.imgComida} source={require('../images/donout.png')}/>
					</View>
					<View style={Estilos.textoDesc}>
						<Text style={Estilos.textoDescView}>Ring Donuts Chocoberry</Text>
						<Text style={Estilos.textoDescView}>R$7,00</Text>
					</View>
				</View>

				<View style={Estilos.divisaotela}>
					<View>
						<Image style={Estilos.imgComida} source={require('../images/roll.jpg')}/>
					</View>
					<View style={Estilos.textoDesc}>
						<Text style={Estilos.textoDescView}>Muffin de Queijo Parmesão</Text>
						<Text style={Estilos.textoDescView}>R$6,50</Text>
					</View>
				</View>

			</ScrollView>
		</View>
				
					
					
			
			);
	}
}
			