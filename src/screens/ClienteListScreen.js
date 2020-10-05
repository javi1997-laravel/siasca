import _ from 'lodash'; 
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import siascaApi from '../api/siasca';
import { clienteFetch } from '../action/actionCliente';
import ItemCliente from '../components/ItemCliente';
import ModalCliente from '../components/ModalCliente';


class ClienteListScreen extends Component {
	state = {
		showModal: false,
		BackDropPress: false
	}

	componentDidMount() {
		this.props.clienteFetch();
	}

	renderCliente() {
		const { navigate } = this.props.navigation;

		return this.props.clientes.map(cliente => 
			<ItemCliente cliente={cliente} key={cliente._id} navigate={navigate}/>
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
			routes: [{ name: 'clienteList' }]
		});
		this.setState({ showModal: false })
	}

	render() {
		const { inputStyle } = styles;

		const { navigate } = this.props.navigation;
		return (
			<View>
				<ModalCliente 
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
					onBackDropPress={this.state.BackDropPress}
					navigate={navigate}
				/>

				<Header title="CLIENTES"/>

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
					<ScrollView>
						{this.renderCliente()}
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

});

mapStateProps = (state) => {
	const clientes = _.map(state.clientes);


	return { clientes };
}


export default connect(mapStateProps, { clienteFetch })(ClienteListScreen); 