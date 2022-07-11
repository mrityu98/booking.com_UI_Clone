import React, { useState } from 'react'
import {useLocation } from 'react-router-dom'
import Header from '../../../Components/Header/header'
import Navbar from '../../../Components/Navbar/navbar'
import PriceMatch from '../../../Components/Pricematch/priceMatch'
import SearchBox from '../../../Components/SearchBox/searchBox'
import Map from '../../../Components/Map/map'
import './elgin.css'
import Infobar from '../../../Components/Infobar/infobar'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Dummy from '../../../Components/dummy'
import TravelBar from '../../../Components/TravelBar/travelBar'
import GreenBar from '../../../Components/GreenBar/greenBar'
import Health from '../../../Components/Health/health'
import Reasons from '../../../Components/Reasons/reasons'
import Mail from '../../../Components/Mail/mail'
import Before from '../../../Components/Before/before'
import Footer from '../../../Components/Footer/footer'
export default function Elgin()  {
  const loc=useLocation();
  const [spot,setSpot]= useState(loc.state)
 
    return (
      <div className='hermitageHeader'>
        <Navbar/>
        <Header type={"list"}/>
        <div className='body'>
        <div className='list'>
        <div className='leftList'>
        <PriceMatch/>
        <SearchBox />
        <Map/>
        </div>
        <div className='info'>
          <Infobar/>
          <div className='descBox'>
            <div className='descChild1'>
            <div className='location'>
            <span id="type">Resort</span><span><h2>The Elgin, {`${spot}`}</h2></span><span id="issue">Travel Sustainable property</span>
            </div>
            <div className='activity'>
              <div>
              <FontAwesomeIcon icon={faHeart} className="activityIcon"/>
              </div>
              <div>
              <FontAwesomeIcon icon={faShareNodes} className="activityIcon" />
              </div>
              <div>
              <button>Reserve</button>
              </div>
            </div>
        </div>
<div className='descChild2'>
    <div>
      <span id='address'><FontAwesomeIcon icon={faLocationDot} className="locationIcon"/>18 H.D Lama Road,, 734101 {`${spot}`}, India  –</span>
       <span><a href="#" id="link">Great location - show map</a></span>
    </div>
<div>
       <FontAwesomeIcon icon={faTag} /><span id='text'>We price match</span>
      </div>
</div>
    </div>
   
    <div className='imageContainer'>
    <div className='large'>
      <div className='minilarge'>
     <div className='img1'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/237058935.jpg?k=fc11c7bd3c9d2cf462c5e154d623d91775cc5de9cc24dca29563f51964e04c27&o=&hp=1" alt=""/>
     </div>
     <div className='img1'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/237830249.jpg?k=5305f48d6113a3b53acb2ca4c6a2e6149762bb140bf81df1948ce6b84ff8df9e&o=&hp=1" alt=""/>
     </div>
     </div>
     <div className='maxlarge'>
     <div className='img2'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/230565242.jpg?k=cf641329cd9de93910ff15a1938825cfebde04705e2c041ac3871920e43a6863&o=&hp=1" alt=""/>
     </div>
     </div>
    </div>
    <div className='small'>
     <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/183581615.jpg?k=351207e1b016a6a9609d4c178108d09c0ee927762b3ff717c0e1e028614c3b1c&o=&hp=1" alt=""/>
     </div>
     <div className='img3'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/183581700.jpg?k=16eebfc32c288182cc64f9a9d1a41d800826f63301188c65d1e214ff28db6c6b&o=&hp=1" alt=""/>
      </div>
      <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/183581759.jpg?k=cd60eace5b7e6a512c4aad69e70a0b75f0d3c0ada03453aba453c421e3c87767&o=&hp=1" alt=""/>
      </div>
      <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/183581611.jpg?k=e30b9ad127e5d2f3a517c8abb05ec3452ed186a7a3d937bbbe23d62e528accdd&o=&hp=1" alt=""/>
      </div>
    </div>
  </div>
  
        </div>
        </div>
        <TravelBar/>
        <GreenBar/>
        <Health/>
        <Reasons name={`The Elgin`}/>
        <Mail/>
        <Before/>
        <Footer/>
  <Dummy/>
        </div>
      </div>
    )
  }

