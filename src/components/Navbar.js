import React from 'react'
import {FaAlignRight} from "react-icons/fa"
import PageLinks from "../constants/links"
import {Link} from "gatsby"
import "../css/main.css";
import dev from "../images/dev.png";


export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
                <h1>Jyoti's website</h1>
                {/* <img src={dev} alt="dev"/> */}
                <button type="button" className='toggle-btn'>
                  <FaAlignRight></FaAlignRight>
                </button>
            </div>
            <PageLinks styleClass="nav-links"></PageLinks>
        </div>
    </nav>
  )
}
