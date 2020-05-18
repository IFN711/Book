import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logoutlink';
import {NavLink} from 'react-router-dom';


const Navibar = ()=>{
    return(
        
        <nav className='nav-wrapper  blue-grey darken-3'>
                <div className='container'>
                    <Link to= '/home' className='brand-logo left white-text'>Home page</Link>  > 
                    <Logout/>        
                    <NavLink to='/review' style={{float:"right"}}>Review</NavLink>
                    <NavLink to='/translate' style={{float:"right",marginRight:'20px'}}>Translate</NavLink>

                </div>

        </nav>
        
    )
}

export default Navibar