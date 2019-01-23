const feesJSON = require('../JSON/feeDetails.json')
const admProcedures = require('../JSON/admissionProcedure.json')
const admProgrammes = require('../JSON/admissionProgrammes.json')
const router = require("express").Router()

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    if(id === "fees")
    {
        res.send(feesJSON)
    }
    else if(id === "procedures")
    {
        res.send(admProcedures)
    }
   else if(id === "programmes")
   {
       res.send(admProgrammes)
   }
})

module.exports = router