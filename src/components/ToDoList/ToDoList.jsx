import React from 'react';
import { Task } from '../Task/Task.jsx';
import { TaskAdd } from '../TaskAdd/TaskAdd.jsx';
import styles from './ToDoList.module.scss'
import classNames from 'classnames/bind'
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
	dispatchOnThemeChange : (theme) =>dispatch(handleThemeChange(theme))
})

class TodoListClass extends React.Component{
	changeTheme = event => {
		this.props.dispatchOnThemeChange(event.target.value)
	}

	getGenerator = ()=>{
		this.generator = this.props.tasks.map(x => <Task func = {this.onClick} id = {x.id} key={x.id}/>).sort().reverse()
	}

	render(){
		this.getGenerator()
		return(
			<div className = {cx("Home",{[`Home-theme-${this.props.theme}`]:true})}>
			<div className = {cx("Radio",{[`Radio-theme-${this.props.theme}`]:true})}>
				<input type="radio" id="light" value="light" name="theme" checked = {this.props.theme==="light"}onChange = {this.changeTheme}></input>
				<label>Light theme</label>
				<input type="radio" id = "dark" value="dark" name="theme" checked={this.props.theme==="dark"} onChange = {this.changeTheme}></input>
				<label>Dark theme</label>
			</div>
			<h2 className = {cx("Heading",{[`Heading-theme-${this.props.theme}`]:true})}>My TODO List</h2>
			<TaskAdd></TaskAdd>
			{this.generator}
			</div>

		)
	}
}

export const ToDoList =  connect(mapStateToProps,mapDispatchToProps)(TodoListClass)