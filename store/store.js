import {createStore,combineReducers} from 'redux';
import CountReducer from '../reducers/CountReducer';
import ProductReducer from '../reducers/ProductReducer';
import Todoreducer from '../reducers/Todoreducer';
import CartReducer from '../reducers/CartReducer';
import MemberReducer from '../reducers/MemberReducer';

let rootReducer = combineReducers({member: MemberReducer, count: CountReducer, products:ProductReducer,cart: CartReducer, todo: Todoreducer});
const store = createStore(rootReducer);
export default store;