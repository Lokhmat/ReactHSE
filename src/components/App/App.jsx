import React from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom'

import { HomePage } from '../HomePage/HomePage'
import { ToDoList } from '../ToDoList/ToDoList'
import { rootReducer } from '../../reducers/index'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const store = createStore(rootReducer);

class App extends React.Component{
	
	render(){
		console.log()
		return(
			<Provider store = {store}>
				
				<BrowserRouter>
					<Switch>
						{store.getState().tasks.map(x => x).map(x => 
							<Route path = {`/${x.id}`} key={x.id}>
							<div>
								<ToDoList projName = {x.name}></ToDoList>
							</div>
							</Route>
							)}
						<Route path = '/'>
							<HomePage />
						</Route>
						
					</Switch>
				</BrowserRouter>
			</Provider>
		)
	}
}


export default App;
