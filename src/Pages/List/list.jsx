import React, { useState} from 'react'
import {format} from "date-fns";
import { DateRange } from 'react-date-range';
import {useLocation } from 'react-router-dom'
import Before from '../../Components/Before/before'
import Dummy from '../../Components/dummy'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
import Mail from '../../Components/Mail/mail'
import Navbar from '../../Components/Navbar/navbar'
import SearchBox from '../../Components/SearchBox/searchBox'
import SearchResults from '../../Components/SearchResults/searchResults'
import './list.css'
export default function List() {
  const loc=useLocation();
    const [openDate,setOpenDate]=useState(false);
    const [dest,setDes]=useState(loc.state.destination);
    const [options,setOptions] = useState(loc.state.options);
    const [date, setDate] = useState(loc.state.date);
  return (
    <div className='listHead'>
      <Navbar />
      <Header type={"list"} />
      <div className='listContainer'>
        <div className='leftList'>
             <SearchBox />
          <div className='filterBox'>
            <div className='filterBoxContainer'>
              <div className='filterDiv'>
                <div>
                  <h3>Filter by:</h3>
                </div>
              </div>
              <div className='filterDiv'>
                <div>
                  <h3>Health & safety</h3>
                </div>
                <div className='collection'>
                  <input type="checkbox" />
                  <span id="filter">Properties that take health & safety measures</span>
                </div>
              </div>
              <div className='filterDiv'>
                <div >
                  <h3>Popular filters</h3>
                </div>
                <div className='collection'>
                  <input type="checkbox" />
                  <span id="filter">Hot tub/Jacuzzi</span>
                </div>
                <div className='collection'>
                  <input type="checkbox" />
                  <span id="filter">Hotels</span>
                </div>
                  <div className='collection'>
                    <input type="checkbox" />
                    <span id="filter">Resorts</span>
                  </div>
                  <div className='collection'>
                    <input type="checkbox" />
                    <span id="filter">Children's playground</span>
                  </div>
                  <div className='collection'>
                    <input type="checkbox" />
                    <span id="filter">Guest houses</span>
                  </div>
                  <div className='collection'>
                    <input type="checkbox" />
                    <span id="filter">5 stars</span>
                  </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Spa facilities</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Walking tours</span>
                    </div>
                  </div>
                  <div className='filterDiv'>
                    <div>
                      <h3>Sustainability</h3>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Travel Sustainable properties</span>
                    </div>
                  </div>

                  <div className='filterDiv' >
                    <div>
                      <h3>Star rating</h3>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">1 star</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">2 star</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">3 star</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">4 star</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">5 star</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Unrated</span>
                    </div>
                  </div>
                  <div className='filterDiv'>
                    <div>
                      <h3>Fun things to do</h3>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Walking tours</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Hiking</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Bike tours</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Cycling</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Tour or class about local culture</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Evening entertainment</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">5 star</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Games room</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Spa and wellness centre</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Massage</span>
                    </div>
                    <div className='collection' >
                      <input type="checkbox" />
                      <span id="filter">Children's playground</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Happy hour</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">5 star</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Spa facilities</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Spa lounge/relaxation area</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Bicycle rental (additional charge)</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Spa/wellness packages</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Beauty Services</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Make up services</span>
                    </div>
                    <div className='collection' >
                      <input type="checkbox" />
                      <span id="filter">Back massage</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Hot tub/Jacuzzi</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Body treatments</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Couples massage</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Water park</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Steam room</span>
                    </div>
                    <div className='collection'>
                      <input type="checkbox" />
                      <span id="filter">Beach</span>
                    </div>
                  </div>
                  <div className='filterDiv'>
                    <div>
                      <h3>Review score</h3>
                    </div>
                    <div className='reviewBox'>
                      <div className='reviewBoxUpper'>
                      <input type="checkbox" />
                      </div>
                      <div className='reviewBoxLower'>
                      <span id="filter">Superb: 9+</span>
                      <p>Based on guest reviews</p>
                    </div>
                    </div>
                      <div className='reviewBox'>
                      <div className='reviewBoxUpper'>
                        <input type="checkbox" />
                        </div>
                        <div className='reviewBoxLower'>
                        <span id="filter">Very Good: 8+</span>
                        <p>Distance from centre of Darjeeling</p>
                      </div>
                    </div>
                      <div className='reviewBox'>
                      <div className='reviewBoxUpper'>
                        <input type="checkbox" />
                      </div>
                      <div className='reviewBoxLower' >
                        <span id="filter">Good: 7+</span>
                        <p>Based on guest reviews</p>
                      </div>
                      </div>
                      <div className='reviewBox'>
                      <div className='reviewBoxUpper'>
                        <input type="checkbox" />
                        </div>
                        <div className='reviewBoxLower'>
                        <span id="filter">Pleasant: 6+</span>
                        <p>Based on guest reviews</p>
                      </div>
                      </div>
                    </div>
                    <div className='filterDiv'>
                      <div >
                        <h3>Brands</h3>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">OYO Rooms</span>
                      </div>
                      <div className='collection' >
                        <input type="checkbox" />
                        <span id="filter">Ramada</span>
                      </div>
                    </div>
                    <div className='filterDiv'> 
                      <div>
                        <h3>Property accessibility</h3>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Wheelchair accessible</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Toilet with grab rails</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Higher level toilet</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Lower bathroom sink</span>
                      </div>
                    </div>
                <div className='filterDiv'>
                      <div>
                        <h3>Room accessibility</h3>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Entire unit located on ground floor</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Upper floors accessible by elevator</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Entire unit wheelchair accessible</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Toilet with grab rails</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Adapted bath</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Roll-in shower</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Walk-in shower</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Raised toilet</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">
                          Lowered sink</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Emergency cord in bathroom</span>
                      </div>
                      <div className='collection'>
                        <input type="checkbox" />
                        <span id="filter">Shower chair</span>
                        
                      </div>
              </div>
                  </div>
                </div>
                </div>
            
           
                   <SearchResults spot={dest} options={options} date={date}/>
               
                
                
               
                   </div>
        <Mail/>
        <Before/>
        <Footer/>
        <Dummy/>
        </div>
        
       
        
        
  )
}
