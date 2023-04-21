
import { Link } from 'react-router-dom';



function Schema() {


      function reveal() {
            var reveals = document.querySelectorAll(".reveal");
          
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }
          
          window.addEventListener("scroll", reveal);


    return (
      <div className="schema column_items_center reveal">

      

          
<div class="flex block">
      



<div id="step_line"></div>


      
      
      
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
      <content>Vous vous inscrivez pour un 1 er entretien sous Teams de 30 minutes sur le <Link to='./offre'><a href='#'><t_orange>calendrier en ligne </t_orange></a></Link>
selon vos disponibilités. <br/>
C’est <blue>sans engagement</blue> de part et d’autre et <blue>entièrement gratuit</blue>.</content>
      </div>


      </div>


              </div>




              <div class="flex">

              <div class='column'>
<div class="row">
<h2title>
Description de votre projet
<i class="fa-solid fa-comment-dots" id="icon"></i>
</h2title>
</div>
<div id='underline2'></div>
<div id='box_content'>
<content>Vous décrivez le contexte de l’entretien, du <blue>concours</blue> que vous voulez réussir, ou de votre
problème (<blue>coaching</blue>). <br/>
Nous évoquons ensemble votre objectif et vos contraintes. <br/><blue>Ce faisant, nous faisons
connaissance </blue><h2title> ☕️</h2title></content>
</div>


</div>

<div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>
      
      
      
      <div id="step_line"></div>

      


      

      
      
      


              </div>

              <div class="flex">
      
      
      

      
      <div id="step_line"></div>

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

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


              </div>




                <div class="box_last column_items_center">
                

                <div class="row">
                <h1title>En route vers la réussite !</h1title>
                <i class="fa-solid fa-check-to-slot" id="icon2"></i></div>
                <div id="underline2"></div>

                <div class="content_blue width">
                <content><blue>Les séances ont lieu en présentiel – à Paris – ou en distanciel. </blue><br />Vous savez à l’avance l’objectif de chaque séance et vous <blue>validez ainsi notre progression.</blue><br /><br />
A l’issue du travail réalisé, vous disposez d’<blue>outils personnalisés</blue> selon l’offre choisie et qui
reflètent le travail réalisé ensemble.</content>
                </div>
                <a id='bouton' >Prendre rendez-vous</a>


                </div>
      


      </div>
    );
  }
  
  export default Schema;