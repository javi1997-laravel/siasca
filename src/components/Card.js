import React from 'react';
import { View} from 'react-native';

const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
}

const styles = {
	containerStyle: {
		height: 90,
		borderWidth: 0,
		borderRadius: 2,
		borderLeftColor: '#ad2926',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { with: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10,
		borderLeftWidth: 5,
	}
};

export default Card;