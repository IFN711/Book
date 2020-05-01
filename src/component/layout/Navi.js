import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logoutlink';


const Navibar = ()=>{
    return(
        
        <nav className='nav-wrapper teal lighten-2'>
                <div className='container'>
                    <Link to= '/home' className='brand-logo left white-text'>Home page</Link>  > 
                    <Logout/>        
                </div>

        </nav>
        
    )
}

export default Navibar