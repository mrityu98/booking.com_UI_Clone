import React, { Component } from 'react'
import './priceMatch.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTag} from  '@fortawesome/free-solid-svg-icons'
export default class PriceMatch extends Component {
  render() {
    return (
      
        <div className='content'>
          <div className='container'>
        <FontAwesomeIcon icon={faTag} /><span id='text'>We price match</span> 
        </div>
        </div>
     
    )
  }
}
