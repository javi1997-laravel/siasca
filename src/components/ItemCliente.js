import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Icon from 'react-native-vector-icons/Feather';

class ItemCliente extends Component {
	onRowPress() {
		this.props.navigate('clienteDetail',{ cliente: this.props.cliente, idCliente: this.props._id });
	}

	render() {
		console.log(this.props.cliente);

		const { nombreCliente, apellido, direccion, identificacion } = this.props.cliente;
		return (
			<TouchableOpacity onPress={this.onRowPress.bind(this)}>
					<View style={styles.containerStyle}>
						<View style={styles.containerStyle}>
							<Icon
								name="target"
								size={30}
								color='white'
								style={{textAlign:'center'}}
							/>
						</View>
						<View style={styles.contenedorTexto}>
							<Text style={styles.textStyle}>
								{nombreCliente} {apellido}
							</Text>
							<Text style={styles.textStyle}>{direccion}</Text>
						</View>
					</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		flexDirection: 'row',
		backgroundColor: '#eaeaea',
		justifyContent: 'flex-start',
		marginTop: 5,
		margin: 20,
		borderLeftColor: '#ad2926',
	},
	iconStyle: {
		backgroundColor: '#ad2926',
		width: 35,
		height: 35,
		marginTop: 5,
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 20,
	},
	textStyle:{
		fontSize: 20
	},
	contenedorTexto: {
		flexDirection: 'column',
	}

});

export default ItemCliente;