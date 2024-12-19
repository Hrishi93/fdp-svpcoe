import React, { Component } from 'react'

export default class CounterCC extends Component {
  constructor(props){
    super(props);
    this.state = {
        count: 0
    }
  }
  
  handleIncre = ()=>{
    this.setState({count: this.state.count+1})
  }

  handleDecre = ()=>{
    this.setState({count: this.state.count-1})
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncre}>+</button>
        <br></br>
        <button onClick={this.handleDecre}>-</button>
      </div>
    )
  }
}
