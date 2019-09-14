import React, { Component } from  'react';
import { Text,AppRegistry,View,TouchableNativeFeedback,Image,ScrollView } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const Estilos = {
	principal: {

	},
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
	cookies:{
		marginTop: 20,
		borderRadius:100,
		marginLeft:10,
	
	},
	cafe:{
		marginTop: 20,
		borderRadius:100,
		marginRight:10,
		
	},
	textinho:{
		marginBotton: 20,
		marginTop: 20,
		marginRight:10,
		width:190,
		marginLeft:10,
		
	},
};

export default class TelaPrincipal extends Component{
	render(){
		return(

				
			<View>
				<ScrollView>
				<BarraNavegacao/>
					<Image style={Estilos.imgnovidade} source={require('../images/novidades.jpg')}/>
					<View style={Estilos.divisaotela}>
						<View>
							<Image style={Estilos.cookies} source={require('../images/cookies.png')}/>
						</View>
						<View style={Estilos.textinho}> 
							<Text>COMIDAS</Text>
							<Text>Nossos alimentos são feitos com ingredientes selecionados e de qualidade.</Text>
							<Text>Dessa forma, todos os produtos que você provar serão comidas de verdade.</Text>
						</View>
					</View>
					<View style={Estilos.divisaotela}>
						<View style={Estilos.textinho}>
							<Text>BEBIDAS</Text>
							<Text>Cafés com sabores incríveis dos quatro cantos do mundo.
							 Bebidas artesanais para descobrir e apreciar. Adoramos colocar 
							 esses produtos à sua disposição!</Text>
							
						</View>
						<View>
							<Image style={Estilos.cafe} source={require('../images/coffe.jpg')}/>
						</View>
					</View>
					
				</ScrollView>	
			</View>
			);
	}
}
			