

import React, { Component } from  'react';
import {Router, Scene } from 'react-native-router-flux';
import TelaPrincipal from './TelaPrincipal';
import TelaComida from './TelaComida';
import TelaBebida from './TelaBebida';
import AutenticacaoUsuario from './AutenticacaoUsuario';

export default class Rotas extends Component{
	render(){
		return(
			<Router>

				     <Scene key = "root">
				     	<Scene key = "principal" component = {TelaPrincipal} initial hideNavBar/>
				        <Scene key = "comida" component = {TelaComida}  />
				        <Scene key = "bebida" component = {TelaBebida} />
				     </Scene>

			</Router>
			
			);
	}
}