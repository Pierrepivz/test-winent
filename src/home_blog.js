import { useState } from "react";
import React from "react";
import graph from "./logo.svg";


function Home_Blog() {

    /*test*/
    /*function test1(){

        var test = document.querySelector(".swipe_buton");
    test.style.display = "none";
    }*/

    

    const searchBar = document.querySelector("#search_bar");
    const filtre = document.querySelector(".filtres");
    
    window.addEventListener("input", search);

    function search(){
        
        const cards = document.querySelectorAll(".home_article");
        
       /*filterelements(input,cards);*/

    }

     const elements = [["article sur vatel", "article sur vatel contenant un récap de blabla bla" , "écoles" , "blog"],["article sur HEC", "y" , "emplois"],["article sur INSA", "y","concours"],["dauphine", "y","concours"],["école ECE","tavuca","emplois"]];


     const [filter,setFilter] = useState('');
     const [input,setInput] = useState('');

     const getfiltereditems = (query,elements,select) => {
            
        if(!query && !select){
            return elements;
        }else{

           
            if(!select){
            return elements.filter( card => card[0].includes(query));
        }else{
            return elements.filter( card => card[0].includes(query) ).filter( card => card[2].includes(select));
            
        }


        }

    }

     const filtereditems = getfiltereditems(input,elements,filter);

    /*const [filter,Setfilter] = useState('');

      function article_select(e){


      

      }*/
     /* function filter_select(e){

      Setfilter(e.value);


    }*/
    return (
      <div className="Page Blog">

      
      
      <div class='column_items_center'>
                              
    <h1title>Actualités</h1title>
    <h2under></h2under>
                              <h2under2></h2under2>
                              
                              
                            <div class="line_between">
                              
                              <div class="note column_items_center">
                              
                              <content> Retrouvez ici nos articles</content>
                              
                             </div>
                    
                    </div>
                    
                    
                    </div>

<div class="window column">
                    <div class="search_bar line_between">
                    <div class="column_start">
                    <h2title>Cherchez un article </h2title><br/>
                    <input type="text" id="search_bar" class="research" placeholder = ".." onChange={(e) => setInput(e.target.value)} ></input>
                    </div>
                    <div class="column_start">
                    <content2><blue>Filtres</blue></content2><br/>
                    <select class="filtres"  class="research" onChange={e => setFilter(e.target.value)}>
                    <option></option>
                    <option value="écoles">écoles</option>
                    <option value="emplois" >emplois</option>
                    <option value="concours">concours</option>

                    </select>
                    </div>
                    
                    
                     <br/>
                    </div>

                    <div class="blog_list column block">

    <div class="line_around" id="articles_select">
    
    {filtereditems.map(value => 
    <div class="column_start">
        <h2title>{value[0]}</h2title>

        <a href={value[3]}><div class="home_article"> <div class="article_photo"></div> 
        <content1>{value[1]}</content1>
        </div>
        </a>
        </div>
        
    )}

    
    </div>

    


    </div>
    
    </div>
                              
                        </div>
  
        
      
    );
  }
  
  export default Home_Blog;