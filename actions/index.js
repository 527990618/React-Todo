import * as types from "../comstants/ActionType.js"

export function addTodo(text){
	return { type: types.ADD_TODO, text }
}

export function deleteTodo(id){
	return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text){
	return { type: types.ADD_TODO, id, text }
}

export function completeTodo(id){
	return { type: types.COMPELTE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}