import React from "react";
import iconeInstagram from '../../../Imagens/icone-instagram.svg';
import iconeWhatsapp from '../../../Imagens/icone-whatsapp.svg'
import iconeLinkedin from '../../../Imagens/icone-linkedin.svg';
import './style.css';

function Informacoes() {
    return (
        <div>
            <h1>
                Laura Paz
            </h1>
            <h3>
                Desenvolvedora Front-End
            </h3>
            <div>
               <a href="https://instragram.com/laura_paz_b" target="_blank"><img className="icone" src={iconeInstagram}/></a>
               <a href="https://wa.me/5581984716816" target="_blank"><img className='icone' src={iconeWhatsapp}/></a>
               <img className="icone" src={iconeLinkedin}/>
            </div>
        </div>

    );

}

export default Informacoes;