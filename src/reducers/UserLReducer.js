import {
	FETCH_USERS,
} from '../action/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return action.payload;
		default:
			return state;
	}
}