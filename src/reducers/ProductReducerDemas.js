import {
	REGISTER_PRODUCT_SUCCESS,
	REGISTER_PRODUCT_FAIL,
	PRODUCT_UPDATE,
	ACTUALIZACION_PRODUCT_CORRECT,
	ACTUALIZACION_PRODUCT_FAIL,
	DELETE_PRODUCT_SUCCESS,
	DELETE_PRODUCT_FAIL,
	PRODUCT_UPDATE_CREATE
} from '../action/types';

const INITIAL_STATE = {
	nombreProducto: '', 
	cantidad: 0, 
	descripcion: '',
	error: ''
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER_PRODUCT_SUCCESS:
			return INITIAL_STATE;
		case REGISTER_PRODUCT_FAIL:
			return { ...state, error: action.payload };
		case PRODUCT_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case PRODUCT_UPDATE_CREATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case ACTUALIZACION_PRODUCT_FAIL:
			return { ...state, error: action.payload };
		case ACTUALIZACION_PRODUCT_CORRECT:
			return INITIAL_STATE;
		case DELETE_PRODUCT_SUCCESS:
			return INITIAL_STATE;
		case DELETE_PRODUCT_FAIL:
			return { ...state, error: action.payload };	
		default:
			return state;	
	}
};