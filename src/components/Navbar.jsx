import { NavLink,useLocation } from 'react-router-dom'
import '../css/navbar.scss'
import React, { useState } from "react";


const Navbar = () =>{
    const { pathname } = useLocation();
    const [currentPage , setCurrentPage] = useState("Profile");
    console.log(pathname)
    const [toggleMenu, setToggleMenu] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };
    
    return (
        <div className="navbar">
            <div className="image"></div>
            <div className="mobile-box">
                <h6>{currentPage}</h6>
                <button className="toggle-button" onClick={()=>{setToggleMenu(!toggleMenu)}}>
                    {toggleMenu ? <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.66211" y="0.33252" width="29" height="4" rx="2" transform="rotate(45 3.66211 0.33252)" fill="#2D5186"/>
                        <rect x="24.334" y="2.82861" width="29" height="4" rx="2" transform="rotate(135 24.334 2.82861)" fill="#2D5186"/>
                        </svg> : <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="29" height="4" rx="2" fill="#2D5186"/>
                        <rect y="8" width="29" height="4" rx="2" fill="#2D5186"/>
                        <rect y="16" width="29" height="4" rx="2" fill="#2D5186"/>
                        </svg>
                    }
                </button>
            </div>
            <div className={toggleMenu ? "navcontainer show-nav" : "navcontainer"}>
                <div className= {toggleMenu ? "nav-elements show-nav" : "nav-elements"}>
                    <ul >
                        <li>
                            <NavLink to="/"> <div className='selectbox'>Profile</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/teams"> <div className='selectbox'>Teams</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/research" > <div className='selectbox'>Research</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/pb"> <div className='selectbox'>Publications</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/facilities"> <div className='selectbox'>Facilities</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/gallery"> <div className='selectbox'>Gallery</div> </NavLink> 
                        </li>
                        <li>
                            <div onClick={goToTop} className='selectbox contact-button'>Contact</div>
                            
                        </li>
                    </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar