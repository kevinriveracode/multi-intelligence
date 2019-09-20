import React,{Component} from 'react';
import WelcomePage from '../components/welcomePage/welcomePage';
import Features from '../components/features/features';
import MarketingPage from '../components/marketing/marketingPage';
import Fidelizacion from '../components/Fidelizacion/Fidelizacion';
import Responsive from '../components/Responsive/Responsive';
import FidelizacionMessage from '../components/FidelizacionMessage/FidelizacionMessage'
export default class ViewInicio extends Component {
    render(){
        return(
            <section>
                <WelcomePage></WelcomePage>                
                <Features></Features>
                <Responsive></Responsive>
                <Fidelizacion></Fidelizacion>
                <MarketingPage></MarketingPage>
                <FidelizacionMessage></FidelizacionMessage>
            </section>
        )
    }
}