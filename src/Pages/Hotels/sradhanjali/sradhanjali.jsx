import React, { useState } from 'react'
import {useLocation } from 'react-router-dom'
import Header from '../../../Components/Header/header'
import Navbar from '../../../Components/Navbar/navbar'
import PriceMatch from '../../../Components/Pricematch/priceMatch'
import SearchBox from '../../../Components/SearchBox/searchBox'
import Map from '../../../Components/Map/map'
import './sradhanjali.css'
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
export default function Sradhanjali() {
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
            <span id="type">Hotel</span><span><h2>SRADHANJALI HOTEL</h2></span><span id="issue">Travel Sustainable property</span>
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
      <span id='address'><FontAwesomeIcon icon={faLocationDot} className="locationIcon"/>CHOTA KAKJHORA NEAR RELIANCE SMART, 734101 {`${spot}`}, India –</span>
       <span><a href="#" id="link">Good location - show map</a></span>
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
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/325529036.jpg?k=bf16449e62f40e1bcd2cf1f0359136d9c9383fac697cad399da55e07d7ab3f08&o=&hp=1" alt=""/>
     </div>
     <div className='img1'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/325531555.jpg?k=e3186a9608c1cc856351a22b86c3dfcfa0df3eee53a0248285c061343ced221b&o=&hp=1" alt=""/>
     </div>
     </div>
     <div className='maxlarge'>
     <div className='img2'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/325528878.jpg?k=44dc21b6df5269b30c55b010ef624233e2d403f2b4d44762ac54036eb18732bb&o=&hp=1" alt=""/>
     </div>
     </div>
    </div>
    <div className='small'>
     <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/325528418.jpg?k=9effb06c5e7e8d472558ed3ae5890a4007e120c10b009584a41138ff6309a99d&o=&hp=1" alt=""/>
     </div>
     <div className='img3'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/325530261.jpg?k=8e0ed6dc3f89b5574aae0899dbb0fac9c62858bf5a570a3cac9835f451dd99b2&o=&hp=1" alt=""/>
      </div>
      <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/327130781.jpg?k=bdb52aaaaf6848857ce606f0d3bd144eed51bf20cbf7a32c860f74b176e9de9f&o=&hp=1" alt=""/>
      </div>
      <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/332457179.jpg?k=5348ab252f98e740fe57d153679cbfeb465791dafbb79bd69b0bd918e827438c&o=&hp=1" alt=""/>
      </div>
    </div>
  </div>
  
        </div>
        </div>
        <TravelBar/>
        <GreenBar/>
        <Health/>
        <Reasons name="SRADHANJALI HOTEL"/>
        <Mail/>
        <Before/>
        <Footer/>
  <Dummy/>
        </div>
      </div>
    )
  }
