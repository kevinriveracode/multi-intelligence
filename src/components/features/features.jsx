import React , {Component} from 'react';
import CustomButton from '../button/button';

class FeatureItem extends Component{
    render(){
        return(
            <div class="flex align-center Features">
                <div className="w-50 SliderFeatures">
                    {/* Slider de diseños */}
                    <img src="http://localhost:3000/templatePizza.jpg"></img>
                </div>
                <div className="w-50 DescriptionFeatures">
                    {/* Descripcio de la categoria */}
                    <article class="pad-article flex flex-dir-col jus-space-around box-article-size">
                        <h2 className="title">Dale rienda suelta a tu imaginación.</h2>
                        <p class="c-parrafo">No tienes que empezar desde cero. Ponte en marcha con diseños increíbles con imágenes y textos creados a medida para tu industria o idea. 
                            Personalízalo fácilmente y a tu manera. Todas las plantillas se adaptan a los dispositivos móviles. 
                            Preséntate con estilo tanto en un smartphone, una tablet o en un ordenador.</p>
                        <CustomButton btn="btn-dark-blue" text="Descubre todos los diseños"></CustomButton>
                    </article>
                </div>
            </div>
        )
    }
}
class Features extends Component{
    render(){
        return(
            <section class="pad-content">
                <div class="flex jus-center pad-title">
                    <h2 className="super-title">Plantillas diseñadas para el éxito</h2>
                </div>
                <div>
                    <FeatureItem></FeatureItem>
                </div>
            </section>
        )
    }
}

export default Features;