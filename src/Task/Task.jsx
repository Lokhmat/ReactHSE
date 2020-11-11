import React from 'react';
import styles from './Task.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class Task extends React.Component{
    


    render(){
    return(
        <div className = {cx("Task",{[`Task-theme-${this.props[2]}`]:true})}>
		<div className = {cx("Text",{[`Text-theme-${this.props[2]}`]:true})}>
		<p>{this.props[0].name}</p>
		<p>{this.props[0].description}</p>
		<p>{this.props[0].completed?'Done':'Active'}</p>
		</div>
		<button className = {cx("Button")} style = {{backgroundColor : this.props[0].completed?'#a9de90':'#d67067'}} onClick = {() => this.props[1](this.props[0].id)}>Done</button>
	    </div>

    )
    }
}
export default Task;