import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { registerCliente, clienteUpdate, soloCierra } from '../action/actionCliente';
import { Input, Button, Overlay } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CardSection from './CardSection';


class ModalCliente extends Component {

	onButtonProduct() {
		const { nombreCliente, apellido, direccion, identificacion } = this.props;
		const { onDecline } = this.props;
		this.props.registerCliente({ nombreCliente, apellido, direccion, identificacion, onDecline });
	}

	render () {

		const { visible, onAccept, onDecline, onBackDropPress } = this.props;

		return (
		<Overlay isVisible={visible} onBackDropPress={onBackDropPress}>
			<View style={styles.containerStyle}>
				<View style={ styles.createStyle }>
					<Text style={styles.titleStyle}>Crear cliente</Text>
					<Text style={{ color: 'red', textAlign: 'center', marginBottom: 15 }}>_____________________</Text>
					<TextInput 
						placeholder='Nombre' 
						style={styles.inputStyle}
						onChangeText={text => this.props.clienteUpdate({ prop: 'nombreCliente', value: text })}
					/>
					<TextInput 
						placeholder='Apellido'
						style={styles.inputStyle}
						onChangeText={text => this.props.clienteUpdate({ prop: 'apellido', value: text })}
					/>
					<TextInput
						placeholder='Direccion'
						style={styles.inputStyle}
						onChangeText={text => this.props.clienteUpdate({ prop: 'direccion', value: text })}
					/>
					<TextInput
						placeholder='Identificación'
						style={styles.inputStyle}
						onChangeText={text => this.props.clienteUpdate({ prop: 'identificacion', value: text })}
					/>
					<Button 
						icon={
							<AntDesign 
								name='arrowright'
								size={25}
								color='white'
							/>
						}
						buttonStyle={styles.buttonStyleArrow}
						onPress={this.onButtonProduct.bind(this)}
					/>

				</View>
			

			<TouchableOpacity
		          activeOpacity={0.7}
		          style={styles.TouchableOpacityStyle}
		          onPress={onDecline}
		        >
		        	<EvilIcons 
		        		name='close'
		        		size={40}
		        		color="black"
		        	/>
		        </TouchableOpacity>
		    </View>
		</Overlay>
	);		
	}
}


const styles = StyleSheet.create({
	containerStyle: {
		height: 500,
		width: 300,
	},
	createStyle: {
		flex: 1,
		paddingHorizontal: 10,
		marginTop: 40
	},
	titleStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	TouchableOpacityStyle: {
	    position: 'absolute',
	    width: 50,
	    height: 50,
	    alignItems: 'center',
	    justifyContent: 'center',
	    right: 10,
  	},
  	tareaStyle: {
		textAlignVertical: 'top',
		fontSize: 20,
		borderBottomWidth: 4,
		borderTopWidth: 4,
		borderLeftWidth: 4,
		borderRightWidth: 4,
		borderRadius: 10,
		padding: 10,
		marginBottom: 15,
		borderColor: '#74787c'
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
		borderColor: '#74787c'
  	},
  	buttonStyle: {
  		backgroundColor: '#74787c',
  		width: 110,
  		marginLeft: 15
  	},
  	buttonStyleArrow: {
  		backgroundColor: '#ad2926',
  		width: 50,
  		borderRadius: 20,
  		marginLeft: 220
  	}
});

const mapStateProps = (state) => {
	const { nombreCliente, apellido, direccion, identificacion, error } = state.cliente;

	return {
		nombreCliente,
		apellido,
		direccion,
		identificacion,
		error
	};
};

export default connect(mapStateProps, { registerCliente, clienteUpdate, soloCierra })(ModalCliente);
