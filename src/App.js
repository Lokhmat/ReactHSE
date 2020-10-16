import React from 'react';
import './App.css';

const Task = ({task, Click}) =>{
	return(
	<div className = "Task">
		<div className = "Text">
		<p>{task.name}</p>
		<p>{task.description}</p>
		<p>{task.completed.toString()}</p>
		</div>
		<button onClick = {() => Click(task)}>done</button>
	</div>
	)
}

class TodoList extends React.Component{
	state = {
		tasks : [
			  {
				id: 1235,
				name: 'Name of the task1',
				description: 'What needs to be done1',
				completed: false
			  },
			  {
				id: 1236,
				name: 'Name of the task2',
				description: 'What needs to be done2',
				completed: false
			  },
			  {
				id: 1237,
				name: 'Name of the task3',
				description: 'What needs to be done3',
				completed: false
			  },
			  {
				id: 1238,
				name: 'Name of the task4',
				description: 'What needs to be done4',
				completed: false
			  },
			  {
				id: 1239,
				name: 'Name of the task5',
				description: 'What needs to be done5',
				completed: true
			  },
		],
	}

	handleClick = (task) => {
		if(task.completed === false){
			task.completed = !task.completed
			let items = [...this.state.tasks]
			this.setState({tasks : items})
		}		
		console.log(`Task ${task.id} completed status = ${task.completed}`);
		
	}

	render(){
		this.generator = this.state.tasks.map(x => <Task task = {x} Click = {this.handleClick} key={x.id}/>)
		return(
			<div>
			<h2 className = "Heading">My TODO List</h2>
			{this.generator}
			</div>

		)
	}
}



export default TodoList;
