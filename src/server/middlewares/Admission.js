const feesJSON = require('../JSON/feeDetails.json')
const admProcedures = require('../JSON/admissionProcedure.json')
const router = require("express").Router()

router.get('/fees',(req,res)=>{
    res.send(feesJSON)
})

router.get('/procedures',(req,res)=>{
    res.send(admProcedures)
})
module.exports = router