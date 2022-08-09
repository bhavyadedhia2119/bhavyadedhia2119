import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log("Regular Component Rendering");
    return (
      <div>
        I am Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp