import React from 'react'
import { Link } from 'react-router-dom';
import './searchResults.css'
export default function SearchResults({spot,options,date})  {

    return (
      <div className='resultParent'>
    <div className='resultTitle'>
        <h3>{`${spot}`}: 157 properties found</h3>
        <div className='map'>
            <button>Show on map</button>
        </div>
     </div>
     <div className='outer'>
    <div className='resultItem'>
        <Link to="hermitage" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/332455700.webp?k=b5a715956985cf6b16d5e8b3cf5f5aaa7d582fc4903607f6d18e9a27d1e3bc28&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="hermitage" state={spot}><h1>Hermitage Resort</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda" >Show on map</a><span className='spangap'>1.3km from centre</span></span>
        <div className='resultDesc'>Featuring a terrace and views of mountain, Hermitage Resort is located in {`${spot}`}, 6 km from Tiger Hill.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Very good</span>
            <button className='resultRating'>8.2</button>
            
        </div>
        <span className='resultReview'>13 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="ramada" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/262272635.webp?k=e87e7a639f321e8470d79e35ce35b259288d08ebc1195a39f7a601113f08b30d&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="ramada" state={spot}><h1>Ramada by Wyndham {`${spot}`}</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda">Show on map</a><span className='spangap'>200m from centre</span></span>
        <div className='resultDesc'>Located in {`${spot}`}, 11 km from Tiger Hill, Ramada by Wyndham {`${spot}`} features rooms with mountain views and free Wi-Fi.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Very good</span>
            <button className='resultRating'>8.3</button>
            
        </div>
        <span className='resultReview'>256 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="sherpa" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/277770653.webp?k=912f0a521b431a50047190a29081f2894db5e35ff7471582ee86c3521619352b&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="sherpa" state={spot}><h1>Sherpa Residency and Farmhouse</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda">Show on map</a><span className='spangap'>7.6km from centre</span></span>
        <div className='resultDesc'>Set in {`${spot}`}, Sherpa Residency and Farmhouse offers free WiFi, and guests can enjoy a restaurant, a shared lounge and a garden.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Good</span>
            <button className='resultRating'>7.2</button>
            
        </div>
        <span className='resultReview'>5 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="springburn" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/358500532.webp?k=aaab5567ac4f35986f50bf25c1bf0e7dad48be560fbbb7b79dac964f6452f59f&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="springburn" state={spot}><h1>Muscatel Springburn</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda">Show on map</a><span className='spangap'>450m from centre</span></span>
        <div className='resultDesc'>Set within 5 km of Tiger Hill and 1.5 km of Japanese Peace Pagoda, Muscatel Springburn features rooms in {`${spot}`}.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Very good</span>
            <button className='resultRating'>8.0</button>
            
        </div>
        <span className='resultReview'>75 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer' >
    <div className='resultItem'>
        <Link to="summitswiss" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/228987397.webp?k=ebbb06688f4509c33f6a30680279df74385e797761f0e82d9e2b1bec6c85a704&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="summitswiss" state={spot}><h1>Summit Swiss Heritage Resort & Spa</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda">Show on map</a><span className='spangap'>250m from centre</span></span>
        <div className='resultDesc'>Located in {`${spot}`}, 11 km from Tiger Hill, Summit Swiss Heritage Resort & Spa provides accommodation with a restaurant, free private parking, a shared lounge and a garden.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Very good</span>
            <button className='resultRating'>8.0</button>
            
        </div>
        <span className='resultReview'>257 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="touristlodge" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/261867800.webp?k=d6496e74b172dd9369d00a50f14c9cbd4c224f92d4e71e069e122a12f3bd3e7b&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="touristlodge" state={spot}><h1>{`${spot}`} Tourist Lodge</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda">Show on map</a><span className='spangap'>1.3km from centre</span></span>
        <div className='resultDesc'>Situated 6 km from Tiger Hill,Tourist Lodge features accommodation with a restaurant, a garden and a 24-hour front desk for your convenience.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Superb</span>
            <button className='resultRating'>9.0</button>
            
        </div>
        <span className='resultReview'>1 review</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="arcadia" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/273132751.webp?k=3a44a32b0c3c1f2bace68fe742e311e29b2d1301c03cdfcf53ea3812e2891f2e&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="arcadia" state={spot}><h1>Arcadia Heritage Resort</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda">Show on map</a><span className='spangap'>1.5km from centre</span></span>
        <div className='resultDesc'>Situated in {`${spot}`}, within 9 km of Tiger Hill and 2.8 km of Himalayan Mountaineering Institute And Zoological Park, Arcadia Heritage Resort features accommodation with a garden and free WiFi...</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Superb</span>
            <button className='resultRating'>9.0</button>
            
        </div>
        <span className='resultReview'>147 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="valleyview" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/289737456.webp?k=df0ee91ecea3351aaaf6840245ea7d85cc2f10fc26887f0097b135e2bf8422a3&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="valleyview" state={spot}><h1>Valley View Residency</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda" >Show on map</a><span className='spangap'>300m from centre</span></span>
        <div className='resultDesc'>Valley View Residency has mountain views, free WiFi and free private parking, set in {`${spot}`}, 11 km from Tiger Hill.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Fabulous</span>
            <button className='resultRating'>8.7</button>
            
        </div>
        <span className='resultReview'>8 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="elgin" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/237058918.webp?k=36fcf85faf198810d088cba09b852914e71574c5c44c6947cf13e4c7af0ce364&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="elgin" state={spot}><h1>The Elgin,{`${spot}`} </h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda">Show on map</a><span className='spangap'>1.0km from centre</span></span>
        <div className='resultDesc'>Featuring a garden and a terrace, The Elgin Hotel offers elegant accommodation in {`${spot}`}.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Good</span>
            <button className='resultRating'>7.8</button>
            
        </div>
        <span className='resultReview'>144 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
  
    <div className='outer'>
    <div className='resultItem'>
        <Link to="bluehorizon" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/186686702.webp?k=196148eda69a7a4df723f2e6d6193d017fe8006938742ccba3f8eea7288b3485&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="bluehorizon" state={spot}><h1>Blue Horizon Homestay
</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda">Show on map</a><span className='spangap'>1.6km from centre</span></span>
        <div className='resultDesc'>Located just 9 km from Tiger Hill, Blue Horizon Homestay provides accommodation in {`${spot}`} with access to a shared lounge, a garden, as well as room service.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Exceptional</span>
            <button className='resultRating'>905</button>
            
        </div>
        <span className='resultReview'>45 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="sradhanjali" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/325529036.webp?k=669c2ba072bd91cf00d4d2faf1641bbb2276d3627daf355cc26a07c4092a46d5&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="sradhanjali" state={spot}><h1>SRADHANJALI HOTEL</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda" >Show on map</a><span className='spangap'>200m from centre</span></span>
        <div className='resultDesc'>SRADHANJALI HOTEL is situated in {`${spot}`}, 5 km from Tiger Hill and 1.7 km from Happy Valley Tea Estate. Boasting family rooms, this property also provides guests with a terrace.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Good</span>
            <button className='resultRating'>7.3</button>
            
        </div>
        <span className='resultReview'>24 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="lilac" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/41192048.webp?k=18f9e183113c04b9ebb6844485a70c29609d939bc4c74c7c437e1d4341e2a529&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="lilac" state={spot} ><h1>Lilac Hotel 3rd Block</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda">Show on map</a><span className='spangap'>5.1km from centre</span></span>
        <div className='resultDesc'>Located in {`${spot}`}, Lilac Hotel, 3rd Block offers comfortable accommodation and a fitness centre. The hotel features free WiFi.</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Fabulous</span>
            <button className='resultRating'>8.8</button>
            
        </div>
        <span className='resultReview'>128 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>
    <div className='outer'>
    <div className='resultItem'>
        <Link to="itc" state={spot}><img src="https://cf.bstatic.com/xdata/images/hotel/square200/252849435.webp?k=7b87106b12b57f0afcf72cee0cc855c39ed146272db168282c0c080be6d06a52&o=&s=1" alt="" className='resultImg'/></Link>
        <div className='itemDesc'>
        <Link to="itc" state={spot}><h1>ITC Windsor, a Luxury Collection Hotel</h1></Link>
        <span><a href="#">{`${spot}`}</a><a href="#" id="seconda" >Show on map</a><span className='spangap'>2.6km from centre</span></span>
        <div className='resultDesc'>Set just 3 km away from the business district, ITC Windsor, a Luxury Collection Hotel has 240 rooms including suites</div>   
    </div>
    <div className='resultRatings'>
        <div className='Rating'>
            <span className='resultCat'>Very good</span>
            <button className='resultRating'>8.2</button>
            
        </div>
        <span className='resultReview'>1312 reviews</span>
            <button className='resultPrices'>Show prices</button>
        </div>
    </div>
    </div>

    </div>

    )
  }

