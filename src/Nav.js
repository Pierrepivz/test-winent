
import logo from './logow2n.svg';
/*<img src={logo} className="win-logo" alt="logo" />*/
import { Link } from "react-router-dom";
import Homepage from './Homepage';
import Offre from './Offre';
function Nav() {
  /*<div class="sub-nav">
        
        <a>sous-lien 1</a>
        
        
        <a>sous-lien 2</a>
        
        
        <a>sous-lien 3</a>

        
        </div>*/
    /*function scrollto(){
      var position = window.pageYOffset;
      for (var i = position; i < 850; i++){
        setInterval(() => { window.scrollTo(0,i); }, 5000);
         
        
      
    }
    }*/
    
    
      
    return (
      <div className="Nav">
        

      <div class='navel'>
      
      <Link to='./home'>
        <div class="nav-logo">
        <img src={logo} className="nav-logo" alt="logo" />
            </div>
        </Link>

        <div class="nav-links">

        
        <ul>
        
        <a>La méthode</a>

        <div class="sub-nav">
        
        <a>sous-lien 1</a>
        
        
        <a>sous-lien 2</a>
        
        
        <a>sous-lien 3</a>

        
        </div>

        </ul>
        
        <ul>
        <Link to='./offre' >

        <a onClick={() => window.scrollTo(0,0)}>L'offre</a>

        <div class="sub-nav">
        
        
        <a onClick={() => window.scrollTo(0,850)}>CV</a>
        
        <a onClick={() => window.scrollTo(0,1800)}>offre 2</a>
        
        <a onClick={() => window.scrollTo(0,1800)}>offre 3</a>
        
        
        
        <Link to='./Methode'>

        <a onClick={() => window.scrollTo(0,0.0)}>Prendre rdv</a>
        </Link>
        </div>

       </Link>
        </ul>
        
        <ul>
        <a>La coach</a>
        <div class="sub-nav">
        
        <a>sous-lien 1</a>
        
        
        <a>sous-lien 2</a>
        
        
        <a>sous-lien 3</a>

        
        </div>
        </ul>

        <ul>
          <Link to='./Actual'>
        <a >Actualités</a>
          </Link>
        
        </ul>

        <ul>
          <Link to="./contact">
        <a>Contact</a>
        </Link>
        </ul>
        </div>
        
       </div>
      





      </div>
    );
  }
  
  export default Nav;