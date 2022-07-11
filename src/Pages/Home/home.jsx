import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Header from '../../Components/Header/header'
import Featured from '../../Components/Featured/featured'
import PropertyList from '../../Components/PropertyList/propertyList'
import './home.css'
import Nexttrip from '../../Components/Nexttrip/nexttrip';
import Explore from '../../Components/Explore/explore'
import Other from '../../Components/Other/other'
import Inspiration from '../../Components/Inspiration/inspiration'
import Dummy from '../../Components/dummy'
import Covid from '../../Components/Covid/covid'
import Save from '../../Components/Save/save'
import Discount from '../../Components/Discount/discount'
import Mail from '../../Components/Mail/mail'
import Before from '../../Components/Before/before'
import Footer from '../../Components/Footer/footer'

export default function Home() {
  
  return (
    
        <div>
          <Navbar/>
          <Header/>
          <div className="homeContainer">
            <Covid/>
            <Save/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <div>
            <h1 className="homeTitle">Explore India</h1>
            <p>These popular destinations have a lot to offer</p>
            </div>
            <Explore/>
            <Featured/>
            <div>
            <h1 className="homeTitle">Where to go for your next trip?</h1>
            <p>Take our quiz to find your perfect trip</p>
            </div>
            <Nexttrip/>
            <div>
            <h1 className="homeTitle">Get inspiration for your next trip</h1>
            <Inspiration/>
            </div>
            <div>
            <h1 className="homeTitle">Connect with other travellers</h1>
            <Other/>
            </div>
            
            <Discount/>
            <Mail/>
            <Before/>
            <Footer/>
            <Dummy/>
          </div>
        </div>
      
  )
}
