import { NavLink } from 'react-router-dom'
import '../css/navbar.scss'




const Navbar = () =>{

    return (
        <div className="navbar">
            <div className="container">
                <div className={`nav-elements`}>
                    <ul>
                        <li>
                            <NavLink to="/"> <div className='selectbox'>Profile</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/myorders"> <div className='selectbox'>Books</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/register"> <div className='selectbox'>Research</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/login"> <div className='selectbox'>Gallery</div> </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/login"> <div className='selectbox'>International Affairs</div> </NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar