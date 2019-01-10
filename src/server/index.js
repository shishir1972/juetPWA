import express from 'express'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import IndexRender from '../main.jsx'
import {StaticRouter as Router} from 'react-router-dom'  
import React from 'react'
import ReactDOMServer from "react-dom/server";
import serialize from 'serialize-javascript'

import {matchRoutes} from 'react-router-config'
import {routes} from '../Routes.jsx'

import {Provider} from 'react-redux'
import configureStore from '../redux/configureStore'


require('dotenv').config()
const compression = require('compression')
import * as faculty from './middlewares/FacultyRecord'
const app = express()

app.set('view engine','ejs')
app.use(cors())
app.use(morgan())
app.use(helmet())
app.use(compression())
app.use(express.static('build',{ maxage: '604800' }))
app.use(express.static('views',{ maxage: '604800' }))
app.use('/juet',express.static('build',{ maxage: '604800' }))
app.use("/static",express.static('static',{ maxage: '604800' }))
app.use('/api/faculty',faculty)

const juetStore = configureStore({})

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "service-worker.js"));
});

app.get("/*",async(req,res)=>{

    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({route}) => {
      let fetchData = route.component.fetchData;
      return fetchData instanceof Function ? fetchData(juetStore) : Promise.resolve(null)
    });

   /* const actions = matchRoutes(routes,req.path)
     .map(({route})=>route.component.fetchData instanceof Function ? route.component.fetchData(juetStore) : null )
     .map(async actions => await Promise.all(
        (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
        )
      )
      await Promise.all(actions);*/
      return Promise.all(promises).then((data)=>{

        const context = {};
        const ServerRenderData = ReactDOMServer.renderToString(
                  <Provider store={juetStore}>
                  <Router location={req.url} context={context} >
                  <IndexRender />
                  </Router>
                  </Provider>
                   )
  
         res.render('index',{RenderData:ServerRenderData,dataFromServer:serialize(juetStore.getState())})

      })
     

})

const PORT = process.env.PORT || 3000
app.listen(PORT,(err)=>{
    if(err)
     {
         console.log(err)
     }

     console.log('Server Started at PORT_NUMBER:'+PORT)
} )
