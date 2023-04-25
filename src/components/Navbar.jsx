import { NavLink,useLocation } from 'react-router-dom'
import '../css/navbar.scss'

const Navbar = () =>{
    const { pathname } = useLocation();
    console.log(pathname)
    return (
        <div className="navbar">
            <div className="image"></div>
            <div className="navigationbar">
                <div className="navcontainer">
                    <div className={`nav-elements`}>
                        <ul>
                            <li>
                                <NavLink to="/"> <div className='selectbox'>Profile</div> </NavLink> 
                            </li>
                            <li>
                                <NavLink to="/myorders"> <div className='selectbox'>Teams</div> </NavLink> 
                            </li>
                            <li>
                                <NavLink to="/research" > <div className='selectbox'>Research</div> </NavLink> 
                            </li>
                            <li>
                                <NavLink to="/pb"> <div className='selectbox'>Publications</div> </NavLink> 
                            </li>
                            <li>
                                <NavLink to="/login"> <div className='selectbox'>Facilities</div> </NavLink> 
                            </li>
                            <li>
                                <NavLink to="/gallery"> <div className='selectbox'>Gallery</div> </NavLink> 
                            </li>
                            <li>
                                <NavLink to="/login"> <div className='selectbox'>Contact</div> </NavLink> 
                            </li>
                        </ul>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar