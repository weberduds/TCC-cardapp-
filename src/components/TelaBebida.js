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

export default class TelaBebida extends Component{
	render(){
		return(

				
		<View>
		
			<ScrollView>
			<BarraNavegacao/>
				<View style={Estilos.titulo}>
					<Text style={Estilos.tituloTexto}>Bebidas</Text>
				</View>

				<View style={Estilos.divisaotela}>
					<View>
						<Image style={Estilos.imgComida} source={require('../images/capuccino.jpg')}/>
					</View>
					<View style={Estilos.textoDesc}>
						<Text style={Estilos.textoDescView}>Capuccino Canela</Text>
						<Text style={Estilos.textoDescView}>R$9,00</Text>
					</View>
				</View>

				<View style={Estilos.divisaotela}>
					<View>
						<Image style={Estilos.imgComida} source={require('../images/latte.jpg')}/>
					</View>
					<View style={Estilos.textoDesc}>
						<Text style={Estilos.textoDescView}>Café Latte</Text>
						<Text style={Estilos.textoDescView}>R$8,00</Text>
					</View>
				</View>

				<View style={Estilos.divisaotela}>
					<View>
						<Image style={Estilos.imgComida} source={require('../images/americ.jpg')}/>
					</View>
					<View style={Estilos.textoDesc}>
						<Text style={Estilos.textoDescView}>Café Americano</Text>
						<Text style={Estilos.textoDescView}>R$5,00</Text>
					</View>
				</View>

				<View style={Estilos.divisaotela}>
					<View>
						<Image style={Estilos.imgComida} source={require('../images/verdinho.jpg')}/>
					</View>
					<View style={Estilos.textoDesc}>
						<Text style={Estilos.textoDescView}>Chá Verde Latte</Text>
						<Text style={Estilos.textoDescView}>R$7,50</Text>
					</View>
				</View>

			</ScrollView>
		</View>
							
			
			);
	}
}
			