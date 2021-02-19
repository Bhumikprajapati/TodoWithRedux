import * as actionTypes from './actionTypes';

export const addtask=(task)=>{
    return{
      type:actionTypes.ADD_TO_LIST,
      task:task
    }
}
export const edittask=(index)=>{
    return{
        type:actionTypes.EDIT_TASK,
        index:index
    }
}
export const deletetask=(index)=>{
    return{
        type:actionTypes.DELETE_TASK,
        index:index
    }
}