import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import IndexRender from '../main.jsx'

import window from 'global'
import {Provider} from 'react-redux'
import configureStore from '../redux/configureStore'

const state = window.__DATA_FROM_SERVER__;
delete window.__DATA_FROM_SERVER__;

const juetStore = configureStore(state)

ReactDOM.hydrate(
 <Provider store={juetStore}>
 <Router>
    <IndexRender />
</Router>
 </Provider>   
,document.getElementById('juetroot'))