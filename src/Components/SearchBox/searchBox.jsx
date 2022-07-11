import React from 'react'
import './searchBox.css'

export default function SearchBox() {
        return (
        <div className='searchBox'>
        <div className='searchBoxContainer'>
          <h2>Search</h2>
          <div className='labelContainer'>
            <label className='searchBoxLabels'>Destination/property name:</label>
            <input type="search" className='searchinput1' />
          </div>
          <div className='labelContainer'>
            <label className='searchBoxLabels'>Check-in date</label>
            <input type="date" className='searchdate' />
          </div>
          <div className='labelContainer'>
            <label className='searchBoxLabels'>Check-out date</label>
            <input type="date" className='searchdate'  />
          </div>
          <div className='labelContainer'>
            <input type="text" className='searchinput2' />
          </div>
          <div className='labelContainer'>
            <input type="checkbox" id="searchTick" />
            <span id="search">I'm travelling for work</span>
          </div>
          <div className='labelContainer'>
            <button id="searchBoxBtn">Search</button>
          </div>
        </div>
      </div>
    )
  }

