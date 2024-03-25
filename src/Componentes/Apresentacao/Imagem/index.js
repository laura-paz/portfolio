import React from "react";
import perfilFoto from '../../../Imagens/perfil-foto.png';
import './style.css';

function Imagem(){
    return(
    <div>
        <img className="fotoPerfil" src={perfilFoto}/>
    </div>);
}

export default Imagem;