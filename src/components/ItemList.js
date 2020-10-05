import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import { Actions } from 'react-native-router-flux';

class ItemList extends Component {
	onRowPress() {
		this.props.navigate('productDetail',{ product: this.props.product, idProduct: this.props.id });
	}

	render() {
 
		const { cantidad, descripcion, nombreProducto } = this.props.product;
		return (
			<TouchableOpacity onPress={this.onRowPress.bind(this)}>
				<Card>
					<CardSection>
						<View style={styles.boxStyle}/>
						<Text style={styles.textStyle}>
							{nombreProducto}
						</Text>
						<View style={styles.circleStyle}>
							<Text style={styles.textStyle}>{cantidad}</Text>
						</View>
					</CardSection>
					<Text style={{ marginLeft: 15 }}>{descripcion}</Text>
				</Card>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	boxStyle: {
		backgroundColor: '#ad2926',
		width: 30,
		height: 29,
		marginTop: 0,
		marginLeft: 15
	},
	textStyle:{
		fontSize: 20
	},
	circleStyle: {
		backgroundColor: '#ad2926',
		marginRight: 15,
		borderRadius: 20,
		width: 30,
		height: 30,
		alignItems: 'center',
	},
});

export default ItemList;