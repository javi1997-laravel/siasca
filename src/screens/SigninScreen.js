import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { nameChanged, passwordChanged, loginUser } from '../action/actionUser';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import { Text, Input, Button } from 'react-native-elements';


class SigninScreen extends Component {

	onNameChange(text) {
		this.props.nameChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text)
	}

	onButtonPress() {
		const { nombreUser, password } = this.props;

		const { navigate } = this.props.navigation;

		this.props.loginUser({ nombreUser, password, navigate });
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
					<Text style={textStyle} h3>Inicio de sesión</Text>
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
						placeholder='****************'
						leftIcon={
							<Icon
						      name='unlock'
						      size={24}
						      color='#fff' 
						    />
						}
						onChangeText={this.onPasswordChange.bind(this)}
						secureTextEntry
						inputContainerStyle = {inputStyle}
						inputStyle = {textoStyle}
					/>
					<Button
					  title="Inicio"
					  buttonStyle={buttonStyle}
					  titleStyle={{ color: "#ad2926" }}
					  onPress={this.onButtonPress.bind(this)}
					/>					

				</View>
				<TouchableOpacity style={footerStyle} onPress={() => navigate('register')}>
					<Text style={textStyle}>¿No tienes cuenta?</Text>
					<Text style={textStyle}> Registrate</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		backgroundColor: "#74787c",
		paddingHorizontal: 10,

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
		marginBottom: 36,
		flexDirection: "row"
	},
	textStyle: {
		color: "#fff",
		fontSize: 16
	},
	lineStyle: {
		color: "#fff",
		fontSize: 30
	},
	buttonStyle: {
		backgroundColor: "#fff",
		padding: 10,
		alignItems: "center",
		paddingHorizontal: 30
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
  	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
});

const mapStateProps = (state) => {
	return {
		nombreUser: state.auth.nombreUser,
		password: state.auth.password,
		error: state.auth.error
	};
}



export default connect(mapStateProps, { 
	loginUser, nameChanged, passwordChanged 
})(SigninScreen);