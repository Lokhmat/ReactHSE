import React from 'react';
import Task from '../Task/Task.js';
import TaskAdd from '../TaskAdd/TaskAdd';
import './ToDoList.css'

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
		let tasks = [...this.state.tasks]
        let addedTask = {
            id: this.state.tasks.length,
			name: newTask.name,
			description: newTask.description,
			completed: false
		}
		tasks.push(addedTask)
        this.setState({tasks : tasks})
	}
	
	

    getGenerator = ()=>{
		this.generator = this.state.tasks.map(x => <Task {...[x,this.onClick]}  key={x.id}/>).sort().reverse()
    }

	render(){
		this.getGenerator()
		return(
			<div>
			<h2 className = "Heading">My TODO List</h2>
			<TaskAdd onClick = {this.addTask}></TaskAdd>
			{this.generator}
			</div>

		)
	}
}

export default TodoList;