import React from 'react';
import {Link} from 'react-router-dom';
import Login from './LogLink';
import Logout from './Logoutlink';


const Navibar = ()=>{
    return(
        
        <nav className='nav-wrapper teal lighten-2'>
                <div className='container'>
                    <Link to= '/' className='brand-logo left white-text'>Library For All</Link>  
                    <Login/> 
                    <Logout/>        
                </div>

        </nav>
        
    )
}

export default Navibar