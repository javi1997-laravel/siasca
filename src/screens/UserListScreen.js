import _ from 'lodash'; 
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import siascaApi from '../api/siasca';
import { userFetch } from '../action/actionUser';
import ItemUsers from '../components/ItemUsers';


class UserListScreen extends Component {

	componentDidMount() {
		this.props.userFetch();
	}

	renderUser() {
		const { navigate } = this.props.navigation;

		return this.props.users.map(user => 
			<ItemUsers user={user} key={user._id} navigate={navigate}/>
		);	
	}

	onSearchChange(text) {
		console.log(text);
	}

	render() {
		const { inputStyle } = styles;

		const { navigate } = this.props.navigation;

		return (
			<View>
				<Header title="USUARIOS"/>

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
						{this.renderUser()}
					</ScrollView>
				</View>

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
	    top: 700,
  	},

});

mapStateProps = (state) => {
	const users = _.map(state.users);

	return { users };
}


export default connect(mapStateProps, { userFetch })(UserListScreen); 