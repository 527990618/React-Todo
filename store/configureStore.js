import { createStore } from 'redux'
import rootReducer from '../reducers'
// import rootReducer from '../reducers/index.js'


export default function configureStore(initialState) {
	//rootReducer   initialState
	const store = createStore(rootReducer, initialState);

	return store;
}