import {
	FETCH_PRODUCTS,
	
} from '../action/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return action.payload;
		default:
			return state;
	}
}