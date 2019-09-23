import React , {Component} from 'react'

class Card extends Component{
    render(){
        return(
            <div className="w-25 bg-card">
                <div>
                    <h3>Pack Basic</h3>
                    <p>Para pymes que buscan crecer</p>
                </div>
                <div>
                    <h2>$399</h2>
                </div>
                <div>
                    <ul className="no-list">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                </div>
            </div>
        )
    }
}
class TarifaWeb extends Component{
    render(){
        return(
            <section className="w-100  flex bg-tarifa pad-content ">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </section>
        )
    }
}

export default TarifaWeb;