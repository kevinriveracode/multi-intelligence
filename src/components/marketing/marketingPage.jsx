import React,{Component} from 'react';

class MarketingPage extends Component {
    render(){
        return(
            <section class="pad-content flex align-center flex-wrap">
               <div className="w-100 pad-title flex jus-center"> <h2 className="super-title">Puedes estar orgulloso de lo que haces</h2></div>
                <div class="w-50">
                    <h2 className="pad-article title ">Hazte notar y consigue nuevos visitantes</h2>
                    <article class="pad-article">
                        <h2 className="title">E-mail marketing</h2>
                        <p className="c-parrafo">Crea increíbles newsletters y campañas de e-mail con el manager de e-mail marketing y no pierdas el contacto con tus clientes</p>
                    </article>
                    <article className="pad-article">
                        <h2 className="title">Redes sociales y blogs</h2>
                        <p className="c-parrafo">Cuando tu negocio ofrezca ofertas especiales o limitadas por un tiempo determinado, o alcance una meta importante, compártelo con todo el mundo a través de Facebook, Twitter o Instagram y celébralo con tus clientes y followers.</p>
                    </article>
                    <article className="pad-article">
                        <h2 className="title">Llega a visitantes específicos</h2>
                        <p className="c-parrafo">Adapta tu página web para grupos determinados de visitantes como por ejemplo clientes nuevos o clientes frecuentes. Programa promociones automáticas para que se muestren en periodos determinados de tiempo o para determinados clientes, así como a posibles clientes que se encuentren cerca de tu negocio.</p>
                    </article>
                </div>
                <div class="w-50">
                    <img class="shadow radius" src="http://localhost:3000/marketing.svg"></img>
                </div>
            </section>
        )
    }
}

export default MarketingPage