import {
	FETCH_CLIENTES,
} from '../action/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_CLIENTES:
			return action.payload;
		default:
			return state;
	}
}