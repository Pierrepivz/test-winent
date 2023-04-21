import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Rdvcontact from './Rdvcontact.js';
import Schema from './Schema.js';
import Rdv from './Rdv.js';



function Methode() {

    
 



   

 
    return (
          <div className="" class="margin_bottom">
              

                        <div id="titre_second"class='column_items_center'>
                              
                              <h1title>Prendre rendez-vous</h1title>
                              <h2under></h2under>
                              <h2under2></h2under2>
                              <div class="note column_items_center">
                              
       
                              
                              <content> N'hésitez pas à prendre rendez-vous afin de m'exposer en<strong> 30 minutes </strong>votre situation professionnelle, et les raisons qui vous amènent à vouloir être accompagné(e).

C'est <strong>entièrement gratuit et sans aucun engagement</strong> de part et d'autre !    </content></div>
                              
                        </div>




                        <div class="row margin_left" >
      



      
      
      
            
            <div class="flex block" id="schema_step">
            
            <div id='box_graph' class="column_items_center">
      
            <div id="circle"></div>
            <div id="dropbar"></div>
            
      
            </div>
      
            
            
            <div class='column'>
            
            <div class='row'>
            
      
            <h2title>
            Prise de rendez-vous
            </h2title>
            <i class="fa-solid fa-calendar" id="icon"></i>
      
            </div>
      
      
            <div id='underline2'></div>
            <div id='box_content'>
            <content>Vous vous inscrivez pour un 1 er entretien <br />sous Teams  de 30 minutes sur le <br /><Link to='./offre'><a href='#'><t_orange>calendrier en ligne </t_orange></a></Link>
      selon vos disponibilités. <br/>
      C’est sans engagement de part et d’autre et entièrement gratuit.</content>
            </div>
      
      
            </div>
      
      
                    </div>

                    <div class="flex" id="schema_rdv">

              <div class='column'>
<div class="row">
<h2title>
Description de votre projet
<i class="fa-solid fa-mug-hot" id="icon"></i>
</h2title>
</div>
<div id='underline2'></div>
<div id='box_content'>
<content>Vous décrivez le contexte de l’entretien, du concours que vous voulez réussir, ou de votre
problème (coaching). <br/>
Nous évoquons ensemble votre objectif et vos contraintes. <br/>Ce faisant, nous faisons
connaissance ☕️</content>
</div>


</div>

<div id='box_graph' class="column_items_center">

      
      

      </div>
      
    </div>

    <div class="flex" id="schema_rdv">
      <div id='box_graph' class="column_items_center">

    
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      Proposition d’une offre
      
      </h2title>
      <i class="fa-solid fa-file" id="icon"></i>
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content><blue>Envie d’aller plus loin ensemble ?</blue><br/>
      Vous recevez sous 48h une proposition de séances de travail, avec un
objectif par séance, et selon un calendrier conforme à vos contraintes.</content>
      </div>


      </div>

      <br/><br/>
              </div>
                    
                    
                    </div>

                    



                    <div class="section block">
                        <div class="margin_left">
                        <h2title>Votre Rdv <i class="fa-solid fa-comment" id="icon"></i></h2title>
                        <div id="underline"></div>
                        </div>
                  </div>















<br/><br/>



<Rdv />

















          </div>
    );
}

export default Methode;