import React from 'react';
import styles from './Task.module.scss'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { handleTaskCompletion } from '../../actions/projects'

const cx = classNames.bind(styles)

const mapStateToProps = (state) =>({
	theme : state.theme.theme,
	tasks : state.tasks
})
const mapDispatchToProps = (dispatch) =>({
	dispatchOnCompletedTask : (id,projName) => dispatch(handleTaskCompletion(id,projName))
})


class TaskClass extends React.Component{

	render(){
		let currTask = this.props.tasks.filter(x => x.name === this.props.projName)[0].tasks[this.props.id]
	return(
		<div className = {cx("Task",{[`Task-theme-${this.props.theme}`]:true})}>
		<div className = {cx("Text",{[`Text-theme-${this.props.theme}`]:true})}>
		<p>{currTask.name}</p>
		<p>{currTask.description}</p>
		<p>{currTask.completed?'Done':'Active'}</p>
		</div>
		<button className = {cx("Button")} style = {{backgroundColor : currTask.completed?'#a9de90':'#d67067'}} onClick = {() => this.props.dispatchOnCompletedTask(this.props.id, this.props.projName)}>Done</button>
	    </div>

    )
    }
}

export const Task = connect(mapStateToProps,mapDispatchToProps)(TaskClass);