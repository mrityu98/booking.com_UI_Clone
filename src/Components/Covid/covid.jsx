import React, { Component } from 'react'
import image from '../../svg.jpg'
import './covid.css'
export default class Covid extends Component {
  render() {
    return (
    
      <div className="covidRoot">
        
        <div className="covidChild">
            <div className="covidImg">
            <img src={image} alt=""/>
            </div>
            <div className='covidTitle'>
            Get the advice you need. Check the latest COVID-19 restrictions before you travel. <a href="https://www.booking.com/covid-19.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AuPd35UGwAIB0gIkMjJiY2U4MjYtYzk1NS00ZDEyLTkwZjEtYTQ4MjU4YjAyNWFk2AIE4AIB&sid=b601fee48ac4dd16aba20a53416e2abe&aid=304142">Learn more.</a>
            </div>
        
        </div>
      </div>
      
    )
  }
}

