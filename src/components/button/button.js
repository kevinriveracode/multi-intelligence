import React , {Component} from 'react'

class CustomButton extends Component{
    /*  Glosario de botones: 
            prop-> btn:
            1 -> btn-dark-blue
    */
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <button class={this.props.btn}>{this.props.text}</button>
        )
    }
}

export default CustomButton