import React from 'react'




export default function Bookdisplay(props){
    const title=props.match.params.title;
    return(
        <div className='container section Book-detail'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>{title}</span>
                    <p>dasdasdasdasdsadasdasds</p>
                    
                </div>
            </div>
            <div className='card-actions grey lighten-4 grey-text'>
                <div>Posted</div>
                <div>2020.01.01</div>
            
            </div>

           
        </div>
    )
}