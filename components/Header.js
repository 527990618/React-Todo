import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
	handleOnSave(text) {
		if(text.length !== 0){
			this.props.addTodo(text)
		}
	}

	render() {
		return (
			<header className="header">
				<h1>todos</h1>
				<TodoTextInput newTodo
							   onSave={this.handleOnsave.bind(this)} 
							   placeholder="what needs to be done?" />
			</header>
		)
	}
}

Header.propTypes={
	addTodo: PropTypes.func.isRequired
}

export default Header