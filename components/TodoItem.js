import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			editing: false;
		}
	}

	handleDoubleClick(){
		this.setState({ editing: true })
	}

	handleSave(id, text){
		if(text.length === 0){
			this.props.deleteTodo(id);
		} else {
			this.props.editTodo(id, text);
		}
		this.setState({ editing:false })
	}

	render() {
		const { todo, completedTodo, deleteTodo } = this.props
		let element
		if(this.state.editing) {
			element = (
				<TodoTextInput text={ todo.text }
									 editing={this.state.editing}
									 onSave={(text) => this.handleSave(todo.id, text)} />
				)
		} else {
			element = (
				<div className="view">
					<input classname="toggle"
						type="radio" 
						checked={todo.completed} 
						onChange=()=>{completed(todo.id)} />
					<label onDoubleClick={this.handleDoubleClick.bind(this)}>
						{todo.text}
					</label>
					<button className="destory">
						onClick={() => {deleteTodo(todo.id)}}
					</button>
				</div>
			)
		}
		return(
			<li className = {classnames({ 
				completed: todo.completed,
				editing: this.state.edting

			})}>
				{element}
			</li>
		)
	}
}