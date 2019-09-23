import React,{Component} from 'react';
import WelcomePage from '../components/welcomePage/welcomePage';
import Features from '../components/features/features';
import MarketingPage from '../components/marketing/marketingPage';
import Fidelizacion from '../components/Fidelizacion/Fidelizacion';
import Responsive from '../components/Responsive/Responsive';
import FidelizacionMessage from '../components/FidelizacionMessage/FidelizacionMessage'
import Message from '../components/Message/Message';
import MessageReverse from '../components/Message/MessageReverse';
export default class ViewInicio extends Component {
    
    render(){
        return(
            <section>
                <WelcomePage></WelcomePage>                
                <Features></Features>
                <Message features={['Optimizadas para SEO', 'Diseño Personalizable','100% Autoadministrables']} image="corporativa.png" title="Web Corporativa" description="Consigue transmitir una buena imagen de tu empresa y ten una página web totalmente autoadministrable para que no dependas de nadie." item={['Optimizadas para SEO','Diseño Personalizable','100 % Autoadministrables']}></Message>
                <MessageReverse features={['Pagos y Facturación Automatizados', 'Sin límite de productos o de páginas','Diseño Premium y Autoadministrable']} image="tienda.png" title="Tienda Online" description="Vende tus productos en una plataforma web propia y que puedas editar en cualquier momento para adaptarla a tus necesidades de cada etapa." item={['Optimizadas para SEO', 'Diseño Personalizable', '100 % Autoadministrables']}></MessageReverse>
                <Message features={['Sistema de pagos y acceso automático', 'Plataforma totalmente autoadministrable', 'Ordena tus cursos en módulos y lecciones']} image="academia.png" title="Academia Online" description="Vende tus cursos online en tu propia plataforma web para no tener que pagar altas comisiones a terceros y para que no dependas de nadie." item={['Optimizadas para SEO', 'Diseño Personalizable', '100 % Autoadministrables']}></Message>
                <Responsive></Responsive>
                <Fidelizacion></Fidelizacion>
                <MarketingPage></MarketingPage>
                <FidelizacionMessage></FidelizacionMessage>
            </section>
        )
    }
}