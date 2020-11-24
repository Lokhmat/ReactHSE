import React from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { ToDoList } from '../ToDoList/ToDoList';
import { rootReducer } from '../../reducers/index';

const store = createStore(rootReducer);

class App extends React.Component{
	render(){
		return(
			<Provider store = {store}>
			<div>
			<ToDoList></ToDoList>
			</div>
			</Provider>
			
		)
	}
}


export default App;
