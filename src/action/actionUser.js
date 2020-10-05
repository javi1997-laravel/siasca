import { AsyncStorage } from 'react-native';
import siascaApi from '../api/siasca';
import { 
	USER_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_FAIL,
	LOGIN_USER_SUCCESS,
	LOGIN_USER,
	CONFIRM_PASSWORD,
	REGISTER_USER_FAIL,
	REGISTER_USER_SUCCESS,
	FETCH_USERS,
	ACTUALIZACION_USER_CORRECT,
	ACTUALIZACION_USER_FAIL,
	DELETE_USER_SUCCESS,
	DELETE_USER_FAIL,
	USER_UPDATE
} from './types';

export const userUpdate = ({ prop, value }) => {
	return {
		type: USER_UPDATE,
		payload: { prop, value }
	}
};

export const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

export const nameChanged = (text) => {
	return {
		type: USER_CHANGED,
		payload: text
	};
};

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const confirmChanged = (text) => {
	return {
		type: CONFIRM_PASSWORD,
		payload: text
	};
};

export const loginUser = ({ nombreUser, password, navigate }) => {
	return async (dispatch) => {
		try{
			const response = await siascaApi.post("/signin", { nombreUser, password });

			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: response.data.token
			})

			navigate('MyDrawer');
		} catch (err) {
			dispatch({
				type: REGISTER_USER_FAIL,
				payload: "Error al iniciar sesión"
			})
		}
	};
};

export const registerUser = ({ nombreUser, email, password, confirmPassword, navigate }) => {
	return async (dispatch) => {
		if (password !== confirmPassword) {
			return dispatch({ 
				type: REGISTER_USER_FAIL, 
				payload: 'Error al registrar usuario' 
			});
		} else {
			try {
				const response = await siascaApi.post("/signup", {nombreUser, email, password });

				dispatch({
					type: REGISTER_USER_SUCCESS,
					payload: response.data.token
				});
				navigate('MyDrawer');

			} catch (err) {
				dispatch({ 
					type: REGISTER_USER_FAIL, 
					payload: 'Error al registrar usuario'
				});
			}
		}
	}
};

export const userFetch = () => {
	return async (dispatch) => {
		const response = await siascaApi.get('/user');

		dispatch({ type: FETCH_USERS, payload: response.data })
	};
};

export const saveUser = ({ email, _id, navigate }) => {
	return async (dispatch) => {
		try { 
			const response = await siascaApi.put(`user/${_id}`, { email });

			console.log(response);
			dispatch({
				type: ACTUALIZACION_USER_CORRECT
			});

			navigate('userList');

		} catch (err) {
			dispatch({
				type: ACTUALIZACION_USER_FAIL,
				payload: 'Error al actualizar el cliente'
			});
		}
	}
};

export const deleteUser = ({ _id, navigate }) => {
	return async (dispatch) => {
		try {
			const response = await siascaApi.delete(`user/${_id}`);

			dispatch({
				type: DELETE_USER_SUCCESS
			});

			navigate('userList');

		} catch (err) {
			dispatch({
				type: DELETE_USER_FAIL,
				payload: 'Error al eliminar'
			})
		}
	}
};

