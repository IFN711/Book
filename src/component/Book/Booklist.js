import React from 'react'
import {Link} from 'react-router-dom';



export default function Booklist(){
    return(
        <div className='Book-list'>
                    <div className='card z-depth-0 book-summary' style={{marginBottom:-35}} >
                        <div className='card-content grey-text text-darken-3'>
                        <Link to='/Book/20 Busy Little Ants'>
                        <img className='Cover' alt='asd'src={require('./20 Busy Little Ants/146English/146 20 Busy Little Ants_reflow/OEBPS/Images/cover.jpg')}/>
                        </Link>
                            <span className='card-title' style={{fontSize:15 ,fontWeight:'bold'}}>20 Busy Little Ants</span>
                            
                            <p style={{marginTop:-10}}>author is ___</p>

                        </div>
                    </div>
                    <div className='card z-depth-0 book-summary' style={{marginBottom:-35}}>
                        <div className='card-content grey-text text-darken-3'>
                        <Link to='/Book/How The Rooster Found His Sound'>
                        <img className='Cover' alt='asd'src={require('./How The Rooster Found His Sound/552 English/552 How The Rooster Found His Sound_reflow/OEBPS/Images/cover.jpg')}/>
                        </Link>
                            <span className='card-title' style={{fontSize:15,fontWeight:'bold'}}>How The Rooster Found His Sound</span>
                            
                            <p style={{marginTop:-10}}>author is ___</p>

                        </div>
                    </div>                    
                    <div className='card z-depth-0 book-summary' style={{marginBottom:-35}}>
                        <div className='card-content grey-text text-darken-3'>
                        <Link to='/Book/Tahlia the Tortoise'>
                        <img className='Cover' alt='asd'src={require('./Tahlia the Tortoise/527 English/527 Tahlia The Tortoise Finds An Umbrella_reflow/OEBPS/Images/cover.jpg')}/>
                        </Link>
                            <span className='card-title' style={{fontSize:15,fontWeight:'bold'}}>Tahlia the Tortoise</span>
                            
                            <p style={{marginTop:-10}}>author is ___</p>
                        </div>
                    </div>

        </div>
    )
}


