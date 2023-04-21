/*<img src={logo} className="win-logo" alt="logo" />*/
import React, { useState } from "react";
import logo from './logo_negatif.svg';

function Footer() {

  

  

    return (
      <div className="Footer">
        

      <div class='line_between'>


      <img src={logo} className="nav-logo" alt="logo" />


        <div class="line_around">

        <div class="column_start" id="foot_content">
        <ftitle><content>Winentretien</content></ftitle>

        <f1>15 rue du Bourg Tibourg 75004 <strong>Paris</strong></f1>
        
        <f2>01 42 72 34 35</f2>
        <f3>contact@winentretien.com</f3>

        </div>

        <div class= "column_start" id="foot_content">
        <ftitle><content>Nous suivre</content></ftitle>

        <h2title><a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a></h2title>
        <h2title><a href="https://facebook.com"><i class="fa-brands fa-facebook"></i></a></h2title>
        <h2title><a href="https://linkedin.com"><i class="fa-brands fa-linkedin"></i></a></h2title>
        

        </div>

        

        <div class="column_start" id="foot_content">
        <ftitle><content>Mentions légales</content></ftitle>

        <f1>© WINENTRETIEN 2023 TOUS DROITS RÉSERVÉS</f1>
        <f2>TOUTS DROITS RESERVES</f2>
        <f3>CONDITIONS GENERALES DE VENTES</f3>

        </div>
        
        

        


        </div>
        
       </div>
      





      </div>
    );
  }
  
  export default Footer;