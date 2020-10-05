import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ toggle, title }) => {
	return (
		<View style={styles.constainerStyle}>

			<TouchableWithoutFeedback onPress={toggle}>
				<Icon
					name="menu"
					size={40}
					color="white"
					backgroundColor="#1c1d1f"
				/>
			</TouchableWithoutFeedback>
			<Text style={styles.titleStyle}>
				{title}
			</Text>
				<Icon
					name="menu"
					size={40}
					color="#74787c"
				/>
		</View>
	);
};

const styles = StyleSheet.create({
	constainerStyle: {
		flexDirection: 'row',
		height: 60,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#74787c'
	},
	titleStyle: {
		fontSize: 20,
		color: "white",
		fontWeight: 'bold',
	}
});

export default Header;


