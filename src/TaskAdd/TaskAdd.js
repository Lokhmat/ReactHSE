import React from 'react'
import './TaskAdd.css'


class TaskAdd extends React.Component{
    newTask = {
        name : '',
        description : '',
    }
    render(){
        return(
            <div>
            <div className = "Task">
		        <div className = "Text">
		            <p><input placeholder = "Type name here" type = "text" onChange = {(event) => this.newTask.name = event.target.value}></input></p>
		            <p><input placeholder = "Type task here" type = "text" onChange = {(event) => this.newTask.description = event.target.value}></input></p>
		        </div>
		        <button onClick = {() => this.props.onClick(this.newTask)}>Add</button>
	        </div>
            </div>
        )        
    }
}

export default TaskAdd