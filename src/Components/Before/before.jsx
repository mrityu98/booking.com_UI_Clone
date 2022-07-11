import React, { Component } from 'react'
import './before.css'
export default class Before extends Component {
  render() {
    return (
      <div className='before'>
        <div className='beforeBtn'>
        <button>List your property</button>
        </div>
        <div className='beforeList'>
        <ul>
            <li><a href="#">Mobile version</a></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Make changes to your booking online</a></li>
            <li><a href="#">Customer Service help</a></li>
            <li><a href="#">Become an affiliate</a></li>
            <li><a href="#">Booking.com for Business</a></li>
        </ul>
        </div>
      </div>
    )
  }
}
