import { 
	USER_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_FAIL,
	LOGIN_USER_SUCCESS,
	LOGIN_USER,
	CONFIRM_PASSWORD,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,L
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
		case USER_CHANGED:
			return { ...state, nombreUser: action.payload };
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload};
		case CONFIRM_PASSWORD:
			return { ...state, confirmPassword: action.payload};
		case LOGIN_USER_FAIL:
			return { ...state, error: action.payload };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, error: ''}; 
		case REGISTER_USER_SUCCESS:
			return INITIAL_STATE;
		case REGISTER_USER_FAIL:
			return { ...state, error: action.payload };
		case 'clear_error_message':
      		return { ...state, error: '' };
		default:
			return state;
	}
};