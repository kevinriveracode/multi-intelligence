import React , {Component} from 'react'

class WelcomePage extends Component {
    render(){
        return(
            <div className="welcome-page">
                <div class="welcome-description">
                    <article>
                        <h2>Crear una página web</h2>
                        <h1>Página web + Asesor personal</h1>
                        <p>Atrae nuevos clientes con MyWebsite de IONOS, la solución <br/> completa para una página web profesional.</p>
                        <button>Ver tarifas</button>
                    </article>
                </div>
                <div class="welcome-icon">
                    <img src="http://localhost:3000/welcome-elemento.png"></img>
                </div>
            </div>
        )
    }
}

export default WelcomePage