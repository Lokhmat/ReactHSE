import React from 'react';
import './Task.css'


class Task extends React.Component{
    

    render(){
    return(
        <div className = "Task">
		<div className = "Text">
		<p>{this.props[0].name}</p>
		<p>{this.props[0].description}</p>
		<p>{this.props[0].completed?'Done':'Active'}</p>
		</div>
		<button style = {{backgroundColor : this.props[0].completed?'#a9de90':'#d67067'}} onClick = {() => this.props[1](this.props[0].id)}>Done</button>
	    </div>

    )
    }
}
export default Task;