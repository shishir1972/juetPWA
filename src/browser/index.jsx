import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import IndexRender from '../main.jsx'



ReactDOM.hydrate(<Router><IndexRender /></Router>,document.getElementById('juetroot'))