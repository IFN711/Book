import React from 'react'
import {NavLink} from 'react-router-dom';

const Login =() =>{
    return(
        <ul className='right'>
            <li><NavLink to='/'>New project</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>
    )

}

export default Login