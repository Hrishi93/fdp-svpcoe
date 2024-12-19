import React, { Component } from 'react'

export default class PropsCC extends Component {
  render(props) {
    return (
      <div>
        <p>Track :{this.props.track}</p>
        <p>Location : {this.props.location}</p>
      </div>
    )
  }
}
