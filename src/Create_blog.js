
  import { useState } from "react";

function Create_Blog() {

  
  
  const [description,setDescription] = useState('');
  const [Soustitre,setSoustitre] = useState('');
  const [title,setTitle] = useState('');
  const [notetitle,setNotetitle] = useState('');
  const [notetext,setNotetext] = useState('');
  const [links,setLinks] = useState('');

  /*function new_section(){
  
  const content = [title,Soustitre,description];

  article.add(content);
  

  }*/
  
  




  var textareas = document.querySelectorAll(".textarea");
  var edit = document.querySelector(".edit");

  function edit_mode(){
    
    for (var i = 0; i < textareas.length; i++){
       
      if(textareas[i].classList.contains("none")){

        textareas[i].classList.remove("none");


        edit.classList.remove("fa-eye-slash");
        edit.classList.add("fa-eye");

        
      }else{
      
      textareas[i].classList.add("none");
      
      edit.classList.remove("fa-eye");
      edit.classList.add("fa-eye-slash");
      
           
           }
    }
    
  }


  return (
    <div className="Page Blog">

<div class='column_items_center'>
                              

                              <h1title>{title}</h1title>
                              <h2under2></h2under2>
                              
                              <div class="line_between">
                              
                              
                              
                              <div class="note column_items_center">
                              
                              <content>  Créer et visualisez votre article ici </content>
                              
                             </div>
                    

                    
                    
                    </div>
                              
                        </div>

    <div class="block window line_between">

    <div class="swipe_buton" onClick={edit_mode}><i class="fa-solid fa-eye edit"></i></div>
    
    <div class="article">

    <h2title>{title}<input type="text" class="textarea" placeholder = "Titre de l'article" onChange={(e) => setTitle(e.target.value)} ></input></h2title>
    <h2under2></h2under2>

    <div class="article_content column_start">

    <h3title><blue>{Soustitre}<input type="text" class="textarea" placeholder = "Sous-titre" onChange={(e) => setSoustitre(e.target.value)} ></input></blue><br/><br/></h3title>

    <div class="article_paragraph">
    <content>{description}<br/><br/><input type="text" class="textarea" placeholder = "Paragraphe" onChange={(e) => setDescription(e.target.value)} ></input></content>
    

    
    
    </div>

    <div class="article_note">
    <h3title><strong><blue>{notetitle}<input type="text" class="textarea" placeholder = "note" onChange={(e) => setNotetitle(e.target.value)} ></input><br/></blue></strong></h3title>
    
    <content1>{notetext}<input type="text" class="textarea" placeholder = "note text" onChange={(e) => setNotetext(e.target.value)} ></input> </content1>
    </div>

    

    <div class="article_reco">
    <h3title>liens utiles</h3title><br/><br/>
    <content>{links}<input type="text" class="textarea" placeholder = "liens utiles" onChange={(e) => setLinks(e.target.value)} ></input> </content>

    </div>


    </div>

    </div>
    

    <div class="autre_contenu autre_contenu_box column_items_center">
    <h3title>Outils :</h3title>
    <br /> <br/><br /> <br/>
    <h3title class="buton"><a id='bouton' >Ajouter un paragraphe</a></h3title>
    <br /> <br/><br /> <br/>

    <h2title class="buton"><a id='bouton' >Ajouter une note</a></h2title>
    <br /> <br/><br /> <br/>
    <div class="swipe_buton" onClick={edit_mode}><i class="fa-solid fa-eye edit"></i></div>
    
    
    
    
    </div>


    </div>
      
    </div>
  );
}

export default Create_Blog;