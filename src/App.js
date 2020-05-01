import React from 'react';
// import logo from '../src/Library-for-All-Badge-Logo-Black-300x300.png';
import {Route,Switch,BrowserRouter} from'react-router-dom';
// import {browserHistory} from 'react-router'
import './App.css';
import Login from '../src/component/User/Login_page';
import Bookdisplay from './component/Book/Bookdisplay'
import Signup from './component/User/Signup_page'
import Home from './Home'


// import { render } from '@testing-library/react';


 class App extends React.Component{

   render(){
  return (
    <BrowserRouter>
      <div className='App'>
      
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route path='/Book/:title' component={Bookdisplay}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Signup/>

        </Switch>
      </div>
    </BrowserRouter>
  );
   }
}

export default App
