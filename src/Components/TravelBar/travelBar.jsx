import React, { Component } from 'react'
import './travelBar.css'
export default class TravelBar extends Component {
  render() {
    return (
      <div className='icon'>
      <div className='img'> 
      <img src="https://q-xx.bstatic.com/data/sustainability/travel_sustainable_badge.svg" alt=""/>
      </div>
      <div className='desc'>
       <h5>Travel Sustainable property</h5>
       <span>This property is part of the Travel Sustainable programme, which means it’s taken significant steps to make your stay more sustainable.<a href="#">Read more.</a></span>
       
      </div>
      </div>
    )
  }
}
