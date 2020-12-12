import React from 'react';
import { Task } from '../Task/Task.jsx';
import { TaskAdd } from '../TaskAdd/TaskAdd.jsx';
import styles from './ToDoList.module.scss'
import classNames from 'classnames/bind'
import './ToDoList.module.scss'
import { connect } from 'react-redux'
import { handleThemeChange } from '../../actions/theme'

const cx = classNames.bind(styles)


const mapDispatchToProps = (dispatch) =>({
	
	dispatchOnThemeChange : () =>dispatch(handleThemeChange())
})

const mapStateToProps = (state) =>({
	tasks : state.tasks,
	theme : state.theme.theme
})

class TodoListClass extends React.Component{

	
	changeTheme = event => {
		this.props.dispatchOnThemeChange()
	}

	render(){
		let usefulTasks = this.props.tasks.filter(x => x.name === this.props.projName)[0]
		return(
			<div className = {cx("Home",{[`Home-theme-${this.props.theme}`]:true})}>
			<div className = {cx("Radio",{[`Radio-theme-${this.props.theme}`]:true})}>
				<label>Dark</label>
				<input type="checkbox" className={cx("toggle")} onChange = {this.changeTheme}/>
				<label>Light</label>
			</div>
			<h2 className = {cx("Heading",{[`Heading-theme-${this.props.theme}`]:true})}>{this.props.projName}</h2>
			<TaskAdd projName = {this.props.projName}></TaskAdd>
			{usefulTasks.tasks.map(x => <Task projName = {this.props.projName} id = {x.id} key={x.id}/>).sort().reverse()}
			</div>

		)
	}
}

export const ToDoList =  connect(mapStateToProps,mapDispatchToProps)(TodoListClass)