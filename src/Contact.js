
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact(){

    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');  
    const [nom, setNom] = useState('');
    const [message, setMessage] = useState('');
    

  function sendMessage(e) {
    e.preventDefault();

    emailjs.sendForm('booking_winent', 'rdv78', e.target, '6nusaoR8fQQLjbcrX')
    .then((result) => {
        window.location = "./confirmation";
    }, (error) => {
        
    });
    e.target.reset()

    
       }

       var btnoff = document.querySelector('.btn');
       function btncheck(){
        if(email  === '' || prenom  === '' || nom  === '' || message  === '' ){

            btnoff.classList.add("disabled");
            btnoff.classList.remove("able");
          
        }else{

            btnoff.classList.remove("disabled");
            btnoff.classList.add("able");
        }

    }
    window.addEventListener("input", btncheck);



  return(

   <div className="Contact">

<div id="titre_second"class='column_items_center'>
                              
                              <h1title>Contact</h1title>
                              <h2under></h2under>
                              <h2under2></h2under2>
                              
                              
                        </div>


  <div class="line_around margin_left block">

  

  <div class="column_start">
             <h3title>Où nous trouver ? </h3title> 
             
                  <h2under2></h2under2>


   <div id="blue_content">
     <div id="map"></div>
     </div> 

     </div>
     
     <form onSubmit={sendMessage} class="form_rdv" > 
     
                 


<div class="column_start">
             <h2title>Formulaire de contact</h2title> 
             
                  <h2under2></h2under2></div>
        
        <div class="content_blue" >   

<div class="column_items_center">

        <div class="column_items_center">
                <input type="text" className="form-control" placeholder="prenom" name="prenom" id="input" value={prenom} required
                onChange={(e) => setPrenom(e.target.value)}/>
            
                <input type="text" className="form-control" placeholder="nom" name="nom" id="input" value={nom} required
                onChange={(e) => setNom(e.target.value)}/>

                <input type="email" className="form-control" placeholder="Email Address" name="email" id="input" value={email} required
                onChange={(e) => setEmail(e.target.value)}/>

                <textarea  placeholder="message" name="message" value={message} required
                onChange={(e) => setMessage(e.target.value)}/>  <br/><br/>

<input type="submit" class="disabled btn" onClick={(e) => e.target.reset()} value="envoyer"></input>

        </div>

       

</div>

                
                
                
           </div>     
            
                    
    

    

    
    
    
   
    


    
    </form>
    
    </div>

    
    
    
    <div class="line">
 
                        <blue><content>Obtenir un premier poste </content></blue><i class="fa-solid fa-arrow-right"></i><blue><content>s'adapter à un nouveau poste</content></blue><i class="fa-solid fa-arrow-right"></i>
                        <blue><content>Analyser les opportunités de changement</content></blue><i class="fa-solid fa-arrow-right"></i><blue><content>Changement de poste</content></blue>


                        </div>

                        <div class="contextes">

                        <content1>
                              <div class="line_around"><blue> Étudiants </blue> <blue> professionnels </blue> <blue> Réorientation </blue> </div>
                        </content1>      
                              
                              </div>
                        
                        <div class="line_around" id="offre_box">

                        <div class="column_start">
                        <div id="dropbar"></div>
                        <content1><blue>Atelier  </blue><i class="fa-solid fa-arrow-down"></i></content1>
                        <div class="offre_contexte"><content><a onClick={() => window.scrollTo(0,850)}>Réussir ses entretiens</a></content></div>
                        
                                    
                                    
                        </div>

                        <div class="column_start">
                        <div id="dropbar"></div>
                        <content1><blue>Atelier  </blue><i class="fa-solid fa-arrow-down"></i></content1>
                        <div class="offre_contexte"><content><a onClick={() => window.scrollTo(0,1800)}>Réussir ses entretiens</a></content></div>
                        
                                    
                                    
                        </div>

                        <div class="column_start">
                        <div id="dropbar"></div>
                        <content1><blue>Atelier  </blue><i class="fa-solid fa-arrow-down"></i></content1>
                        <div class="offre_contexte"><content><a onClick={window.scrollTo(0,850)}>Réussir ses entretiens</a></content></div>
                        
                                    
                                   
                        </div>

                        <div class="column_start">
                        <div id="dropbar"></div>
                        <content1><blue>Atelier  </blue><i class="fa-solid fa-arrow-down"></i></content1>
                        <Link to='/home'><div class="offre_contexte"><content><a>Réussir ses entretiens</a></content></div>
                        
                                    
                                    </Link>
                        </div>

                        </div>
    

    
    </div>



  );
    
  }
  
  export default Contact;