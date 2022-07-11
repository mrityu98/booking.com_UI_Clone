import React  from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed} from  '@fortawesome/free-solid-svg-icons'
import {faPlaneDeparture} from  '@fortawesome/free-solid-svg-icons'
import {faHotel} from  '@fortawesome/free-solid-svg-icons'
import {faCar} from  '@fortawesome/free-solid-svg-icons'
import {faTaxi} from  '@fortawesome/free-solid-svg-icons'
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {format} from "date-fns";
import './header.css';
import { useNavigate } from 'react-router-dom';

export default function Header({type}) {
  const navigate=useNavigate();
  const [destination,setDest]=useState("");
  const [openDate,setOpenDate]=useState(false);
  const [options,setOptions] = useState({adults:2,children:0,room:1});
  const [openOptions,setOpenOptions]=useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const clickHandler=()=>{
  navigate('/hotels',{state:{destination,date,options}})
  }
  const handleClick =(category,type)=>{
    setOptions((prev)=>{
      return {
        ...prev, [category]:type==='i'?options[category]+1:options[category]-1
      }
    });
  }
  return (
    
    <div className="header">
        <div className={type ==="list" ?"headerContainerInListMode":"headerContainer"}>
          <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Flight+Hotel</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPersonBiking} />
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
            </div>
        </div>

        {
          `${type}`!=="list" &&
          <>
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">Search low prices on hotels,homes and much more...</p>
        <div className="headerSearch">
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon"/>
          <input type="search" placeholder='Where are you going?' className='headerSearchInput' onChange={e=>setDest(e.target.value)}/>
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
          {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date} className="date"/>}
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faUser} className="headerIcon" />
          <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>{`${options.adults} adults ${options.children} children ${options.room} room`}</span>
          {openOptions && <div className="option">
            <div className="optionItem">
            <span className="optionText">Adults</span>
            <div className="counterContainer">
            <button className="optionCounter" disabled={options.adults === 1} onClick={()=>handleClick('adults','d')}>-</button>
            <span className="optionCounterValue">{options.adults}</span>
            <button className="optionCounter" onClick={()=>handleClick('adults','i')}>+</button>
            
           </div>
            </div>
            <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="counterContainer">
            <button className="optionCounter" disabled={options.children === 0} onClick={()=>handleClick('children','d')}>-</button>
            <span className="optionCounterValue">{options.children}</span>
            <button className="optionCounter" onClick={()=>handleClick('children','i')}>+</button>
            </div>
            </div>
            <div className="optionItem">
            <span className="optionText">Rooms</span>
            <div className="counterContainer">
            <button className="optionCounter" disabled={options.room === 1} onClick={()=>handleClick('room','d')}>-</button>
            <span className="optionCounterValue">{options.room}</span>
            <button className="optionCounter" onClick={()=>handleClick('room','i')}>+</button>
            </div>
            </div>
          </div>}
          </div>
          <div className="headerSearchItem">
          <button className="headerSearchButton" onClick={clickHandler}>Search</button>
          </div>
        </div></>}
        </div>
    </div>
  )
}
