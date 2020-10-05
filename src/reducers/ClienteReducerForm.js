import {
	REGISTER_CLIENTE_SUCCESS,
	REGISTER_CLIENTE_FAIL,
	CLIENTE_UPDATE,
	ACTUALIZACION_CLIENTE_CORRECT,
	ACTUALIZACION_CLIENTE_FAIL,
	DELETE_CLIENTE_SUCCESS,
	DELETE_CLIENTE_FAIL,
	CIERRA
} from '../action/types';

const INITIAL_STATE = {
	nombreCliente: '', 
	apellido: '', 
	direccion: '',
	identificacion: '',
	error: ''
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER_CLIENTE_SUCCESS:
			return INITIAL_STATE;
		case REGISTER_CLIENTE_FAIL:
			return { ...state, error: action.payload };
		case CLIENTE_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case CIERRA:
			return INITIAL_STATE;
		case ACTUALIZACION_CLIENTE_FAIL:
			return { ...state, error: action.payload };
		case ACTUALIZACION_CLIENTE_CORRECT:
			return INITIAL_STATE;
		case DELETE_CLIENTE_SUCCESS:
			return INITIAL_STATE;
		case DELETE_CLIENTE_FAIL:
			return { ...state, error: action.payload };	
		default:
			return state;	
	}
};