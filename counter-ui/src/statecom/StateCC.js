import React, { Component } from 'react'

export default class StateCC extends Component {
   constructor(props){
    super(props);
    this.state = {
        studentName : "Rahul Rai",
        studentAge : 20,
        studentGrade : "A"
    }
   } 


  handleChange= ()=>{
    this.setState({
        studentName : "Rajinikanth Gaikwad",
        studentAge : 21,
        studentGrade : "B"
    })
  }
  
  render() {
    return (
      <div>
        <p>{this.state.studentName}</p>
        <p>{this.state.studentAge}</p>
        <p>{this.state.studentGrade}</p>
        <button onClick={this.handleChange}>Click</button>
      </div>
    )
  }
}
