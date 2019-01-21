const express = require('express');
const router = express.Router();
require('dotenv').config();
const con = require('../connection')

console.log(process.env.DB_USER_SQL)
con.connect((err)=>{
    if(err) throw  err;
    else
    {
        console.log('SQL SERVER Connected')
    }

});
router.get('/:dept/:id',(req,res)=>{
    const Individual_Faculty_req = {dept:req.params.dept,id:req.params.id};
    const Fetched_data = new Array();
    if(!Individual_Faculty_req.dept && !Individual_Faculty_req.id)
    {
        res.send(404);
    }
    else
    {
        con.query(`SELECT * from faculty where department='${Individual_Faculty_req.dept}' and  id='${Individual_Faculty_req.id}'`,(err,rows)=>{
            if(err) throw  err;
            rows.forEach((data)=>{
                Fetched_data.push(data);
            });
            res.send(Fetched_data);
        })
    }
});

router.get('/:dept',(req,res)=>{
    const department = {dept:req.params.dept};const data_rec = new Array();
    if(!department.dept)
    {
        res.send(404)
    }
    else if(department.dept==='all')
    {
        con.query(`select DISTINCT name,department,biography,email,education,contact,image,id,designation from faculty where department IS NOT NULL AND SETA='1' OR SETC='1' ORDER BY head_priority ASC`,(err,rows)=>{
            if(err) throw err;
            rows.forEach((data)=>{
                data_rec.push(data)
            });
            res.send(data_rec)
        });
    }
    else
    {
        con.query(`select DISTINCT name,department,email,biography,education,contact,image,id,designation from faculty where department='${department.dept}' ORDER BY priority ASC`,(err,rows)=>{
            if(err) throw err;
            rows.forEach((data)=>{
                data_rec.push(data)
            });
            res.send(data_rec)
        });
    }

});

module.exports = router;
