import React from 'react';
// import logo from '../src/Library-for-All-Badge-Logo-Black-300x300.png';
import {Route,Switch,BrowserRouter} from'react-router-dom';
// import {browserHistory} from 'react-router'
import './App.css';
import Login from '../src/component/User/Login_page';
import Bookdisplay from './component/Book/Bookdisplay'
import Signup from './component/User/Signup_page'
import Home from './Home'
import Profile from './component/User/profile'
import Translate from './component/Action/translate'
import Review from './component/Action/review'
import Version from './component/Action/version'
import Text_area from './component/Action/textarea'
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
          <Route path='/profile' component={Profile}/>
          <Route path='/translate' component={Translate}/>
          <Route path='/review' component={Review}/>
          <Route path='/version/:title' component={Version}/>
          <Route path='/textarea/:title' component={Text_area}/>
        
          <Signup/>
        </Switch>
       
      </div>
    </BrowserRouter>
  );
   }
}

export default App
