import React from'react'
import Notification from './Notification';
import Booklist from '../Book/Booklist'

class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <Booklist/>
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notification/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Dashboard