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
                            <NavLink to="/pb/books"> <div className='rsselectbox'>Books</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/pb/bc"> <div className='rsselectbox'>Book Chapters</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/pb/patents"> <div className='rsselectbox'>Patents</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/pb/ic"> <div className='rsselectbox icbox'>International Conference</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/pb/ij"> <div className='rsselectbox ijbox'>International Journals</div> </NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PbNavigation