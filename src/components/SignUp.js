import React, { useState } from 'react';
import {Link} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Login from './LogIn'


const SignUp = () => {
    let [ form, setForm ] = useState({})
    let [ errors, setErrors ] = useState({})
    let [done, setDone] = useState(false);
  
    const handleSubmit = e => {
      e.preventDefault()
      const inputErrors = findErrors()
      if ( Object.keys(inputErrors).length > 0 ) {
        setErrors(inputErrors)
      } else {
        alert("Your account has been successfully registered.")
        setDone(true);
      }
    }
    
    const setField = (input, value) => {
      setForm({
        ...form,
        [input]: value
      })
      if ( !!errors[input] ) setErrors({
        ...errors,
        [input]: null
      })
    }
  
    const findErrors = () => {
      const { fname, lname, email, passW, cPassword } = form
      const inputErrors = {}
      //First name validation
      const regName = /^[a-zA-Z]+[a-zA-Z]+$/;
      if ( !fname || fname === '' ) inputErrors.fname = 'cannot be blank!'
      else if ( !regName.test(fname)) inputErrors.fname = 'name can only contain alphabets'
      
      //Last name validation
      if ( !lname || lname === '' ) inputErrors.lname = 'cannot be blank!'
      else if ( !regName.test(lname)) inputErrors.lname = 'name can only contain alphabets'
      else if (fname === lname) inputErrors.lname = 'Last name and first name cannot be same'
  
      //Email validation
      const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if ( !email || email === '' ) inputErrors.email = 'cannot be blank!'
      else if ( !regEmail.test(email)) inputErrors.email = 'Please enter a valid email address'
     
      //Password validation
      const regPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if ( !passW || passW === '' ) inputErrors.passW = 'cannot be blank!'
      else if ( !regPassword.test(passW)) inputErrors.passW = 'Password must be alphanumeric and have a special character with at least length of 8'
      else if ( !passW.length >7 ) inputErrors.passW = 'Length must be more than 8' 
      
      //Confirm password validation
      if (cPassword !== passW) inputErrors.cPassword = "Passwords don't match"
  
      return inputErrors
    }
  
    return (<>
        {done && [<Login />]}
        
        {!done && [ 
      <div className='App d-flex flex-column p-2 bd-highlight align-items-center'>
        <h3>Registration Form</h3>
        <p> Come join our community. Let's setup your account! </p>
        <Form style={{ width: '330px', textAlign: 'left' }}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type='text' 
              onChange={ e => setField('fname', e.target.value) }
              isInvalid={ !!errors.fname }
            />
            <Form.Control.Feedback type='invalid'>{ errors.fname }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type='text' 
              onChange={ e => setField('lname', e.target.value) }
              isInvalid={ !!errors.lname }
            />
            <Form.Control.Feedback type='invalid'>{ errors.lname }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type='email' 
              onChange={ e => setField('email', e.target.value) }
              isInvalid={ !!errors.email }
            />
            <Form.Control.Feedback type='invalid'>{ errors.email }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type='password' 
              onChange={ e => setField('passW', e.target.value) }
              isInvalid={ !!errors.passW }
            />
            <Form.Control.Feedback type='invalid'>{ errors.passW}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type='password' 
              onChange={ e => setField('cPassword', e.target.value) }
              isInvalid={ !!errors.cPassword }
            />
            <Form.Control.Feedback type='invalid'>{ errors.cPassword }</Form.Control.Feedback>
          </Form.Group>
          <div className=" d-grid gap-2 mt-3 flex-column "  >
            <Button variant="success" style={{"width": "330px"}} type='submit' onClick={ handleSubmit }> Register </Button></div>
            Already Registered? &nbsp;
            <Link to="/login">Log In</Link>
        </Form>
      </div>]}</>
    )
  }
  
  export default SignUp;
  