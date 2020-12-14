import React from 'react';
import { Task } from '../Task/Task.jsx';
import { TaskAdd } from '../TaskAdd/TaskAdd.jsx';
import styles from './ToDoList.module.scss'
import classNames from 'classnames/bind'
import './ToDoList.module.scss'
import { connect } from 'react-redux'
import { handleThemeChange } from '../../actions/theme'
import { handleTaskAdding } from '../../actions/task'

const cx = classNames.bind(styles)

const mapStateToProps = (state) =>({
	tasks : state.tasks.tasks,
	theme : state.theme.theme
})

const mapDispatchToProps = (dispatch) =>({
	dispatchOnTaskAdd : (newTask) =>dispatch(handleTaskAdding(newTask)),
	dispatchOnTaskDeletion : (delTask) =>dispatch(handleTaskAdding(delTask)),
	dispatchOnThemeChange : () =>dispatch(handleThemeChange())
})

class TodoListClass extends React.Component{
	changeTheme = event => {
		this.props.dispatchOnThemeChange()
	}

	getGenerator = ()=>{
		this.generator = this.props.tasks.map(x => <Task func = {this.onClick} id = {x.id} key={x.id}/>).sort().reverse()
	}

	render(){
		this.getGenerator()
		return(
			<div className = {cx("Home",{[`Home-theme-${this.props.theme}`]:true})}>
			<div className = {cx("Radio",{[`Radio-theme-${this.props.theme}`]:true})}>
				<label>Dark</label>
				<input type="checkbox" className={cx("toggle")} onChange = {this.changeTheme}/>
				<label>Light</label>
			</div>
			<h2 className = {cx("Heading",{[`Heading-theme-${this.props.theme}`]:true})}>My TODO List</h2>
			<TaskAdd></TaskAdd>
			{this.generator}
			</div>

		)
	}
}

export const ToDoList =  connect(mapStateToProps,mapDispatchToProps)(TodoListClass)