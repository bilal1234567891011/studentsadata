import React, { useEffect, useState } from 'react'
import './Form.css'
import uuid from "react-uuid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';


function FormMain() {

  const [Name,setName]=useState('')
  const [gender,setgender]=useState('')
  const [Dob,setDob]=useState(Date)
  const [selects,setselects]=useState()
  const[Division,SetDivision]=useState()
  const[id,setId]=useState()
 
 

  useEffect(()=>{

    // unique id generation
    setId(uuid().slice(0,3))
  
   },[])


   const handleSubmit= async (e)=>{
    e.preventDefault()
  setId(uuid().slice(0,3))
 

  const body={
    id,
    Name,
    Dob,
    selects,
    gender,
    Division,
    
  
  }
 const result=await axios.post('http://localhost:8000/addStudent',body)
alert(result.data.message)


}


   console.log(gender);
   console.log(Dob);
   console.log(Division);
   console.log(Name);
   console.log(selects);

  const date =new Date()
  let mn=date.getMonth()+1
  let yr=date.getFullYear()
  let day=date.getDate()
  if(mn<=12){
   mn="0"+mn;
  }
  else{
   mn=mn
  }
  let dobdate=yr+"-"+mn+"-"+day
 


  return (
    <div className='Form-main'>
        <Form className=""  >
          {" "}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {" "}
            <Form.Label className='FormLable' >User Name</Form.Label>
            <Form.Control onChange={(e)=>setName(e.target.value)} className='FormControl'  type="text"
              placeholder=""
            />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  className='FormLable' >Date of Birth</Form.Label>{" "}
            <Form.Control className='FormControl'  max={dobdate}  onChange={(e)=>setDob(e.target.value)} type="date" placeholder="" />{" "}
          </Form.Group>
       
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
          <Form.Label  className='FormLable' >Gender</Form.Label>{" "}
<input  onChange={(e)=>setgender(e.target.value)} style={{marginTop:'1.3rem'}}  type="radio" value="Male" name="gender" /> Male
< input  onChange={(e)=>setgender(e.target.value)} style={{marginLeft:'10px'}} type="radio" value="Female" name="gender" /> Female
<input  onChange={(e)=>setgender(e.target.value)}  style={{marginLeft:'10px'}} type="radio" value="Other" name="gender" /> Other

</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
<label className='FormLable' style={{marginTop:'1.3rem'}} >Class</label>{" "}
<select  value={selects} style={{marginLeft:'.7rem',outline:'none',border:'none',padding:'5px'}} onChange={e=>setselects(e.target.value)}> 
 <option ></option>
 <option >I</option>
 <option>II</option>
 <option>III</option>
 <option>IV</option>
 <option>V</option>
 <option>VI</option>
 <option>VII</option>
 <option>VIII</option>
 <option>IX</option>
 <option>X</option>
 <option>XI</option>
 <option> XII</option>
</select>
          
        
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
<label className='FormLable' >Division</label>
<select  value={Division} style={{marginLeft:'.7rem',outline:'none',padding:'10px',border:'none'}} onChange={e=>SetDivision(e.target.value)}> 
 <option ></option>
 <option >A</option>
 <option>B</option>
 <option>C</option>

</select>
          
        
</Form.Group>
<Button onClick={e=>handleSubmit(e)} className='btn1-register' variant="light">
          <i class="fa-solid fa-user-plus"></i> Register
          </Button>
        
          
            </Form> 

    </div>
  )
}

export default FormMain