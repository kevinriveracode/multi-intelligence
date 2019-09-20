import React , {Component} from 'react'

class Responsive extends Component{
    render(){
        return(
            <section className="pad-content flex Responsive flex-wrap">
                <div className="w-100">
                    <h1 className="super-title tx-center">Responsive Design en todos Nuestros diseños</h1>
                    <h1 className="tx-center title">Nuestros trabajos estan siempre orientados a la adaptabilidad de cualquier dispositivos</h1>
                </div>
                <div className="w-33 pad-article flex flex-dir-col jus-evenly">
                    <div className="flex flex-dir-col jus-center">
                        <h3 className="tx-right title">¿Qué es el diseño web Adaptable?</h3>
                        <p className="tx-right c-parrafo">Tu pagina web se verá perfecta independientemente del dispositivo desde el que se esta
                            visualizando: ordenador, smartphone, tablet, etc...
                        </p>
                    </div>  
                    <div>
                        <h3 className="tx-right title">Tiempo de Carga</h3>
                        <p className="tx-right c-parrafo">
                            Tu página web será diseñada teniendo en cuenta los dispositivos móviles, en los que 
                            el tiempo de carga es un factor realmente crítico.
                        </p>
                    </div>                   
                </div>
                <div className="w-20 flex jus-center">
                    <img src="http://localhost:3000/svg/apple.svg"></img>
                </div>
                <div className="w-33 pad-article flex flex-dir-col jus-evenly">
                    <div className="flex flex-dir-col jus-center">
                        <h3 className=" title">Internet es móvil</h3>
                        
                        <p  className="c-parrafo">
                            El porcentaje de búsquedas realizadas por usuarios en
                            dispositivos móviles cada vez tiene un mayor peso.Tu web 
                            estará preparada para el visitante móvil.
                        </p>
                    </div>
                    <div>
                        <h3 className="title">Más económica & seo</h3>
                        
                        <p className="c-parrafo">
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