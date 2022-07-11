import React, { Component } from 'react'
import './save.css'
export default class Save extends Component {
  render() {
    return (
      <div className="saveParent">
        <div className="saveChild">
        <div className='saveImg'>
         <img src='https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg' alt=""/>
        </div>
        <div className='saveInfo'>
            <div className='saveOffer'>
               Save 15% or more
            </div>
            <div className='saveText'>
            Plan your dream trip with a Getaway Deal 
            </div>
            <div className='saveButton'>
            <button >Explore deals</button>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
