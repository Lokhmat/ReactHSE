import {ADD_TASK, DELETE_TASK,COMPLETE_TASK} from '../actions/task' 

const initialState = {
    tasks : [
        {
          id: 0,
          name: 'Name of the task1',
          description: 'What needs to be done1',
          completed: false
        },
        {
          id: 1,
          name: 'Name of the task2',
          description: 'What needs to be done2',
          completed: false
        },
        {
          id: 2,
          name: 'Name of the task3',
          description: 'What needs to be done3',
          completed: false
        },
        {
          id: 3,
          name: 'Name of the task4',
          description: 'What needs to be done4',
          completed: false
        },
        {
          id: 4,
          name: 'Name of the task5',
          description: 'What needs to be done5',
          completed: true
        },
  ]
}

export const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:{
            let addedTask = {
                id: state.tasks.length,
                name: action.payload.name,
                description: action.payload.description,
                completed: false
            }
            return {
                ...state,
                tasks:[...state.tasks,addedTask]
            }
        }
        case DELETE_TASK:{
            //TODO
            return state
        }
        case COMPLETE_TASK:{
            const newTasks = [...state.tasks]
            const currState = newTasks[action.payload].completed
            newTasks[action.payload] = {
                id:action.payload,
                name : state.tasks[action.payload].name,
                description : state.tasks[action.payload].description,
                completed : !currState
            }
            return {tasks:newTasks}
        }

        default:
            return state

    }
}