import React , {Component} from 'react';

class HeaderItelligence extends Component{
    render(){
        return(
            <header className="flex flex-dir-col pad-sides-content">
                <div className="flex jus-between">
                    <div><h1 class="font-title font-raleway">Multi-Intelligence</h1></div>
                    <div class="flex flex-dir-row al-center w-20 jus-flexend">
                        <p class="font-raleway">654 82 67 81</p>
                        <a class="font-title font-raleway m-left-5">Log In</a>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul className="flex flex-dir-row jus-between no-list pad-side-reset w-80">
                            <li>
                                <a class="f-size-16 font-raleway">Marketing</a>
                            </li>
                            <li>
                                <a class="f-size-16 font-raleway">Diseño Web</a>
                            </li>
                            <li>
                                <a class="f-size-16 font-raleway">Tienda Online</a>
                            </li>
                            <li>
                                <a class="f-size-16 font-raleway">Diseño de aplicaciones</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default HeaderItelligence;