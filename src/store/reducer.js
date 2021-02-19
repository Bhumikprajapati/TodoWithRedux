import * as actionTypes from './actionTypes';
const initialState={
    task:'',
    alltasks:[ ],
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_LIST:
            let task=action.task
            let alltasks=[...state.alltasks]
                // let len=state.alltasks.length;
                // alltasks[len]=task
                alltasks.push(task)
              return {
                ...state,
                alltasks:alltasks              
            } 
           
        case actionTypes.EDIT_TASK:
                     let c=[...state.alltasks]
                     let i=action.index
                      c.splice(i,1)
            return{
                ...state,
                alltasks:c
            }  
            case actionTypes.DELETE_TASK:
                let copy=[...state.alltasks]
                let index=action.index
            copy.splice(index,1)
            return{
                ...state,
                alltasks:copy
            }   
         default:
             return state;   
    }
    
}

export default reducer;