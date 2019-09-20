import React , {Component} from 'react';
import CustomButton from '../button/button';
class FidelizacionMessage extends Component{
    render(){
        return(
            <section className="pad-content bg-fide">
                <article className="flex flex-dir-col al-center">
                    <h1 className="tx-center super-title">Consigue por fin una web profesional que capte clientes cada mes</h1>
                    <img className="star" src="http://localhost:3000/svg/certificado.svg"></img>
                    <p className="pad-h-1 tx-center c-parrafo">Más de 5 años de experiencia asesorando negocios digitales para posicionarse y vender en internet
                        de forma recurrente y estable.  Contacta ahora para que el tuyo sea el siguiente.
                    </p>
                    <CustomButton className="mgh1" btn="btn-dark-blue" text="EMPEZAR YA"></CustomButton>
                </article>
                <CmsItems></CmsItems>
            </section>
        )
    }
}

class CmsItems extends Component{
    constructor(props){
        super(props);
        this.state = {
            lista:[
                {
                    srcImagen:'http://localhost:3000/svg/svg/wordpress.svg',
                    name:'Wordpress',
                    style:'bg-gray-ligedro',
                    description:'Blog, Web Corporativa'
                },
                {
                    srcImagen: 'http://localhost:3000/svg/svg/prestashop.svg',
                    name:'Prestashop',
                    style:'bg-gray-pesados',
                    description:'Ecommerce'
                },
                {
                    srcImagen: 'http://localhost:3000/svg/svg/shopify.svg',
                    name:'Shopify',
                    style:'bg-gray-dligero',
                    description:'Ecommerce'
                },
                {
                    srcImagen: 'http://localhost:3000/svg/svg/woocommerce.svg',
                    name: 'wooCommerce',
                    style:'bg-gray-pesados',
                    description:'Ecommerce, Blog'
                },
            ]
        }
    }
    typeclass = (el) => {
        let clases = el + " " + " radius-top bg-primary shadow h-12  w-20 al-center  flex flex-dir-col jus-center"
        return clases;
    }
    render(){
        return(
            <section className="flex jus-between mgh1 ">
                {this.state.lista.map((el)=>{
                    return(
                        <div className={this.typeclass(el.style)}>
                            <h3 className="tx-small mgb0 title tx-blanco">{el.name}</h3>
                            <img className="shadow star " src={el.srcImagen}></img>
                            <p className="mg0 c-text-secondary">{el.description}</p>
                            <div className="bandera"></div>
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default FidelizacionMessage