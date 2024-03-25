import React from "react";

function Menu() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Laura</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Apresentação</a>
                        <a class="nav-item nav-link" href="#">Sobre</a>
                        <a class="nav-item nav-link" href="#">Habilidades</a>
                        <a class="nav-item nav-link " href="#">Projetos</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;