import React,{Component} from 'react'
import './explore.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Explore extends Component {
    render(){
        const settings = {
            className: "center",
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: false,
            afterChange: function(index) {
              
            }
          };
  return (
    
    <div className="exploreList">
        <Slider {...settings}>
        <div className="exploreListItem">
            <img src="https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>Goa</h1>
            <h2>5,245 properties</h2>
            </div>
            </div>

            <div className="exploreListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/684682.webp?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>Lonavala</h1>
            <h2>750 properties</h2>
            </div>
        </div>
        <div className="exploreListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>New Delhi</h1>
            <h2>2,913 properties</h2>
            </div>
        </div>
        
        <div className="exploreListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>Mumbai</h1>
            <h2>1,651 properties</h2>
            </div>
        </div>
        <div className="exploreListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>Bangalore</h1>
            <h2>2,045 properties</h2>
            </div>
        </div>
        <div className="exploreListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/684716.webp?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>Manali</h1>
            <h2>873 properties</h2>
            </div>
        </div>
        <div className="exploreListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/684880.webp?k=e39b50ba8be4c6c6c413c963af6e0d452dbe0decaf72e13f9f798e65de549107&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>Rishikesh</h1>
            <h2>481 properties</h2>
            </div>
        </div>
        <div className="exploreListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/684732.webp?k=54bd15fa6a54076487fcca512f688f679d25b711afc6e4321904c1528dc5f731&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>Mussorie</h1>
            <h2>339 properties</h2>
            </div>
        </div>
        <div className="exploreListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/684914.webp?k=bf24dd1161b27ac4c03f1eee31fd97c9c75c69b04dbbec19400702b182321268&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>Shimla</h1>
            <h2>628 properties</h2>
            </div>
        </div>
        <div className="exploreListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/684919.webp?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=" alt="" className="exploreListImg"/>
            <div className="exploreListTitle">
            <h1>Ooty</h1>
            <h2>471 properties</h2>
            </div>
        </div>
        </Slider>
       </div>
    
  )
}}
