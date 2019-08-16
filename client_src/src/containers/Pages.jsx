import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';

import pagesRoutes from '../routes/pages.jsx';
import bgImage from '../assets/img/background.jpg';

class Pages extends Component{
    getPageClass(){
        var pageClass = "";
        switch (this.props.location.pathname) {
            case "/login":
                pageClass = " login-page";
                break;
            default:
                pageClass = "";
                break;
        }
        return pageClass;
    }
    componentWillMount(){
        if(document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render(){
        return (
            <div>
               
                <div className="wrapper wrapper-full-page">
                    <div className={"full-page"+this.getPageClass()} data-color="black" data-image={bgImage}>
                        <div className="content">
                            <Switch>
                                {
                                    pagesRoutes.map((prop,key) => {
                                        return (
                                            <Route path={prop.path} component={prop.component}  key={key}/>
                                        );
                                    })
                                }
                            </Switch>
                        </div>
                        <Footer transparent/>
                        <div className="full-page-background" style={{backgroundImage: "url("+bgImage+")"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pages;
