import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';


export default function Rdvcontact() {

    
    
    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');  
    const [nom, setNom] = useState('');
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState('9:30');
    const current = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    
    var btnoff = document.querySelector('.btn');
    
   
    
    function btncheck(){
        if(email  === '' || prenom  === '' || nom  === '' ){

            btnoff.classList.add("disabled");
            btnoff.classList.remove("able");
          
        }else{

            btnoff.classList.remove("disabled");
            btnoff.classList.add("able");
        }

    }
    window.addEventListener("input", btncheck);
    

    

    const onChange = date => {

      setDate(date);   
    };
    
    
      
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('booking_winent', 'rdv78', e.target, '6nusaoR8fQQLjbcrX')
        .then((result) => {
            window.location = "./confirmation";
        }, (error) => {
            
        });
        e.target.reset()

        
    }

    return(
        <div class="margin_left">
                  
                  

<div class='rdv row'>
<form onSubmit={sendEmail} > 

                 
            <div class="column_start">
            
            <div class="column_start">
                         <h2title>Vos coordonnées</h2title><i class="fa-solid fa-file" id="icon"></i>
                         
                              <h2under2></h2under2></div>
                    
                    <div class="content_blue">   

            <div class="row">

                    <div class="column_items_center">
                            <input type="text" className="form-control" placeholder="prenom" name="prenom" id="input" value={prenom} required
                            onChange={(e) => setPrenom(e.target.value)}/>
                        
                            <input type="text" className="form-control" placeholder="nom" name="nom" id="input" value={nom} required
                            onChange={(e) => setNom(e.target.value)}/>

                            <input type="email" className="form-control" placeholder="Email Address" name="email" id="input" value={email} required
                            onChange={(e) => setEmail(e.target.value)}/> 

                    </div>

                    <div class="column_start">
                            <input type="hidden" className="form-control" placeholder="hour" name="hour" id="input"  value={hour} required
                            />
                            <input type="hidden" className="form-control" placeholder="date" name="current" id="input"  value={current} required
                            />
                    </div>

            </div>

                            
                            
                            
                       </div>     
                        
                                
                        
                        
                        
                

                <div class="column_items_center" id="confirm">

                

                <br/> 
                <content><content1><orange>Date du rendez-vous : </orange></content1><br/><br/> 
                Vous avez un rdv de 30mn gratuit et sans obligation le : <blue>{current}</blue> à <blue>{hour}</blue>. <br /> <br />Vous allez recevoir un email de <t_orange>carole@winentretien.com</t_orange><br/> avec le lien Teams pour notre rdv.
<br/><content1>A très vite !</content1></content>
                
                <br/><br/><br/>
                
                <input type="submit" class="disabled btn" onClick={(e) => e.target.reset()} value="prendre rendez vous"></input>
                <br/>
                </div>


                
                

                
                

                </div>

                

               </form>


      
<div class="column_start">

                         <div class="column_start">
                         <h2title>Date et Heure</h2title><i class="fa-solid fa-calendar" id="icon"></i>
                         
                              <h2under2></h2under2></div>
<div class="datetime column_items_center">

<content><Calendar class="calendar" onChange={onChange} value={date} view="week"/></content>



<div class='select column'>

<div class="row">
<buton  class="date" onClick={(e) => setHour('9:30')}><content>9 h 30</content></buton>
<buton  class="date" onClick={(e) => setHour('10:00')}><content>10 h 00</content></buton>
<buton  class="date" onClick={(e) => setHour('10:30')}><content>10 h 30</content></buton>
<buton  class="date" onClick={(e) => setHour('11:00')}><content>11 h 00</content></buton>
</div>
<div class="row">
<buton  class="date" onClick={(e) => setHour('11:30')}><content>11 h 30</content></buton>
<buton  class="date" onClick={(e) => setHour('12:00')}><content>9 h 30</content></buton>
<buton  class="date" onClick={(e) => setHour('13:30')}><content>9 h 30</content></buton>
<buton  class="date" onClick={(e) => setHour('13:00')}><content>9 h 30</content></buton>
</div>
<div class="row">
<buton  class="date" onClick={(e) => setHour('14:00')}><content>9 h 30</content></buton>
<buton  class="date" onClick={(e) => setHour('14:30')}><content>9 h 30</content></buton>
<buton  class="date" onClick={(e) => setHour('15:00')}><content>15 h 00</content></buton>
<buton  class="date" onClick={(e) => setHour('15:30')}><content>15 h 30</content></buton>
</div>



</div>

</div>

</div>                    
                         
               


                </div>
<br/><br/>

 

   

        </div>
    )
}