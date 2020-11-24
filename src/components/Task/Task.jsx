import React from 'react';
import styles from './Task.module.scss'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { handleTaskCompletion } from '../../actions/task'

const cx = classNames.bind(styles)

const mapStateToProps = (state) =>({
	theme : state.theme.theme,
	tasks : state.tasks.tasks
})
const mapDispatchToProps = (dispatch) =>({
	dispatchOnCompletedTask : (id) => dispatch(handleTaskCompletion(id))
})


class TaskClass extends React.Component{

	render(){
	return(
		<div className = {cx("Task",{[`Task-theme-${this.props.theme}`]:true})}>
		<div className = {cx("Text",{[`Text-theme-${this.props.theme}`]:true})}>
		<p>{this.props.tasks[this.props.id].name}</p>
		<p>{this.props.tasks[this.props.id].description}</p>
		<p>{this.props.tasks[this.props.id].completed?'Done':'Active'}</p>
		</div>
		<button className = {cx("Button")} style = {{backgroundColor : this.props.tasks[this.props.id].completed?'#a9de90':'#d67067'}} onClick = {() => this.props.dispatchOnCompletedTask(this.props.id)}>Done</button>
	    </div>

    )
    }
}

export const Task = connect(mapStateToProps,mapDispatchToProps)(TaskClass);