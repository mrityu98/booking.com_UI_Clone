import React, { Component } from 'react'
import './greenBar.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
export default class GreenBar extends Component {
  render() {
    return (
      <div className='box'>
      <div className='lock'> 
      <FontAwesomeIcon icon={faUnlockKeyhole} className="unlockicon"/><h5>Lock in a great price for your upcoming stay</h5>
      </div>
      <div className='greenInfo'>
      <span>Get instant confirmation with FREE cancellation on most rooms!</span>
      </div>
      </div>
    )
  }
}
