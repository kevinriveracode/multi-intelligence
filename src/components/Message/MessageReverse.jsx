import React , {Component } from 'react';
import CustomButton from '../button/button';
class MessageReverse extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: 'http://localhost:3000/' + this.props.image
        }
    }
    render(){
        return(
            <section className="flex pad-content bg-gray-ligero">
                <div className="flex">
                    <div className="w-50">
                        <article className="flex flex-dir-col jus-center h-100">
                            <h2 className="super-title">{this.props.title}</h2>
                            <p className="c-text-secondary">{this.props.description}</p>
                            <ul className="no-list">
                                {this.props.features.map((item) => <li className="c-primary"><img src="http://localhost:3000/comprobar.svg" class="comprobar"></img>{item}</li>)}
                            </ul>
                            <CustomButton btn="btn-dark-blue" text="Saber Mas"></CustomButton>
                        </article>
                    </div>
                    <div className="w-50">
                        <img className="w-70" src={this.state.url}></img>
                    </div>   
                </div>
            </section>
        )
    }
}

export default MessageReverse;