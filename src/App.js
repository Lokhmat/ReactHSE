import React from 'react';
import './App.css';
import TodoList from './ToDoList/ToDoList';




class App extends React.Component{
	render(){
		return(
			<div>
			<TodoList></TodoList>
			</div>
		)
	}
}


export default App;
