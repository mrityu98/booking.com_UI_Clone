import React, { Component } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './health.css'
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons';
export default class Health extends Component {
  render() {
    return (
      <div className='healthContainer'>
        <div className='healthIcon'>
        <FontAwesomeIcon icon={faHouseMedical} className="healthicon"/>
        </div>
        <div className='healthDesc'>
            <div className='healthTitle'>
             <h5>Extra health & safety measures</h5>
            </div>
            <div className='healthLink'>
            <span>This property has taken extra health and hygeine measures to ensure that your safety is their priority</span>
            <a>See health & safety details</a>
            </div>
        </div>
      </div>
    )
  }
}
