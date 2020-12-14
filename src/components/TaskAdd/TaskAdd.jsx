import React from 'react'
import styles from './TaskAdd.module.scss'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { handleTaskAdding } from '../../actions/task'

const cx = classNames.bind(styles)

const mapStateToProps = (state) =>({
    theme : state.theme.theme
})

const mapDispatchToProps = (dispatch) =>({
    dispatchOnTaskAdd : (newTask) =>dispatch(handleTaskAdding(newTask)),
})

class TaskAddClass extends React.Component{
    newTask = {
        name : '',
        description : '',
    }

    addTask = (task) =>{
        this.props.dispatchOnTaskAdd(task)
    }

    render(){
        return(
            
            <div className = {cx("AddTask",{[`AddTask-theme-${this.props.theme}`]:true})} >
		        <div className = {cx("Text",{[`Text-theme-${this.props.theme}`]:true})}>
		            <p><input className={cx("Input",{[`Input-theme-${this.props.theme}`]:true})} placeholder = "Type name here" type = "text" onChange = {(event) => this.newTask.name = event.target.value}></input></p>
		            <p><input className={cx("Input",{[`Input-theme-${this.props.theme}`]:true})} placeholder = "Type task here" type = "text" onChange = {(event) => this.newTask.description = event.target.value}></input></p>
		        </div>
		        <button className = {cx("Button")} onClick = {() => this.addTask(this.newTask)}>Add</button>
	        </div>
            
        )        
    }
}

export const TaskAdd = connect(mapStateToProps,mapDispatchToProps)(TaskAddClass)