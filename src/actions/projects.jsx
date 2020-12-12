export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'

export const handleTaskAdding = (task) =>({
    type : ADD_TASK,
    payload : task
})

export const handleTaskDeletion = (task) =>({
    type : DELETE_TASK,
    payload : task
    
})

export const handleTaskCompletion = (id,projName) =>({
    type : COMPLETE_TASK,
    payload :{id:id,
        projName:projName
    }
})