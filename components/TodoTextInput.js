import React,{ component, Proptypes } from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			text: this.props.text || ''
		}
	}

	handleChange(e){
		this.setState({ text: e.target.value })
	}

	handleSubmit(e){
		const text = e.target.value.trim()
		if( e.which === 13 ){
			this.props.onSave(text);
			if(this.props.newTodo){
				this.setState( {text: ''} );
			}
		}
	}


	render(){
		<input className = {
			classnames({
				edit: this.props.editing,
				'new-todo': this.props.newTodo
			})}
			placeholder={this.props.placeholder}
			autoFocus="true"
			value={this.state.text}
			onChange={this.handleChange.bind(this)}
			onKeydown={this.handleKeydown.bind(this)}  />
	}
}

TodoTextInput.propTypes={
	onSave: Proptypes.func.isRequired,
	text: Proptypes.string,
	placeholder: Proptypes.string,
	editing: Proptypes.bool,
	newTodo: Protypes.bool
}


export default TodoTextInput