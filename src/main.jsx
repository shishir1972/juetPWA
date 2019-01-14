import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom'

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
                {routes.map(({ path, exact, component: C, ...rest }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                render={(props) => (
                                <C {...props} {...rest} />
                                )}
                            />
                 ))}
                </Switch>
                <FooterMake />
                 
            </div>
        )
    }

}
export default withRouter(IndexRender);
