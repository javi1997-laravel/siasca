import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { saveProduct, employeeUpdate, deleteProduct, soloCierra } from '../action/actionProduct';
import { Input, Button, Overlay } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/Feather';
import CardSection from '../components/CardSection';


class ProductDetailScreen extends Component {
	
	async componentDidMount() {
		await _.each(this.props.route.params.product, (value, prop) =>{
			this.props.employeeUpdate({ prop, value });
		});
	}

	onActualizarPress() {
		const { nombreProducto, cantidad, descripcion } = this.props;
		const { navigate } = this.props.navigation;
		const { navigation } = this.props;
		this.props.saveProduct({ nombreProducto, cantidad, descripcion, _id: this.props.route.params.product._id, navigate, navigation })
	}

	onDeletePress() {
		const { _id } = this.props.route.params.product
		const { navigate } = this.props.navigation
		const { navigation } = this.props;

		this.props.deleteProduct({ _id, navigation });
	}

	render() {

		const { navigate } = this.props.navigation;
		//console.log(this.props);
		return (
			<View style={ styles.createStyle }>
					<Text style={styles.titleStyle}>Actualizar producto</Text>
					<Text style={{ color: 'red', textAlign: 'center', marginBottom: 15 }}>_____________________</Text>
					<TextInput 
						placeholder='Nombre' 
						style={styles.inputStyle}
						value={this.props.nombreProducto}
						onChangeText={text => this.props.employeeUpdate({ prop: 'nombreProducto', value: text })}
					/>
					<TextInput 
						placeholder='Cantidad'
						keyboardType = 'numeric'
						style={styles.inputStyle}
						value={String(this.props.cantidad)}
						onChangeText={text => this.props.employeeUpdate({ prop: 'cantidad', value: text})}
					/>
					<TextInput
						placeholder='Descripción'
						multiline
						numberOfLines={4}
						style={styles.tareaStyle}
						value={this.props.descripcion}
						onChangeText={text => this.props.employeeUpdate({ prop: 'descripcion', value: text })}
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
			          onPress={() => navigate('productList')}
			        >
			        	<EvilIcons 
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
	const { nombreProducto, cantidad, descripcion } = state.producto;

	return { nombreProducto, cantidad, descripcion };
};


export default connect(mapStateProps, { employeeUpdate, saveProduct, deleteProduct, soloCierra })(ProductDetailScreen);