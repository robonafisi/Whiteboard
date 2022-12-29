import React, { Component } from 'react';
import Board from '../board/board.js';
import './containerstyle.css'

export default class container extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className='container'>
        <div className='color-picker-container'>
            <input type='color' />
        </div>
        <div className='board-container'>
            <Board />
        </div>
      </div>
    )
  }
}
