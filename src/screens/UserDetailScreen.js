import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { saveUser, userUpdate, deleteUser } from '../action/actionUser';
import { Input, Button, Overlay } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/AntDesign';
import CardSection from '../components/CardSection';


class UserDetailScreen extends Component {

	async componentDidMount() {
		await _.each(this.props.route.params.user, (value, prop) =>{
			this.props.userUpdate({ prop, value });
		});
	}

	onActualizarPress() {
		const { email } = this.props;
		const { navigation } = this.props;

		this.props.saveUser({ email, _id: this.props.route.params.user._id, navigation });
	}

	onDeletePress() {
		const { _id } = this.props.route.params.user;
		const { navigation } = this.props

		this.props.deleteUser({ _id, navigation });
	}


	render() {
		const { navigate } = this.props.navigation;
		console.log(this.props.route.params);
		return (
			<View style={ styles.createStyle }>
					<Text style={styles.titleStyle}>Actualizar Usuario</Text>
					<Text style={{ color: 'red', textAlign: 'center', marginBottom: 15 }}>_____________________</Text>
					<TextInput
						editable={false} 
						selectTextOnFocus={false}
						style={styles.inputStyle}
						value={this.props.nombreUser}
						onChangeText={text => this.props.userUpdate({ prop: 'nombreUser', value: text })}
					/>
					<TextInput
						disabled
						style={styles.inputStyle}
						value={this.props.email}
						onChangeText={text => this.props.userUpdate({ prop: 'email', value: text })}
					/>
					<Button 
						title='Eliminar'
						buttonStyle={styles.buttonStyle}
						onPress={this.onDeletePress.bind(this)}
					/>
					<Button 
						title="Actualizar"
						buttonStyle={styles.buttonStyleArrow}
						onPress={this.onActualizarPress.bind(this)}
					/>

					<TouchableOpacity
			          activeOpacity={0.7}
			          style={styles.TouchableOpacityStyle}
			          onPress={() => {
			          	navigate('userList');
			          }}
			        >
			        	<Feather 
			        		name='x'
			        		size={40}
			        		color="white"
			        		style={{ backgroundColor: '#ad2926', borderRadius: 20 }}
			        	/>
			        </TouchableOpacity>

				</View>
		);
	}
}

const styles = StyleSheet.create({
	createStyle: {
		flex: 1,
		justifyContent: 'center',
	},
	titleStyle: {
		textAlign: 'center',
		fontSize: 20
	},
  	tareaStyle: {
		fontSize: 20,
  		borderBottomWidth: 4,
		borderTopWidth: 4,
		borderLeftWidth: 4,
		borderRightWidth: 4,
		borderRadius: 10,
		padding: 10,
		marginBottom: 15,
		borderColor: '#74787c',
		margin: 15
  	},
  	inputStyle: {
  		fontSize: 20,
  		borderBottomWidth: 4,
		borderTopWidth: 4,
		borderLeftWidth: 4,
		borderRightWidth: 4,
		borderRadius: 10,
		padding: 10,
		marginBottom: 15,
		borderColor: '#74787c',
		margin: 15
  		
  	},
  	buttonStyle: {
  		backgroundColor: '#74787c',
  		margin: 15
  	},
  	buttonStyleArrow: {
  		backgroundColor: '#ad2926',
  		margin: 15
  	},
  	TouchableOpacityStyle: {
	    position: 'absolute',
	    width: 50,
	    height: 50,
	    alignItems: 'center',
	    justifyContent: 'center',
	    right: 30,
	    top: 630,
  	},
});

const mapStateProps = (state) => {
	console.log(state);
	const { nombreUser, email } = state.user;

	return { nombreUser, email };
};


export default connect(mapStateProps, { userUpdate, saveUser, deleteUser })(UserDetailScreen);
