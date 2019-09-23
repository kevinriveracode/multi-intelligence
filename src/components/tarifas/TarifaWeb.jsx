import React , {Component} from 'react'

class Card extends Component{
    render(){
        return(
            <div className="w-25 bg-card mgw2 pad-full-1 radius shadow jus-center">
                <div>
                    <h3 className="tx-bold tx-center tx-blanco">Pack Basic</h3>
                    <p className="tx-blanco tx-center">Para pymes que buscan crecer</p>
                </div>
                <div>
                    <h2 className="super-title tx-center tx-bold">$399</h2>
                </div>
                <div>
                    <ul className="no-list">
                        <li className="tx-blanco">Feature 1</li>
                        <li className="tx-blanco">Feature 2</li>
                        <li className="tx-blanco">Feature 3</li>
                    </ul>
                </div>
                <div>
                    <button className="btn-card radius w-80">
                        Elegir plan
                    </button>
                </div>
            </div>
        )
    }
}
class TarifaWeb extends Component{
    render(){
        return(
            <section className="flex bg-tarifa pad-content jus-center">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </section>
        )
    }
}

export default TarifaWeb;