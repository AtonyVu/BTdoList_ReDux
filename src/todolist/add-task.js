import React, { Component } from "react";
import {connect} from 'react-redux'
class AddTask extends Component {
  constructor(props)
  {
      super(props);
      let getvalue;
  }
  render() {
    return (
      <>
        <input id="newTask" type="text" placeholder="Enter an activity..." onChange={(event)=>{this.getvalue=event.target.value}} />
        <button id="addItem">
          <i className='fa fa-plus' onClick={()=>{this.props.ADD_TASK(this.getvalue)}}/>
        </button>
      </>
    );
  }
  
}
const mapDispatchToProps=(dispatch)=>{
  return({  
    ADD_TASK:(task)=>{
    const action = {
      type:"ADD_TASK",
      payload:task
    }
    dispatch(action)
  }})
   
}
export default  connect(null,mapDispatchToProps)(AddTask);