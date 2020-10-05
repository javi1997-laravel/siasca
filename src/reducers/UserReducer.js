import { 
	USER_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	ACTUALIZACION_USER_CORRECT,
	ACTUALIZACION_USER_FAIL,
	DELETE_USER_SUCCESS,
	DELETE_USER_FAIL,
	USER_UPDATE
} from '../action/types';
import siascaApi from '../action/actionUser';

const INITIAL_STATE = {
	nombreUser: '',
	password: '',
	email: '',
	error: '',
	confirmPassword: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case ACTUALIZACION_USER_CORRECT:
			return INITIAL_STATE;
		case ACTUALIZACION_USER_FAIL:
			return { ...state, error: action.payload };
		case DELETE_USER_SUCCESS:
			return INITIAL_STATE;
		case DELETE_USER_FAIL:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};