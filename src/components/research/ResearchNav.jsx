import { NavLink } from 'react-router-dom'
import '../../css/research/researchnav.scss'

const ResearchNav = () =>{
    return (
        <div className="rsnavbar">
            <div className="rscontainer">
                <div className={`rsnav-elements`}>
                    <ul>
                        <li>
                            <NavLink to="/research/phd"> <div className='rsselectbox'>Ph.D.Theses</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/research/mtech"> <div className='rsselectbox'>M. Tech. <br /> Dissertation</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/research/projects"> <div className='rsselectbox'>Projects</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/research/btech"> <div className='rsselectbox'>B.Tech. <br /> Projects</div> </NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResearchNav