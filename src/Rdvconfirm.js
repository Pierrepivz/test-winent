import React from "react";
import { Link } from 'react-router-dom';

export default function Rdvconfirm() {





    return( <div class="Rdvconfirm">
            <div class="column_items_center">
             <div class="content_blue"><content>Votre rendez-vous a bien été pris en compte ! <br />vous recevrez un e-mail de ma part contenant le lien du visio. À bientôt ☕️</content>
             
             </div>
             <Link to="./home">
             <button id="bouton">retour</button>
             </Link>
             </div>
    </div>
    )
                  
}