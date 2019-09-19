import React , {Component} from 'react'

class Responsive extends Component{
    render(){
        return(
            <section className="pad-content flex Responsive">
                <div className="pad-article">
                    <div className="flex flex-dir-col jus-center">
                        <h3 className="tx-right title">¿Qué es el diseño web Adaptable?</h3>
                        <hr className="self-end"/>
                        <p className="tx-right">Tu pagina web se verá perfecta independientemente del dispositivo desde el que se esta
                            visualizando: ordenador, smartphone, tablet, etc...
                        </p>
                    </div>  
                    <div>
                        <h3 className="tx-right title">Tiempo de Carga</h3>
                        <hr className="self-end hrmod" />
                        <p className="tx-right">
                            Tu página web será diseñada teniendo en cuenta los dispositivos móviles, en los que 
                            el tiempo de carga es un factor realmente crítico.
                        </p>
                    </div>                   
                </div>
                <div>
                    <img src="http://localhost:3000/svg/apple.svg"></img>
                </div>
                <div className="pad-article">
                    <div className="flex flex-dir-col jus-center">
                        <h3 className=" title">Internet es móvil</h3>
                        <hr/>
                        <p >
                            El porcentaje de búsquedas realizadas por usuarios en
                            dispositivos móviles cada vez tiene un mayor peso.Tu web 
                            estará preparada para el visitante móvil.
                        </p>
                    </div>
                    <div>
                        <h3 className="title">Más económica & seo</h3>
                        <hr className="hrmod"/>
                        <p>
                            Las páginas responsive son más económicas
                            que las Apps de un smartphone, que necesitan ser
                            instaladas y no posicionan en los motores de 
                            búsqueda.
                        </p>
                    </div>    
                </div>
            </section>
        )
    }
}

export default Responsive