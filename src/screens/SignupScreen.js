import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { nameChanged, passwordChanged, registerUser, emailChanged, confirmChanged } from '../action/actionUser';
import Icon from 'react-native-vector-icons/Feather';
import { Text, Input, Button } from 'react-native-elements';

class SignupScreen extends Component {


	onNameChange(text) {
		this.props.nameChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onConfirmChange(text) {
		this.props.confirmChanged(text);
	}

	onButtonPress() {
		const { nombreUser, email, password, confirmPassword } = this.props;
		const { navigate } = this.props.navigation;

		this.props.registerUser({ nombreUser, email, password, confirmPassword, navigate });
	}

	renderError() {
		if (this.props.error) {
			return (
				<View>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	render() {

		const { navigate } = this.props.navigation;

		const { 
			containerStyle, 
			sesionStyle, 
			footerStyle, 
			textStyle, 
			lineStyle,
			buttonStyle,
			logoStyle,
			inputStyle,
			textoStyle
		} = styles

		return (
			<View style={containerStyle}>

				<View style={sesionStyle}>
					<View>
						<Image
							style={logoStyle}
							source={require('../img/iconos-02.png')}
						/>
					</View>
					<Text style={textStyle} h3>Siesca</Text>
					<Text style={lineStyle}>___________</Text>
					<Text style={textStyle} h3>Registrar Usuario</Text>
					{this.renderError()}
					<Input
					  placeholder='Usuario'
					  leftIcon={
					  	<Icon
					      name='user'
					      size={24}
					      color='#fff'
					    />
					  }
					  onChangeText={this.onNameChange.bind(this)}
					  inputContainerStyle ={inputStyle}
					  inputStyle = {textoStyle}	
					/>
					<Input
					  placeholder='Email'
					  leftIcon={
					  	<Icon
					      name='mail'
					      size={24}
					      color='#fff'
					    />
					  }
					  onChangeText={this.onEmailChange.bind(this)}
					  inputContainerStyle ={inputStyle}
					  inputStyle = {textoStyle}
				
					/>
					<Input
						placeholder='Contraseña'
						leftIcon={
							<Icon
						      name='unlock'
						      size={24}
						      color='#fff' 
						    />
						}
						onChangeText={this.onPasswordChange.bind(this)}
						secureTextEntry
						inputContainerStyle ={inputStyle}
						inputStyle = {textoStyle}
					/>
					<Input
						placeholder='Confirmar Contraseña'
						leftIcon={
							<Icon
						      name='unlock'
						      size={24}
						      color='#fff' 
						    />
						}
						onChangeText={this.onConfirmChange.bind(this)}
						secureTextEntry
						inputContainerStyle ={inputStyle}
						inputStyle = {textoStyle}
					/>
					<Button
					  icon={
					    <Icon
					      name="arrow-right"
					      size={24}
					      color="red"
					    />
					  }
					  buttonStyle={buttonStyle}
					  onPress={this.onButtonPress.bind(this)}
					/>					

				</View>
				<TouchableOpacity style={footerStyle} onPress={() => navigate('login')}>
					<Text style={textStyle}>¿Ya tienes cuenta?</Text>
					<Text style={textStyle}> Inicia Sesión</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		backgroundColor: "#74787c",
		paddingHorizontal: 10
	},
	sesionStyle: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

	},
	logoStyle: {
		width: 150,
        height: 150,
	},
	footerStyle: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 15,
		marginBottom: 36,
		flexDirection: "row"
	},
	textStyle: {
		color: "#fff",
	},
	lineStyle: {
		color: "#fff",
		fontSize: 30
	},
	buttonStyle: {
		backgroundColor: "#fff",
		borderRadius: 30,
		width: 50,
		height: 50
	},
	inputStyle: {
  		borderBottomWidth: 4,
		borderTopWidth: 4,
		borderLeftWidth: 4,
		borderRightWidth: 4,
		padding: 4,
		color: '#fff',
		marginBottom: 0,
		borderColor: '#fff',
		margin: 10,
		borderRadius: 10
  	},
  	textStyle: {
  		fontSize: 16,
  		color: '#fff',
  	},
  	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
});
const mapStateProps = (state) => {
	return {
		nombreUser: state.auth.nombreUser,
		email: state.auth.email,
		password: state.auth.password,
		confirmPassword: state.auth.confirmPassword,
		error: state.auth.error
	};
}


export default connect(mapStateProps, { 
	registerUser, nameChanged, passwordChanged, emailChanged, confirmChanged
})(SignupScreen);