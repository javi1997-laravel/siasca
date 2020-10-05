import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { registerProduct, employeeUpdate, soloCierra } from '../action/actionProduct';
import { Input, Button, Overlay } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CardSection from './CardSection';


class ModalCreate extends Component {

	onButtonProduct() {
		const { nombreProducto, cantidad, descripcion } = this.props;
		const { navigation } = this.props;
		const { onDecline } = this.props;
		this.props.registerProduct({ nombreProducto, cantidad, descripcion, navigation, onDecline });


	}

	render () {
		const { visible, onAccept, onDecline, onBackDropPress } = this.props;

		return (
		<Overlay isVisible={visible} onBackDropPress={onBackDropPress}>
			<View style={styles.containerStyle}>
				<View style={ styles.createStyle }>
					<Text style={styles.titleStyle}>Crear producto</Text>
					<Text style={{ color: 'red', textAlign: 'center', marginBottom: 15 }}>_____________________</Text>
					<TextInput 
						placeholder='Nombre' 
						style={styles.inputStyle}
						onChangeText={text => this.props.employeeUpdate({ prop: 'nombreProducto', value: text })}
					/>
					<TextInput 
						placeholder='Cantidad'
						keyboardType = 'numeric'
						style={styles.inputStyle}
						onChangeText={text => this.props.employeeUpdate({ prop: 'cantidad', value: text })}
					/>
					<TextInput
						placeholder='Descripción'
						multiline
						numberOfLines={4}
						style={styles.tareaStyle}
						onChangeText={text => this.props.employeeUpdate({ prop: 'descripcion', value: text })}
					/>
					<Button 
						title='Seleccionar'
						buttonStyle={styles.buttonStyle}
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
  	},
  	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
});

const mapStateProps = (state) => {
	const { nombreProducto, cantidad, descripcion, error } = state.producto;

	return {
		nombreProducto,
		cantidad,
		descripcion,
		error
	};
};

export default connect(mapStateProps, { registerProduct, employeeUpdate })(ModalCreate);
