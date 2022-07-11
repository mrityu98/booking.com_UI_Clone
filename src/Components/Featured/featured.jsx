import React from 'react'
import './featured.css';
export default function Featured() {
  return (
    <div className="featured">
        <div className="featuredOne">
        <div className="featuredItem">
            <img src="https://www.bighospitality.co.uk/var/wrbm_gb_hospitality/storage/images/_aliases/wrbm_large/publications/hospitality/bighospitality.co.uk/article/2020/10/20/government-forces-greater-manchester-into-tier-3-coronavirus-lockdown-andy-burnham-boris-johnson/3591099-1-eng-GB/Government-forces-Greater-Manchester-into-Tier-3-Coronavirus-lockdown-Andy-Burnham-Boris-Johnson.jpg" alt="" className="featuredImg1"/>
            <div className="featuredTitle">
            <h1>Manchester, United Kingdom</h1>
            <h2>1087 properties</h2>
            </div>
            </div>
            
            <div className="featuredItem">
            <img src="https://www.gamblinginsider.com/img/news/FlutterLeeds.jpg" alt="" className="featuredImg1"/>
            <div className="featuredTitle">
            <h1>Leeds, United Kingdom</h1>
            <h2>382 properties</h2>
            </div>
        </div>
        </div>

        <div className="featuredTwo">
        <div className="featuredItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/76/5c/2e/minster-church-of-st.jpg?w=500&h=500&s=1" alt="" className="featuredImg2"/>
            <div className="featuredTitle">
            <h1>Reading, United Kingdom</h1>
            <h2>279 properties</h2>
            </div>
        </div>
        
        <div className="featuredItem">
            <img src="https://www.wandertooth.com/wp-content/uploads/2017/07/Things-to-Do-in-Newcaslte00001.jpg" alt="" className="featuredImg2"/>
            <div className="featuredTitle">
            <h1>Newcastle upon Tyne, United Kingdom</h1>
            <h2>387 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://mediaim.expedia.com/destination/1/5f73367ed6707dac5447ccf2658742a9.jpg?impolicy=fcrop&w=536&h=384&q=high" alt="" className="featuredImg2"/>
            <div className="featuredTitle">
            <h1>Birmingham, United Kingdom</h1>
            <h2>1007 properties</h2>
            </div>
        </div>
        </div>
        </div>
  )
}
