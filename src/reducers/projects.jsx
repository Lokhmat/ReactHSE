import {ADD_TASK, DELETE_TASK,COMPLETE_TASK} from '../actions/projects' 

const initialState = [
  {
    id : 0,
    name : 'University projects',
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
  },
  {
    id : 1,
    name : 'Household chores',
    tasks :[
      {
        id: 0,
        name: 'Name of the task1 but now home one',
        description: 'What needs to be done1',
        completed: false
      },
      {
        id: 1,
        name: 'Name of the task2 but now home one',
        description: 'What needs to be done2',
        completed: false
      },
      {
        id: 2,
        name: 'Name of the task3 but now home one',
        description: 'What needs to be done3',
        completed: false
      },
      {
        id: 3,
        name: 'Name of the task4 but now home one',
        description: 'What needs to be done4',
        completed: false
      },
      {
        id: 4,
        name: 'Name of the task5 but now home one',
        description: 'What needs to be done5',
        completed: true
      },
    ]
  }
]


export const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:{
            let addedTask = {
                id: state.filter(x => x.name === action.payload.projName)[0].tasks.length,
                name: action.payload.name,
                description: action.payload.description,
                completed: false
            }
            let newState = [...state]
            let tasks = newState.filter(x => x.name === action.payload.projName)[0].tasks
            tasks.push(addedTask)
            return [
                ...newState
            ]
        }
        case DELETE_TASK:{
            //TODO
            return state
        }
        case COMPLETE_TASK:{
            const newState = [...state]
            const newTasks = newState.filter(x=> x.name === action.payload.projName)[0].tasks
            const currState = newTasks[action.payload.id].completed
            newTasks[action.payload.id] = {
                id:action.payload.id,
                name : newTasks[action.payload.id].name,
                description : newTasks[action.payload.id].description,
                completed : !currState
            }    
            return [...newState]
        }

        default:
            return state

    }
}