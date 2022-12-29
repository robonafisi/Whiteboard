import React, { Component } from 'react'

export default class board extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
          <h1>
            <canvas></canvas>
          </h1>
      </div>
    )
  }
}
