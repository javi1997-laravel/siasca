import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import ProductReducer from './ProductReducer';
import ProductReducerDemas from './ProductReducerDemas';
import ClienteReducer from './ClienteReducer';
import ClienteFormReducer from './ClienteReducerForm';
import UserLReducer from './UserLReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
	auth: AuthReducer,
	user: UserReducer,
	users: UserLReducer,
	product: ProductReducer,
	producto: ProductReducerDemas,
	clientes: ClienteReducer,
	cliente: ClienteFormReducer
});