import React from 'react';
import {Switch,Route} from 'react-router-dom'

import NavBarPackage from "./juet/header/navbarMain.jsx";
//import BodyMainLandingPage from "./juet/LandingPage/bodyMain.jsx";
import FooterMake from './juet/footer/footerMain.jsx';

//import About from './About.jsx'
//import FacultyMain from './juet/faculty/index'

import {renderRoutes} from 'react-router-config'
import {routes} from './Routes.jsx'
import './juet/LandingPage/styles/body.css';

class IndexRender extends React.PureComponent{
    constructor(props)
    {
        super(props);
        this.state={}
    }

    render()
    {
        return (
            <div>
              
                <NavBarPackage/>
                <Switch>
                   {renderRoutes(routes)}
                </Switch>
                <FooterMake />
                 
            </div>
        )
    }

}
export default IndexRender;

/*<Route path="/" exact component={ BodyMainLandingPage } />
<Route path="/About" exact component={ About } />
<Route path="/juet/faculty" component={FacultyMain} />*/