
import React,{Component} from 'react';
import './App.css';
import TodoList from './component/TodoList';
import {connect} from 'react-redux';
import * as actionTypes from './store/actions';
class App extends Component {
    state={
      task:''
    }
    changeHandler=(event)=>{
      this.setState({
        task:event.target.value,
      })
   }
    addTaskhandler=()=>{
      let task=this.state.task
      if(task.trim()===''){
        alert('Please Write the task')
      }
      else{
        this.props.onAdd(task)
      }
  }
 editTaskHandler=(index)=>{
   alert('You choose to edit🤨 ,which will take you behind all other tasks!!')
    let alltasks=[...this.props.alltasks]
    let task=alltasks[index];
    this.props.onEdit(index)
    this.setState({
      task:task})
   }
  render()
   {
   let tasks=this.props.alltasks.map((data,index)=>{
        return <TodoList
        editTask={this.editTaskHandler.bind(this,index)}
        deleteTask={this.props.onDelete.bind(this,index)}
        value={data}
        key={index}
        />
      })
  return (
    <div className="App">
    <h1 className="title">To Do List</h1>
    <h2>Let's Play</h2>
       <div className="inputs">
       <input type="text" value={this.state.task} onChange={this.changeHandler} />
       <button type="button" className='button' onClick={this.addTaskhandler }>Add Task</button>
       </div>
     {tasks}   
    </div>
  );
}
    }
const mapStateToProps=state=>{
  return{
 alltasks:state.alltasks,
  }
}
const mapDispatchToProps=dispatch=>{
  return{
onAdd:(task)=>dispatch(actionTypes.addtask(task)),
onDelete:(index)=>dispatch(actionTypes.deletetask(index)),
onEdit:(index)=>dispatch(actionTypes.edittask(index))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
