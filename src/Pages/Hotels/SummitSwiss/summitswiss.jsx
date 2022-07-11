import React, { useState} from 'react'
import {useLocation } from 'react-router-dom'
import Header from '../../../Components/Header/header'
import Navbar from '../../../Components/Navbar/navbar'
import PriceMatch from '../../../Components/Pricematch/priceMatch'
import SearchBox from '../../../Components/SearchBox/searchBox'
import Map from '../../../Components/Map/map'
import './summitswiss.css'
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
export default function SummitSwiss() {
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
        <SearchBox/>
        <Map/>
        </div>
        <div className='info'>
          <Infobar/>
          <div className='descBox'>
            <div className='descChild1'>
            <div className='location'>
            <span id="type">Hotel</span><span><h2>Summit Swiss Heritage Resort & Spa</h2></span>
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
      <span id='address'><FontAwesomeIcon icon={faLocationDot} className="locationIcon"/>  
 Near Circuit House, Gandhi Road, 734101 {`${spot}`}, India–</span>
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
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/237452607.jpg?k=045bc2a735e4cb03bca99c07cac5d8794ad4e26583cfe7e3a445b75412665fb3&o=&hp=1" alt=""/>
     </div>
     <div className='img1'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228672517.jpg?k=490034105f3975ecebd711b1c4b202ee3002a829c71c0440274b5e6e8cd5f48a&o=&hp=1" alt=""/>
     </div>
     </div>
     <div className='maxlarge'>
     <div className='img2'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228672540.jpg?k=41fd81f8c255128b72e088b946fb21a9eeb6b267911636579de1ae31d2feda47&o=&hp=1" alt=""/>
     </div>
     </div>
    </div>
    <div className='small'>
     <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/237453245.jpg?k=96029744551284100bbd4920a4469461ce8b98ebab2e3e8c9851fb4ee46a4e41&o=&hp=1" alt=""/>
     </div>
     <div className='img3'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/237448732.jpg?k=7b841a38535aaddadd74c94efaa19c54f30eaca194b1e6177077c626b28c65aa&o=&hp=1" alt=""/>
      </div>
      <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/237448978.jpg?k=ebc79e74c7ea4801c3882cedab233ebb2ee16db2ae852069f84f75e1f88142af&o=&hp=1" alt=""/>
      </div>
      <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/237452700.jpg?k=dd7db00fb8a4cd9ca3eb04828f7821d83fdd30762610f37d7a2991ba48d2a488&o=&hp=1" alt=""/>
      </div>
    </div>
  </div>
  
        </div>
        </div>
        <TravelBar/>
        <GreenBar/>
        <Health/>
        <Reasons name="Summit Swiss Heritage Resort & Spa"/>
        <Mail/>
        <Before/>
        <Footer/>
  <Dummy/>
        </div>
      </div>
    )
  }

