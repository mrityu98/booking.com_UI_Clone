import React, { useState} from 'react'
import {useLocation } from 'react-router-dom'
import Header from '../../../Components/Header/header'
import Navbar from '../../../Components/Navbar/navbar'
import PriceMatch from '../../../Components/Pricematch/priceMatch'
import SearchBox from '../../../Components/SearchBox/searchBox'
import Map from '../../../Components/Map/map'
import './bluehorizon.css'
import Infobar from '../../../Components/Infobar/infobar'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import TravelBar from '../../../Components/TravelBar/travelBar'
import GreenBar from '../../../Components/GreenBar/greenBar'
import Health from '../../../Components/Health/health'
import Reasons from '../../../Components/Reasons/reasons'
import Mail from '../../../Components/Mail/mail'
import Before from '../../../Components/Before/before'
import Footer from '../../../Components/Footer/footer'
export default function BlueHorizon() {
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
            <span id="type">Homestay</span><span><h2>Blue Horizon Homestay</h2></span><span id="issue">Travel Sustainable property</span>
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
      <span id='address'><FontAwesomeIcon icon={faLocationDot} className="locationIcon"/>Blue Horizon Homestay West Point Road Above Dali Fhatak {`${spot}`}, India  –</span>
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
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/186686702.jpg?k=15e1ee1d3751dbbc1e822dceec654002a41110fb40dbe9a2ba77777bd18fe23b&o=&hp=1" alt=""/>
     </div>
     <div className='img1'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/366380304.jpg?k=6a6ca684a9c1b241bf736290ad6b27edabebac019b34f427b5290b3c863a2e3b&o=&hp=1" alt=""/>
     </div>
     </div>
     <div className='maxlarge'>
     <div className='img2'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/358269763.jpg?k=7a5696daafd4b87fabd4ed86baacf0b1642aec86da903cb433809c47ff89cb6e&o=&hp=1" alt=""/>
     </div>
     </div>
    </div>
    <div className='small'>
     <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/205952421.jpg?k=bf9c728b3f24b18390eb26c65450a12bcdb5bdfaa1eaecc7e1e94e2f0e317ec0&o=&hp=1" alt=""/>
     </div>
     <div className='img3'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/278234059.jpg?k=5e65b25b2dde909bf76eb9b3fb73c559705aad0e57ab31c81e671a676344bfc2&o=&hp=1" alt=""/>
      </div>
      <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/259286393.jpg?k=33d3f689849f74d3aded4b169b772127ff91686480aba81504b441597e7d96f8&o=&hp=1" alt=""/>
      </div>
      <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/187489561.jpg?k=e76833c9a53cb7cf5f1463d6f017f946e1f18d95e7af1b590e229740ee064135&o=&hp=1" alt=""/>
      </div>
    </div>
  </div>
  
        </div>
        </div>
        <TravelBar/>
        <GreenBar/>
        <Health/>
        <Reasons name={`Blue Horizon Homestay`}/>
        <Mail/>
        <Before/>
        <Footer/>
 
        </div>
      </div>
    )
  }

