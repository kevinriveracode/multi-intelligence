import React,{Component} from 'react';
import WelcomePage from '../components/welcomePage/welcomePage';
import Features from '../components/features/features';

export default class ViewInicio extends Component {
    render(){
        return(
            <section>
                <WelcomePage></WelcomePage>                
                <Features></Features>
            </section>
        )
    }
}