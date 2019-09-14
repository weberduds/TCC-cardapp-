import React, { Component } from  'react';
import { Text,
	TextInput,
	View,
	TouchableNativeFeedback,
	TouchableOpacity,
	Button,
	NativeModules,

} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import Voice from 'react-native-voice';
	import firebase from 'react-native-firebase';
	import Rotas from './Rotas';
	import TelaPrincipal from './TelaPrincipal';


export default class AutenticacaoUsuario extends Component {
	state={
		email:'',
		password:'',
		isAuthenticated: false,
	};

	login= async () => {
		const{ email, password } = this.state;

		
		try
		{
			const user = await firebase.auth().signInWithEmailAndPassword(email, password);
			this.setState({ isAuthenticated: true});
		} catch(err){

		}
	
		}
		
	

	render(){
		return(
			<View style={styles.container}>
				<TextInput style={styles.input}
				placeholder="Digite seu e-mail" 
				value={this.state.email}
				onChangeText={email => this.setState({email})}
				/>
				<TextInput style={styles.input}
				placeholder="Digite sua senha" 
				value={this.state.password}
				onChangeText={password => this.setState({password})}
				/>
				<TouchableOpacity style={styles.button}
				onPress={this.login}
				>
				<Text onPress= {Actions.principal} style={styles.buttonText}></Text>
				</TouchableOpacity>

			</View>

			);
	}
}
const styles={
	container: {
				flex: 1,
				justifyContent:'center',
				alignItems:'center',
				backgroundColor:'#036635',
				padding:20,
			},
	input:{
		height:45,
		backgroundColor:'#fff',
		alignSelf:'stretch',
		borderColor:'#eee',
		borderWidth:1,
		paddingHorizontal:20,
		marginBottom:10,
	},
	button:{
		height:45,
		backgroundColor:'#069',
		alignSelf:'stretch',
		paddingHorizontal:20,
		justifyContent:'center',
		alignItems:'center',
	},
	buttonText:{
		color:'#fff',
		fontWeight:'bold',
	},

};
	