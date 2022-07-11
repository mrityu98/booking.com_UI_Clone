import React,{Component} from 'react'
import './propertyList.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default class  PropertyList extends Component {
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
    <div className="propertyList">
        <Slider {...settings}>
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" className="propertyListImg"/>
            <div className="propertyListTitle">
            <h1>Hotels</h1>
            <h2>869,625 hotels</h2>
            </div>
            </div>
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Apartments</h1>
            <h2>864,236 apartments</h2>
            </div>
            </div>
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Resorts</h1>
            <h2>17,949 resorts</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
        
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Villas</h1>
            <h2>454,325 villas</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Cabins</h1>
            <h2>34,910 cabins</h2>
            </div>
            </div>

        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Cottages</h1>
            <h2>149,914 cottages</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Glamping</h1>
            <h2>12,704 glamping sites</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Serviced Apartments</h1>
            <h2>34,572 serviced apartments</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-holidayhomes_300/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Holiday homes</h1>
            <h2>454,325 holiday homes</h2>
            </div>
            </div>
       
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Guest Houses</h1>
            <h2>105,549 guest houses</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_hostels/cd5489c0d29025a9ca9daa602ac1581ba042bc69.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Hostels</h1>
            <h2>16,652 hostels</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_motels/9673cd1b55cbc1e1cdaeae09d87d16aa9d84d5f7.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Motels</h1>
            <h2>13,133 motels</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_bed_and_breakfast/a6a4a3f904284337c187771d94a4bb6169b168d7.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>B&Bs</h1>
            <h2>202,982 B&Bs</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_ryokans/e4f002b9907a13a55b4e10b85fdd5d8ea436eb2d.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Ryokans</h1>
            <h2>2,068 ryokans</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_riad/ec1ea267f18d830b68ca76a666734f8e93a1853d.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Riads</h1>
            <h2>1,202 riads</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Holiday parks</h1>
            <h2>5,811 holiday parks</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_home_stay/9499c7a4ab5a599218da6d49422dae03384013e3.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Homestays</h1>
            <h2>139,555 homestays</h2>
            </div>
            </div>
       
        <div className="propertyListItem">
           
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_campsite/6d40bef46964b8841a84cd88793fc8f0fa6663d9.jpg" alt="" className="propertyListImg"/>
           
            <div className="propertyListTitle">
            <h1>Campsites</h1>
            <h2>9,598 campsites</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_country_house/6ffa05069b50124c993f00c998f1dfc66999c93f.jpg" alt="" className="propertyListImg"/>
           
            <div className="propertyListTitle">
            <h1>Country houses</h1>
            <h2>12,243 country houses</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_farmhouses/9aeedf4b943c722367e5e901681463bf543c5afd.jpg" alt="" className="propertyListImg"/>
           
            <div className="propertyListTitle">
            <h1>Farm stays</h1>
            <h2>11,124 farm stays</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_boats/5b974434f444153092a0249af70b3678c2e22e7c.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Boats</h1>
            <h2>1,482 boats</h2>
            </div>
            </div>
        
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_tented_camp/adf0677a5fd80032dc577fad07ad528312dfcadf.jpg" alt="" className="propertyListImg"/>
            
            <div className="propertyListTitle">
            <h1>Luxury tents</h1>
            <h2>3,953 luxury tents</h2>
            </div>
            </div>
       
        <div className="propertyListItem">
           
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_self-catering/7a0939f5a5338faf255840e895953a522335434a.jpg" alt="" className="propertyListImg"/>
           
            <div className="propertyListTitle">
            <h1>Self catering accomodation</h1>
            <h2>754,077 self catering properties</h2>
            </div>
            </div>
      
        <div className="propertyListItem">
            
            <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_tiny_house/953faca2af408d667f469ecd3d2b4f1687d7b07f.jpg" alt="" className="propertyListImg"/>
           
            <div className="propertyListTitle">
            <h1>Tiny houses</h1>
            <h2>512 tiny houses</h2>
            </div>
            </div>
            </Slider>
        </div>
       
    
  )
}}
