import React from 'react'
import {NavLink} from 'react-router-dom';

const Logout =() =>{
    return(
        <ul className='right'>
            <li><NavLink to='/signup'>Sign up</NavLink></li>
            <li><NavLink to='/login'>Log in</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>
    )

}

export default Logout