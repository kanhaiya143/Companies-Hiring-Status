import React from 'react';


import './Navigation.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';


const Navigation = ({logotitle}) => {
   
  return(
    <nav>
        <h1 className="logo">{logotitle}</h1>
       
        
       
          {/* < Route exact path='/home' component={Home}></ Route>
            < Route exact path='/about' component={About}></ Route>
            < Route exact path='/contact' component={Contact}></ Route> */}
        
        
       
        
            
        
    </nav>
  );
}

export default Navigation;
