import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
  const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        
      }

    return (
      <div className='App d-flex  m-3 flex-column align-items-center justify-content-center'>
        <h3>Account Login</h3>
        <hr style={{ width:"20%", border: "1px solid black"}} />
        <Form style={{ width: '330px', textAlign: 'left', marginTop: '2' }}>
          <Form.Group>
            <Form.Label>User ID</Form.Label>
            <Form.Control 
              type='text' placeholder="Please enter your email address"
             
            />
            </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type='password' placeholder='Please enter your password'
            />
          </Form.Group>
          <div className="App d-flex mt-3 flex-column justify-content-center"  >
            <Button style={{"width":"330px"}}  variant="primary"  type='submit' onClick={ handleSubmit }> Login</Button></div>
          <p> Forgot your password? <Link to="">Click here</Link> </p>
        Not Registered? &nbsp;
        <Link to="/signup">Sign Up</Link>
        </Form>
        
      </div>
    )
}

  export default Login;
  