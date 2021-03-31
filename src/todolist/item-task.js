import React, { Component } from "react";
import {connect}from 'react-redux'
 class ItemTask extends Component {
  render() {
    const { dataTask} =this.props;
    return (
      <li>
        <span className="liName">{dataTask.textTask}</span>
        <span>
        <i className="fa fa-trash" onClick={()=>this.props.DETETE_TASK(dataTask)}></i>
        <i className="fa fa-check-circle" onClick={()=>this.props.UPDATE_TASK(dataTask)}></i>
        </span>
      </li>
    );
  }
}
const mapDispatchToProps =(dispatch)=>{
   return({
       DETETE_TASK:(task)=>{
             const action  ={
               type:"DELETE_TASK",
               payload:task,
             }
             dispatch(action);
       },
       UPDATE_TASK:(task)=>{
        const action  ={
          type:"UPDATE_TASK",
          payload:task,
        }
        dispatch(action);
  }
   })
}
export default connect(null,mapDispatchToProps) (ItemTask)