
const TODO_FILTERS = [
	[SHOW_ALL] : () => true,
	[SHOW_COMPLETED] : todo => !todo.completed,
	[SHOW_ACTIVE] : todo => todo.completed
]

class MainSection extends Component {
	constructor(props, context) {
		super(props, context);
		this.setState({ filter:SHOW_ALL })
	}

	handleClearCompleted(){
		this.props.actions.completeAll();
	}

	handleShow(filter){
		//setState后为什么就能过滤了？
		this.setState({ filter });
	}

	renderToggleAll(completedCount){
		const { todos, actions } = this.props
		if(todos.length > 0){
			return (
				<input className="toggle-all"
				   	   type="checkbox" 
				   	   checked={completedCount === todos.length}
				   	   onchange={actions.completeAll} />
			)
		}
	}

	renderFooter(completedCount){
		const { todos } = this.props
		const { filter } = this.state
		// const filterTodos = todos.filter(TODO_FILTERS[filter]);
		const activeCount  = todos.length - completedCount
		if( todos.length ){
			return(
				<Footer completedCount={completedCount}
				 activeCount={activeCount}
				 filter={tilter}
				 onClearCompleted={this.handleClearCompleted.bind(this)}
				 onShow={this.handleClearCompleted.bind(this)} />
				</Footer>
			)
		}
	}

	render(){
		const { todos, actions } = this.props
		const{ filter } = this.state
		const filteredTodos = todos.filter()
		const completedCount = todos.reduce((count, todo) =>
			todo.comleted ? count + 1 : count,
			0
		)

		return(
			<section className="main">
				{ this.renderToggleAll(completedCount) }
					<ul className="todo-list">
						{filterTodos.map(todo => 
							<TodoItem key={todo.id} todo={todo} {...actions} />
						)}
					</ul>
				{ this.renderFooter(completedCount) }

			</section>
		)
	}
}

MainSection.propTypes = {
	todos: Proptypes.array.isRequired,
	actions: Proptypes.object.isRequired
}

export default MainSection
