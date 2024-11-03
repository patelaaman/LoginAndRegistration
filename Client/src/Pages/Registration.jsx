import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {message} from "antd";
const Registration=()=>{
    const [input,setInput] = useState({})
    const handleinput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values,[name]:value}))
    }

    const handelSubmit=()=>{
      let api = "http://localhost:8080/stu/sturegis"
      axios.post(api,input).then((res)=>{
        message.success("Data Inserted SeccesFully ")
      })

    }
    return(
        <>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Rollno</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno} onChange={handleinput} placeholder="Enter Rollno" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleinput} placeholder="Enter NAme" />
        
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter E-mail</Form.Label>
        <Form.Control type="text" name="email" value={input.email} onChange={handleinput} placeholder="Enter email" />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name="password" value={input.password} onChange={handleinput} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={handelSubmit} type="submit">
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Registration;