const express = require ('express');
const Employees = require ('../models/employees.model');    

const router = express.Router();

router.get('/employees',(req, res) => {
        try{
            Employees.find((err,data)=>{
                if(err){
                    return res.status(400).send({
                        message: 'Error while finding employee data,Please check your data'
                    });
                 }
                 res.status(200).send(data);
            })

        }catch(error){
            res.status(500).send({
                message:'Internal server error'
            })
        }

});


router.get('/employees/:empID',(req, res) => {
    try{
        Employees.findOne({_id:req.params.empID},(err,data)=>{
            if(err){
                return res.status(400).send({
                    message: 'Error while finding an employee data,Please check your data'
                });
             }
             res.status(200).send(data);
        })

    }catch(error){
        res.status(500).send({
            message:'Internal server error'
        })
    }

});


router.post('/employees',(req, res) => {
        try{
            const payload = req.body;
            const newEmployee = new Employees(payload);
            newEmployee.save((err,data)=>{
                if(err){
                    return res.status(400).send({message:'This Data is already exist '});
                }
                res.status(201).send({Employeeid:data._id,message:'Employees has been add successfully.'})
            })

        }catch(error){
            res.status(500).send({
                message:'Internal server error'
            });
        }

});

router.put('/employees/:empID',(req, res) => {

    try{
        Employees.findByIdAndUpdate({_id:req.params.empID},{$set:req.body},(err,data)=>{
            if(err){
                return res.status(400).send({message:'Error while uptdating an existing user.Please check your data'})
            }
            res.status(201).send({Employeeid:data._id,message:'Employee detail have been updated'})
        }); 
    }catch(error){
        res.status(500).send({
            message:'Internal server error'
        });
    }

});

router.delete('/employees/:empID',(req, res) => {
    try{
        Employees.deleteOne({_id:req.params.empID},(err,data) =>{
            if(err){
                return res.status(400).send({message:'Error while deleting an employee,Please check data'});
            }
            res.status(201).send ({message:`successfully deleted employee ID ${req.params.empID}` });
        })
    }catch(error){
        res.status(500).send({
            message:'Internal server error'
        });
    }   

});

module.exports = router;