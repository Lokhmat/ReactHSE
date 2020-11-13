import React from 'react';
import Task from '../Task/Task.jsx';
import TaskAdd from '../TaskAdd/TaskAdd.jsx';
import styles from './ToDoList.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class TodoList extends React.Component{
	state = {
		tasks : [
			  {
				id: 0,
				name: 'Name of the task1',
				description: 'What needs to be done1',
				completed: false
			  },
			  {
				id: 1,
				name: 'Name of the task2',
				description: 'What needs to be done2',
				completed: false
			  },
			  {
				id: 2,
				name: 'Name of the task3',
				description: 'What needs to be done3',
				completed: false
			  },
			  {
				id: 3,
				name: 'Name of the task4',
				description: 'What needs to be done4',
				completed: false
			  },
			  {
				id: 4,
				name: 'Name of the task5',
				description: 'What needs to be done5',
				completed: true
			  },
		],
		theme : 'dark'
	}

	onClick = (id) =>{
		const currState = this.state.tasks[id]
		let newTask = [...this.state.tasks]
		newTask[id] = {
			id: id,
			name: newTask[id].name,
			description: newTask[id].description,
			completed: !currState.completed
		}
		this.setState({tasks : newTask})
	}
	
	addTask = (newTask) =>{
		let addedTask = {
			id: this.state.tasks.length,
			name: newTask.name,
			description: newTask.description,
			completed: false
		}
		const added = [...this.state.tasks,addedTask]
		this.setState({tasks : added})
	}
	
	changeTheme = event => {
		this.setState({theme:event.target.value})
	}

	getGenerator = ()=>{
		this.generator = this.state.tasks.map(x => <Task task = {x} func = {this.onClick} theme={this.state.theme} key={x.id}/>).sort().reverse()
	}

	render(){
		this.getGenerator()
		return(
			<div className = {cx("Home",{[`Home-theme-${this.state.theme}`]:true})}>
			<div className = {cx("Radio",{[`Radio-theme-${this.state.theme}`]:true})}>
				<input type="radio" id="light" value="light" name="theme" checked = {this.state.theme==="light"}onChange = {this.changeTheme}></input>
				<label>Light theme</label>
				<input type="radio" id = "dark" value="dark" name="theme" checked={this.state.theme==="dark"} onChange = {this.changeTheme}></input>
				<label>Dark theme</label>
			</div>
			<h2 className = {cx("Heading",{[`Heading-theme-${this.state.theme}`]:true})}>My TODO List</h2>
			<TaskAdd onClick = {this.addTask} theme = {this.state.theme}></TaskAdd>
			{this.generator}
			</div>

		)
	}
}

export default TodoList;