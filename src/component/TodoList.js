import React, { Component } from 'react';
import classes from './TodoList.module.css'
class TodoList extends Component{
    state={
        toggle:false
    }
    addToggle=()=>{
        let toggle=this.state.toggle;
        this.setState({
            toggle:!toggle
        })
    }
    render(){
        const {toggle}=this.state;
    return(
           
            <div className={classes.outstyle} >
              <div className={classes.inner}>
              <input type="checkbox" onClick={this.addToggle} />
               <p className={toggle?classes.toline:""}>{this.props.value}</p>
              <button 
              onClick={toggle?null:(index)=>this.props.editTask(index)}
              className={toggle?classes.newedit:classes.edit}>Edit</button>
              <button 
              onClick={toggle?null:this.props.deleteTask} 
              className={toggle?classes.newdelete:classes.delete}>Delete</button>     
           </div>
             </div>
            )
        }
}
export default TodoList;