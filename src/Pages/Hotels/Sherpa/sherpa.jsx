import React, { useState } from 'react'
import {useLocation } from 'react-router-dom'
import Header from '../../../Components/Header/header'
import Navbar from '../../../Components/Navbar/navbar'
import PriceMatch from '../../../Components/Pricematch/priceMatch'
import SearchBox from '../../../Components/SearchBox/searchBox'
import Map from '../../../Components/Map/map'
import './sherpa.css'
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
export default  function Sherpa (){
  const loc=useLocation();
  const [spot,setSpot]= useState(loc.state)

    return (
      <div className='hermitageHeader'>
        <Navbar/>
        <Header type={"list"}/>
        <div className='body'>
        <div className='list'>
        <div className='leftList'>
        <PriceMatch />
        <SearchBox  />
        <Map/>
        </div>
        <div className='info'>
          <Infobar/>
          <div className='descBox'>
            <div className='descChild1'>
            <div className='location'>
            <span id="type">Homestay</span><span><h2>Sherpa Residency and Farmhouse</h2></span>
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
      <span id='address'><FontAwesomeIcon icon={faLocationDot} className="locationIcon"/> Hill Cart Road Sherpa Residency and Farmhouse, 734219 {`${spot}`}, India –</span>
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
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/310322953.jpg?k=c5b89fe712fd7cca4ff0707513a16635cead805bc958c1921b74d41521ab3c44&o=&hp=1" alt=""/>
     </div>
     <div className='img1'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/330374493.jpg?k=13b4f6e0a4dc0b5447f99b1dd1f2069e3e88b7bc83ce087a5c634ccd5b1970f7&o=&hp=1" alt=""/>
     </div>
     </div>
     <div className='maxlarge'>
     <div className='img2'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/310321774.jpg?k=19e518d73ffc9e7b17d45fdd370f7bd324f15c5d4c2f5ac7f11cdc55c6202516&o=&hp=1" alt=""/>
     </div>
     </div>
    </div>
    <div className='small'>
     <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/333260653.jpg?k=188545d09cae6dcc14c4e569164cfa3730ab4a190621ab8c0779a518a4f877fe&o=&hp=1" alt=""/>
     </div>
     <div className='img3'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/332457040.jpg?k=32c33b289888e1c9740b64d2843e9393ab0cb1cf8adc199da420ce893c2dfd8c&o=&hp=1" alt=""/>
      </div>
      <div className='img3'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/310321794.jpg?k=4b09e7721e47298521b43117762c5c1574e8c67e346eb2ef5fefca1e750c98ce&o=&hp=1" alt=""/>
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
        <Reasons name="Sherpa Residency and Farmhouse"/>
        <Mail/>
        <Before/>
        <Footer/>
  <Dummy/>
        </div>
      </div>
    )
  }

