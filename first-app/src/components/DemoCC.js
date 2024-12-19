import React, { Component } from 'react'
import ChildDemoCC from './ChildDemoCC'

export default class DemoCC extends Component {
  render() {
    return (
      <div>
        <h1>Welcome in Class Component</h1>
        <ChildDemoCC />
      </div>
    )
  }
}
