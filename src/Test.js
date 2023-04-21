import React from "react";
import './Test.css';
import './Test2.css';
import Nav from './Nav.js';
import Contact from './Contact.js';
import Blog from './blog.js';
import Homepage from './Homepage.js';
import Footer from './Footer.js';
import Offre from './Offre.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rdv from './Rdv.js';
import Methode from './Methode.js';
import Coach from './Coach.js';
import Home_Blog from './home_blog.js';
import Rdvconfirm from "./Rdvconfirm";
import Create_Blog from "./Create_blog.js";


function Test() 
{
  return (
    
    <Router>
    <div className="Test">
      <script src="https://kit.fontawesome.com/c298d004d1.js" crossorigin="anonymous"></script>
      
      <Nav />
      <Switch>
      <Route path='/home'>
      
      <Homepage />

      </Route>

      <Route path='/offre'>
      
      <Offre />

      </Route>

      <Route path='/rdv'>
      
      <Rdv />

      </Route>

      <Route path='/Methode'>
      
      <br /><br /><br /><br /><br />

      <Methode/>

      </Route>

      <Route path='/confirmation'>

        <br /> <br /><br /><br /><br /><br /><br />
      
      <Rdvconfirm/>
      
      </Route>


      <Route path='/contact'>
      
      <Contact />

      </Route>

      <Route path='/coach'>
      
      <Coach />

      </Route>

      <Route path='/blog'>
      
      <Blog />

      </Route>

      <Route path='/create_blog'>
      
      <Create_Blog />

      </Route>

      <Route path='/Actual'>
      
      <Home_Blog />

      </Route>

      </Switch>


      <Footer />
      
      
    </div>
    </Router>
  );
}

export default Test;
