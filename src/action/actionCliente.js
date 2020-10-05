import {
	REGISTER_CLIENTE_SUCCESS,
	REGISTER_CLIENTE_FAIL,
	FETCH_CLIENTES,
	CLIENTE_UPDATE,
	ACTUALIZACION_CLIENTE_CORRECT,
	ACTUALIZACION_CLIENTE_FAIL,
	DELETE_CLIENTE_SUCCESS,
	DELETE_CLIENTE_FAIL,
	CLIENTE_UPDATE_CREATE
} from './types';
import siascaApi from '../api/siasca';

export const clienteFetch = () => {
	return async (dispatch) => {
		const response = await siascaApi.get('/clientes');

		dispatch({ type: FETCH_CLIENTES, payload: response.data })
	};
};

export const clienteUpdate = ({ prop, value }) => {
	return {
		type: CLIENTE_UPDATE,
		payload: { prop, value }
	}
};

export const soloCierra = () => {
	return {
		type: CIERRA,
	}
};

export const registerCliente = ({ nombreCliente, apellido, direccion, identificacion, onDecline }) => {
	return async (dispatch) => {
		try {
			const response = await siascaApi.post("/clientes", {nombreCliente, apellido, direccion, identificacion});

			dispatch({
				type: REGISTER_CLIENTE_SUCCESS
			});

			onDecline();
		} catch (err) {
			dispatch({
				type: REGISTER_CLIENTE_FAIL,
				payload: 'Error al registrar el cliente'
			});
			
		}
	}
};

export const saveCliente = ({ nombreCliente, apellido, direccion, identificacion, _id, navigation }) => {
	return async (dispatch) => {
		try { 
			const response = await siascaApi.put(`clientes/${_id}`, { nombreCliente, apellido, direccion, identificacion });

			console.log(response);
			dispatch({
				type: ACTUALIZACION_CLIENTE_CORRECT
			});

			//navigate('clienteList')
			navigation.reset({
				routes: [{ name: 'clienteList' }]
			});

		} catch (err) {
			dispatch({
				type: ACTUALIZACION_CLIENTE_FAIL,
				payload: 'Error al actualizar el cliente'
			});
		}
	}
};

export const deleteCliente = ({ _id, navigation }) => {
	return async (dispatch) => {
		try {
			const response = await siascaApi.delete(`clientes/${_id}`);

			dispatch({
				type: DELETE_CLIENTE_SUCCESS
			});

			navigation.reset({
				routes: [{ name: 'clienteList' }]
			});

		} catch (err) {
			dispatch({
				type: DELETE_CLIENTE_FAIL,
				payload: 'Error al eliminar'
			})
		}
	}
};