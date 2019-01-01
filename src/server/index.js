import express from 'express'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import IndexRender from '../main.jsx'
import {StaticRouter as Router} from 'react-router-dom'  
import React from 'react'
import ReactDOMServer from "react-dom/server";

require('dotenv').config()
const compression = require('compression')
//import * as faculty from './middlewares/FacultyRecord'
const app = express()

app.set('view engine','ejs')
app.use(cors())
app.use(morgan())
app.use(helmet())
app.use(compression())
app.use(express.static('build',{ maxage: '1d' }))
app.use('/juet',express.static('build',{ maxage: '1d' }))
app.use("/static",express.static('static',{ maxage: '1d' }))
//app.use('/api/faculty',faculty)

app.get("*",(req,res)=>{

    const ServerRenderData = ReactDOMServer.renderToString(
    <Router location={req.url} >
     <IndexRender />
    </Router>
    )

       res.render('index',{RenderData:ServerRenderData})
    

})

const PORT = process.env.PORT || 3000
app.listen(PORT,(err)=>{
    if(err)
     {
         console.log(err)
     }

     console.log('Server Started at PORT_NUMBER:'+PORT)
} )
