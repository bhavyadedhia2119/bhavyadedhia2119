import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Bhavya Dedhia"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Bhavya Dedhia"
            })
        }, 3000);
    }

  render() {
    console.log("Parent Component Rendering");
    return (
      <div>
        I am ParentComp
        <RegComp name = {this.state.name}/>
        <PureComp name = {this.state.name}/>
      </div>
    )
  }
}

export default ParentComp