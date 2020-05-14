import React from 'react'
import Navibar from '../layout/Navi';




export default function Bookdisplay(props){
    const title=props.match.params.title;
    return(
        <div>
            <Navibar/>
        <div className='container section Book-detail'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>{title}</span>
                    <p> (The content of book will be shown here)</p>
                    
                </div>
            </div>
            <div className='card-actions grey lighten-4 grey-text'>
                <div>Posted</div>
                <div>2020.01.01</div>
            
            </div>

           
        </div>
        </div>
    )
}