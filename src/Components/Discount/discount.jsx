import React, { Component } from 'react'
import './discount.css'
export default class Discount extends Component {
  render() {
    return (
      <div className="discountParent">
        <div className='discountChild'>
            <div className='discountImg'>
                <img src="https://cf.bstatic.com/static/img/genius-globe-with-badge_desktop/d807514761b3684aedebced9265c5548a063b7a0.png" alt=""/>
            </div>
            <div className='discountInfo'>
               
                <div className='discountTitle'>
                <h2>Get instant discounts</h2>
                </div>
                <div className='discountText'>
                Simply sign into your Booking.com account and look for the blue Genius logo to save
                </div>
                <div className='discountButton'>
                    <button >Sign in</button><button >Register</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
