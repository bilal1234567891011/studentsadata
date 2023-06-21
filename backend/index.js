const express=require('express')
const logic=require('./service/logic')

const server=express()  
const cors=require('cors')
 server.use(cors({origin:'http://localhost:3000'}))

 server.use(express.json())

 server.listen(8000,()=>{
    console.log("server started at port 8000");
 })  
 
 // api call to add a student
 server.post('/addStudent',(req,res)=>{
    logic.addStudent(req.body.id,req.body.Name,req.body.Dob,req.body.selects,req.body.gender,req.body.Division).then(result=>{
        res.status(result.statusCode).json(result)
    })
 })


 //  api call to get all students
 server.get('/getStudent',(req,res)=>{
   logic.allStudent().then(result=>{
       res.status(result.statusCode).json(result)
   })
})