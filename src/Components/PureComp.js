import React, { Component } from 'react'

export class PureComp extends Component {
  render() {
    console.log("Pure Component Rendering");
    return (
      <div>
        I am the Pure Component {this.props.name}
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default PureComp