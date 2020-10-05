import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { saveCliente, clienteUpdate, deleteCliente } from '../action/actionCliente';
import { Input, Button, Overlay } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import CardSection from '../components/CardSection';
 
class ClienteDetailScreen extends Component {

	async componentDidMount() {
		await _.each(this.props.route.params.cliente, (value, prop) =>{
			this.props.clienteUpdate({ prop, value });
		});
	}

	onActualizarPress() {
		const { nombreCliente, apellido, direccion, identificacion } = this.props;
		const { navigate } = this.props.navigation;
		const { navigation } = this.props;

		this.props.saveCliente({ nombreCliente, apellido, direccion, identificacion, _id: this.props.route.params.cliente._id, navigation })
	}

	onDeletePress() {
		const { _id } = this.props.route.params.cliente
		const { navigation } = this.props;

		this.props.deleteCliente({ _id, navigation });
	}

	render() {

		const { navigate } = this.props.navigation;
		return (
			<View style={ styles.createStyle }>
					<Text style={styles.titleStyle}>Actualizar Cliente</Text>
					<Text style={{ color: 'red', textAlign: 'center', marginBottom: 15 }}>_____________________</Text>
					<TextInput 
						placeholder='Nombre' 
						style={styles.inputStyle}
						value={this.props.nombreCliente}
						onChangeText={text => this.props.clienteUpdate({ prop: 'nombreCliente', value: text })}
					/>
					<TextInput 
						placeholder='Apellido'
						style={styles.inputStyle}
						value={String(this.props.apellido)}
						onChangeText={text => this.props.clienteUpdate({ prop: 'apellido', value: text})}
					/>
					<TextInput 
						placeholder='Direccion'
						style={styles.inputStyle}
						value={String(this.props.direccion)}
						onChangeText={text => this.props.clienteUpdate({ prop: 'direccion', value: text})}
					/>
					<TextInput
						placeholder='Identificacion'
						style={styles.tareaStyle}
						value={this.props.identificacion}
						onChangeText={text => this.props.clienteUpdate({ prop: 'identificacion', value: text })}
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
			          onPress={() => navigate('clienteList')}
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
	    top: 700,
  	},
});

const mapStateProps = (state) => {
	const { nombreCliente, apellido, direccion, identificacion } = state.cliente;

	return { nombreCliente, apellido, direccion, identificacion };
};


export default connect(mapStateProps, { clienteUpdate, saveCliente, deleteCliente })(ClienteDetailScreen);
