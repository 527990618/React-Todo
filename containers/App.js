import React,{ Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

class App extends Component{
	render(){
		const { todos, actions } = this.props;
		<div>
			<Header addTodo={actions.addTodo} />
			<MainSection todos={todos} actions={actions} />
		</div>
	}
}

App.propTypes = {
	todos: PropTypes.array.isRequired;
	actions: PropTypes.object.isRequired;
}

function mapStateToProps(state) {
	return {
		todos: state.todos	
	};
}

function mapDispatchToProps(dispatch){
	return {
		//这个创建之后的对象将拥有所有发起请求的方法，例如，添加一个todo；就直接食用actions.addTodo
		actions: bindActionCreators(TodoActions, dispatch);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)