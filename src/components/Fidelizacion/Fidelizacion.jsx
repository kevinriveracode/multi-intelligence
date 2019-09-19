import React , {Component} from 'react'

export default class Fidelizacion extends Component {
    render(){
        return(
            <section className="Fidelizacion pad-content flex jus-space-around shadow-fidelizacion">
                <div className="pad-h-2 flex flex-dir-col align-center shadow radius bg-white w-30">
                   <div className="circle-option shadow"><img src="http://localhost:3000/svg/compromiso.svg"></img></div>
                    <article  className="flex flex-dir-col align-center pad-left-2">
                        <h3 className="tx-center title">Compromiso</h3>
                        <hr /> 
                        <p className="tx-center title">Nuestro objetivo es hacer de tu proyecto, un gran proyecto en un plazo de entrega óptimo</p>
                    </article>
                </div>
                <div className="pad-h-2 flex flex-dir-col align-center shadow radius bg-white w-30">
                    <div className="circle-option shadow"><img src="http://localhost:3000/svg/innovacion.svg"></img></div>
                    <article className="flex flex-dir-col align-center pad-left-2">
                        <h3 className="tx-center title">Innovación</h3>
                        <hr /> 
                        <p className="tx-center title">Estamos en continuo aprendizaje y renovación para ofrecer las últimas tendencias en nuestro trabajo.</p>
                    </article>
                </div>
                <div className="pad-h-2 flex flex-dir-col align-center shadow radius bg-white w-30">
                    <div className="circle-option shadow"><img src="http://localhost:3000/svg/calidad.svg"></img></div>
                    <article className="flex flex-dir-col align-center pad-left-2">
                        <h3 className="tx-center title">Calidad</h3>
                        <hr /> 
                        <p className="tx-center title">Diseño gráfico, marketing online, recuperación y traslado de dominios, Agencia SEO y páginas web de calidad.</p>
                    </article>
                </div>
            </section>
        )
    }
}