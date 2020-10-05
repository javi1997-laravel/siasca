import _ from 'lodash';
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux'; 
import Feather from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import siascaApi from '../api/siasca';
import { productFetch } from '../action/actionProduct';
import ItemList from '../components/ItemList';
import ModalCreate from '../components/ModalCreate';
 
class ProductListScreen extends Component {

	state = {
		showModal: false,
		BackDropPress: false	
	}

	componentDidMount() {
		const { navigation } = this.props;

		this.focusListener = navigation.addListener('Focus', () => {
			console.log(this.props.productos)
		});
		this.props.productFetch();
	}
 
	componentWillUnmount() {
		this.focusListener();
	}

	renderProduct() {
		const { navigate } = this.props.navigation;

		return this.props.productos.map(product => 
			<ItemList product={product} key={product._id} navigate={navigate}/>
		);	
	}

	onSearchChange(text) {
		console.log(text);
	}

	onAccept() {
		this.setState({ showModal: false })
	}

	onDecline() {
		this.props.navigation.reset({
			routes: [{ name: 'productList' }]
		});
		this.setState({ showModal: false })
		
	}

	render() {
		const { inputStyle } = styles;

		const { navigate } = this.props.navigation;
 
		return (

			<View>
				<ModalCreate 
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
					onBackDropPress={this.state.BackDropPress}
					navigate={navigate}
				/>

				<Header title="PRODUCTOS"/>

				<View >
					<Input 
						inputContainerStyle={inputStyle}
						leftIcon={
							<Feather
					    		name='search'
					   			size={30}
					    		color='#fff'
					    	/>
						}
						leftIconContainerStyle={{ marginLeft: 10}}
						onChangeText={this.onSearchChange.bind(this)}
					/>
					<ScrollView style={styles.scrollContainer}>
						{this.renderProduct()}
					</ScrollView>
				</View>
				<TouchableOpacity
		          activeOpacity={0.7}
		          style={styles.TouchableOpacityStyle}
		          onPress={() => this.setState({ showModal: !this.state.showModal, BackDropPress: !this.state.on })}
		        >
		        	<Feather 
		        		name='plus'
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
	inputStyle: {
		backgroundColor: '#eaeaea',
		marginTop: 10,
		margin: 20,
		borderRadius: 10,
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
  	scrollContainer:{
  		width: '100%', 
  	}

});

mapStateProps = (state) => {
	const productos = _.map(state.product);


	return { productos };
}


export default connect(mapStateProps, { productFetch })(ProductListScreen); 