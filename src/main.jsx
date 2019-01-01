import React from 'react';
import {Switch} from 'react-router-dom'

import NavBarPackage from "./juet/header/navbarMain.jsx";
import FooterMake from './juet/footer/footerMain.jsx';

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