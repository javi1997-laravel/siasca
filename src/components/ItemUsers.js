import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Icon from 'react-native-vector-icons/Feather';

class ItemUsers extends Component {
	onRowPress() {
		this.props.navigate('userDetail', { user: this.props.user, idUser: this.props.id });
	}
 
	render() {

		const { nombreUser, email } = this.props.user;
		return (
			<TouchableOpacity onPress={this.onRowPress.bind(this)}>
					<CardSection>
						<View style={styles.boxStyle}>
							<Icon
								name="user"
								size={30}
								color="white"
								style={{textAlign:'center'}}
							/>
						</View>
						<View style={styles.contenedorTexto}>
							<Text style={styles.textStyle}>
								{nombreUser} 
							</Text>
							<Text style={styles.textStyle}>{email}</Text>
						</View>
						<View>
							<Text style={styles.textStyle}>02/10/2020</Text>
						</View>
					</CardSection>
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
	boxStyle: {
		backgroundColor: '#ad2926',
		width: 40,
		height: 40,
		marginTop: 0,
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 20
	},
	textStyle:{
		fontSize: 20
	},
	contenedorTexto: {
		flexDirection: 'column',
	}

});

export default ItemUsers;