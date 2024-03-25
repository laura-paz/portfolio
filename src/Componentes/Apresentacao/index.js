import React from "react";
import Informacoes from './Informacoes';
import Imagem from './Imagem';

function Apresentacao(){
    return(
        <div className="d-flex align-items-center justify-content-around">
            <Informacoes/>
            <Imagem/>
        </div>
    );
}

export default Apresentacao;