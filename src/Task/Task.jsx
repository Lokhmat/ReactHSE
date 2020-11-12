import React from 'react';
import styles from './Task.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class Task extends React.Component{
    


    render(){
    return(
        <div className = {cx("Task",{[`Task-theme-${this.props.theme}`]:true})}>
		<div className = {cx("Text",{[`Text-theme-${this.props.theme}`]:true})}>
		<p>{this.props.task.name}</p>
		<p>{this.props.task.description}</p>
		<p>{this.props.task.completed?'Done':'Active'}</p>
		</div>
		<button className = {cx("Button")} style = {{backgroundColor : this.props.task.completed?'#a9de90':'#d67067'}} onClick = {() => this.props.func(this.props.task.id)}>Done</button>
	    </div>

    )
    }
}
export default Task;