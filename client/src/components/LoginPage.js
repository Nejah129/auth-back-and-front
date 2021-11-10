

import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router';
import { userLogin} from '../redux/actions';

const LoginPage = () => {
  const {loading,isAuth} = useSelector(state => state)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch()
  let handelSubmit=(e)=>{
    e.preventDefault();
    dispatch(userLogin({email,password}))
  }
    return (
        <div>{loading?<h1>loading ...</h1>:localStorage.getItem("token")?<Navigate to="/profile"/>
:         <Form onSubmit={handelSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>  
        }
        </div>
    )
}

export default LoginPage

