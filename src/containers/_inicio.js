import React,{Component} from 'react';
import WelcomePage from '../components/welcomePage/welcomePage';
import Features from '../components/features/features';
import MarketingPage from '../components/marketing/marketingPage';
export default class ViewInicio extends Component {
    render(){
        return(
            <section>
                <WelcomePage></WelcomePage>                
                <Features></Features>
                <MarketingPage></MarketingPage>
            </section>
        )
    }
}