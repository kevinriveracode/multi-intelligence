import React , {Component} from 'react';

class FooterIntelligence extends Component{
    render(){
        return(
            <footer className="bg-primary pad-content">
                <div className="w-100">
                    <div className="flex jus-between">
                        <article>
                            <h3 className="tx-blanco">Condiciones generales</h3>
                            <ul className="no-list">
                                <li className="tx-blanco">Formas de pago</li>
                                <li className="tx-blanco">Impuestos</li>
                                <li className="tx-blanco">Garantia</li>
                                <li className="tx-blanco">Condiciones generales y privacidad</li>
                            </ul>
                        </article>
                        <article>
                            <h3 className="tx-blanco">Servicios</h3>
                            <ul className="no-list">
                                <li className="tx-blanco">Desarrollo web</li>
                                <li className="tx-blanco">Tienda Online</li>
                                <li className="tx-blanco">SEO & marketing</li>
                                <li className="tx-blanco">Aplicaciones moviles</li>
                            </ul>
                        </article>
                        <article>
                            <h3 className="tx-blanco">Pricing</h3>
                            <ul className="no-list">
                                <li className="tx-blanco">Tarifas web </li>
                                <li className="tx-blanco">Tarifas tiendas online</li>
                                <li className="tx-blanco">Tarifas de SEO</li>
                                <li className="tx-blanco">Tarifas de apps</li>
                            </ul>
                        </article>
                        <article>
                            <h3 className="tx-blanco">Contacta con nosotros</h3>
                            <ul className="no-list">
                                <li className="tx-blanco">Sobre nosotros</li>
                                <li className="tx-blanco">centro de ayuda</li>
                                <li className="tx-blanco">contacte con nosotros</li>
                                <li className="tx-blanco">Condiciones generales y privacidad</li>
                            </ul>
                        </article>
                    </div>
                </div>
                <div className="w-100 flex align-center jus-center copyright">
                    <div className="">
                        <p className="tx-blanco tx-center">© 2019 Multi-Intelligence Europe. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterIntelligence