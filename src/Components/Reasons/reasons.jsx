import React, { Component } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import './reasons.css'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
export default class Reasons extends Component {
  render() {
    return (
      <div className='reasons'>
      <div className='reasonTitle'>
      <h3>4 reasons to choose {this.props.name}</h3>
      </div>
      <div className='iconContainer'>
      <div className='iconContainer1'>
      <div className='item1'>
      <FontAwesomeIcon icon={faWallet} className="reasonIcon"/>
      <span>Prices you can't beat!</span>
      </div>
      <div className='item1'>
      <FontAwesomeIcon icon={faLock} className="reasonIcon"/>
      <span>Prices you can't beat!</span>
      </div>
      <div className='item1'>
      <FontAwesomeIcon icon={faFileCircleCheck} className="reasonIcon"/>
      <span>Manage your bookings online</span>
      </div>
      </div>
      <div className='iconContainer2'>
      <div className='item2'>
      <FontAwesomeIcon icon={faComment} className="reasonIcon"/>
      <span>Manage your bookings online</span>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
