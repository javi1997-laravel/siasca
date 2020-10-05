import {
	REGISTER_PRODUCT_SUCCESS,
	REGISTER_PRODUCT_FAIL,
	FETCH_PRODUCTS,
	PRODUCT_UPDATE,
	ACTUALIZACION_PRODUCT_CORRECT,
	ACTUALIZACION_PRODUCT_FAIL,
	DELETE_PRODUCT_SUCCESS,
	DELETE_PRODUCT_FAIL,
	PRODUCT_UPDATE_CREATE,
	CIERRA
} from './types';
import siascaApi from '../api/siasca';

export const productFetch = () => {
	return async (dispatch) => {
		const response = await siascaApi.get('/product');

		dispatch({ type: FETCH_PRODUCTS, payload: response.data })
	};
};

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: PRODUCT_UPDATE,
		payload: { prop, value }
	}
};

export const registerProduct = ({ nombreProducto, cantidad, descripcion, navigation, onDecline }) => {
	return async (dispatch) => {
		try {
			const response = await siascaApi.post("/product", {nombreProducto, cantidad, descripcion});

			dispatch({
				type: REGISTER_PRODUCT_SUCCESS
			});
			
			onDecline();


			//navigate('ProductList');
			//Actions.main({ type: 'reset' });
		} catch (err) {
			dispatch({
				type: REGISTER_PRODUCT_FAIL,
				payload: 'Error al registrar el producto'
			});
			
		}
	}
};

export const saveProduct = ({ nombreProducto, cantidad, descripcion, _id, navigate, navigation }) => {
	return async (dispatch) => {
		try { 
			const response = await siascaApi.put(`product/${_id}`, { nombreProducto, cantidad, descripcion });

			dispatch({
				type: ACTUALIZACION_PRODUCT_CORRECT
			});

			navigation.reset({
				routes: [{ name: 'productList' }]
			});
			

		} catch (err) {
			dispatch({
				type: ACTUALIZACION_PRODUCT_FAIL,
				payload: 'Error al actualizar el producto'
			});
		}
	}
};

export const deleteProduct = ({ _id, navigation }) => {
	return async (dispatch) => {
		try {
			const response = await siascaApi.delete(`product/${_id}`);

			dispatch({
				type: DELETE_PRODUCT_SUCCESS
			});

			navigation.reset({
				routes: [{ name: 'productList' }]
			});

		} catch (err) {
			dispatch({
				type: DELETE_PRODUCT_FAIL,
				payload: 'Error al eliminar'
			})
		}
	}
};