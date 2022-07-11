import React, { Component } from 'react'
import './mail.css'
export default class Mail extends Component {
  render() {
    return (
      <div className="mail">
      <h1 className='mailTitle'>Save time, save money!</h1>
      <span className='mailDesc'>Sign up and we'll send the best deals to you</span>
      <div>
      <div className='mailBox'>
        <input type="email" required="required" placeholder='Your email'/>
        <button>Subscribe</button>
      </div>
      <div>
        <label>
        <input type="checkbox" id='mailCheck'/>
        Send me a link to get the FREE Booking.com app!
        </label>
      </div>
      </div>
      </div>
     
    )
  }
}
