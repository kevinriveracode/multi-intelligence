import React , {Component} from 'react'

class Card extends Component{
    render(){
        return(
            /*
                titulo pack
                descripcion pack
                precio pack
                caracteristicas = []
            */ 
            <div className="w-25 bg-card mgw2 pad-full-1 radius shadow jus-center">
                <div>
                    <h3 className="tx-bold tx-center tx-blanco">{this.props.nombre}</h3>
                    <p className="tx-blanco tx-center">{this.props.descripcion}</p>
                </div>
                <div>
                    <h2 className="super-title tx-center tx-bold">{this.props.precio}</h2>
                </div>
                <div>
                    <ul className="no-list">
                        <li className="tx-center tx-blanco">Feature 1</li>
                        <li className="tx-center tx-blanco">Feature 2</li>
                        <li className="tx-center tx-blanco">Feature 3</li>
                    </ul>
                </div>
                <div className="flex jus-center">
                    <button className="btn-card radius w-80">
                        Elegir plan
                    </button>
                </div>
            </div>
        )
    }
}
class TarifaWeb extends Component{
    constructor(props){
        super(props);
        this.state = {
            tarifas:[
                {
                    name:'Pack Pymes',
                    descripcion:'Para pymes que buscan crecer',
                    precio:'399$',
                    caracteristicas:[
                        "Autoadministrable",
                        "Wordpress",
                        "Seo"
                    ]
                },
                {
                    name: 'Pack Pro',
                    descripcion: 'Para empresas consolidadas que buscan expandirse',
                    precio: '699$',
                    caracteristicas: [
                        "Autoadministrable",
                        "Wordpress",
                        "Seo"
                    ]
                },
                {
                    name: 'Pack Enterprise',
                    descripcion: 'Para grandes empresas',
                    precio: '800$',
                    caracteristicas: [
                        "Autoadministrable",
                        "Wordpress",
                        "Seo"
                    ]
                }
            ]
        }
    }
    render(){
        return(
            <section className="h-100 flex bg-tarifa pad-content jus-center">
                {this.state.tarifas.map((tarifa)=>{
                    return(<Card nombre={tarifa.name} descripcion={tarifa.descripcion} precio={tarifa.precio}></Card>)
                })}
            </section>
        )
    }
}

export default TarifaWeb;