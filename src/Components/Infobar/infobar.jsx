import React, { Component } from 'react'
import './infobar.css'
export default class Infobar extends Component {
  render() {
    return (
      <div className='itemBox'>
       <div className='item'>
        <span>Info & prices</span>
       </div>
       <div className='item'>
       <span>Facilities</span>
       </div>
       <div className='item'>
       <span>House Rules</span>
       </div>
       <div className='item'>
       <span>Guest Reviews</span>
       </div>
      </div>
    )
  }
}
