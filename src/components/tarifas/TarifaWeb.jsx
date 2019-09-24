import React , {Component} from 'react'
import CustomButton from '../button/button';

class Card extends Component{
    render(){
        return(
            <div className="card w-25 bg-card mgw2 pad-full-1 radius shadow jus-center">
                <div>
                    <h3 className="tx-2em tx-bold tx-center tx-blanco">{this.props.nombre}</h3>
                    <p className="tx-blanco tx-bold tx-center">{this.props.descripcion}</p>
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
                    <CustomButton text="Elegir Plan" btn="btn-dark-blue"></CustomButton>
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
                    name:'BASIC',
                    descripcion:'Para pymes que buscan crecer',
                    precio:'399$',
                    caracteristicas:[
                        "Autoadministrable",
                        "Wordpress",
                        "Seo"
                    ]
                },
                {
                    name: 'PRO',
                    descripcion: 'Para empresas consolidadas que buscan expandirse',
                    precio: '699$',
                    caracteristicas: [
                        "Autoadministrable",
                        "Wordpress",
                        "Seo"
                    ]
                },
                {
                    name: 'PREMIUM',
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