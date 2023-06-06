import React from 'react'
import '../../css/innernav.scss'
import { NavLink } from 'react-router-dom'

const PeopleNav = () => {
  return (
    <div className="container">
    <div className="rsnavbar">
        <div className="rscontainer">
            <div className={`rsnav-elements`}>
                <ul>
                    <li>
                        <NavLink to="/teams" end><div className='rsselectbox'> <span>Postdoc Fellow</span> </div> </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/teams/phd"> <div className='rsselectbox'> <span>Ph.D.</span></div> </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/teams/mtech"> <div className='rsselectbox'> <span>M.Tech.</span></div> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/teams/alumini"> <div className='rsselectbox'> <span>Alumni</span></div> </NavLink> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PeopleNav