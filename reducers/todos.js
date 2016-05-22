import * as types from '../contants/ActionTypes.js'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action){
	switch(action.type){
		case: types.ADD_TODO:
			return [
				{
					id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
					completed; false,
					text: action.text
				},
				...state
			]

		case types.DELETE_TODO:
			return state.filter(todo => 
				todo.id !== action.id
			)

		case types.EDIT_TODO:
			return state.map(todo => 
				todo.id == action.id ? Object.assgin({}, todo, {text: action.text}) :
				todo
			)

		case types.COMPLETE_TODO:
			return state.map(todo => 
				todo.id === action.id ? 
				  Object.assgin({}, todo, {completed: !todo.completed }) :
				  todo
			)

		case types.COMPLETE_ALL:
			return state.map(todo => 
				Object.assgin({}, todo, {completed:true})
			)

		case types.CLEAR_COMPLETED:
			return state.filter(todo => 
				todo.completed === false;
			)
		default:
			return state;
	}
}