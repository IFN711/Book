import React from 'react';
// import logo from '../src/Library-for-All-Badge-Logo-Black-300x300.png';
import './App.css';
import Navibar from './component/layout/Navi';
import Booklist from './component/Book/Booklist'


// import { render } from '@testing-library/react';


 class Home extends React.Component{

   render(){
  return (
    
    <div>
    <Navibar/>
    <Booklist/>
    </div>
  )
   }
}

export default Home
