import { NavLink } from 'react-router-dom'
import '../../css/innernav.scss'

const PbNavigation = () =>{
    return (
        <div className="container">
        <div className="rsnavbar">
            <div className="rscontainer">
                <div className={`rsnav-elements`}>
                    <ul>
                        <li>
                            <NavLink to="/pb" end><div className='rsselectbox'> <span>Books</span> </div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/pb/bc"> <div className='rsselectbox'> <span>Book Chapters</span></div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/pb/patents"> <div className='rsselectbox'> <span>Patents</span></div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/pb/ic"> <div className='rsselectbox icbox'> <span>International Conference</span></div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/pb/ij"> <div className='rsselectbox ijbox'> <span>International Journals</span></div> </NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PbNavigation