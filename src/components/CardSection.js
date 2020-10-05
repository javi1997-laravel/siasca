import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>	
	);
};
 
const styles = {
	containerStyle: {
		height: 60,
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#eaeaea',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderLeftColor: '#ad2926',
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10,
		borderLeftWidth: 5,
	}
};

export default CardSection;