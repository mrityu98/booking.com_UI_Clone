import React from 'react'
import './navbar.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <span className="logo">Booking.com</span>
            <div className="navItems">
              <div classname="navItemContainer">
                <span id='navSpan'>INR</span>
              </div>
              <div classname="navItemContainer">
                <img src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png" alt="" className='navbarImg'/>
              </div>
                <div classname="navItemContainer">
                <FontAwesomeIcon icon={faCircleQuestion} />
                </div>
                <div classname="navItemContainer">
                <button className="navButtonList">List your property</button>
                </div>
                <div classname="navItemContainer">
                <button className="navButton">Register</button>
                </div>
                <div classname="navItemContainer">
                <button className="navButton">Sign in</button>
                </div>
            </div>
        </div>
    </div>
  )
}
