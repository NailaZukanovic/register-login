import React from 'react'
import AuthService from '../../services/auth-servis'
import {useHistory} from "react-router-dom"
import { useState } from 'react'

function Register() {

  const [state, setState] = useState({
    name:"",
    pass:""
  })

  let history  = useHistory();

  const onRegister = () => {
    AuthService.register(state)
    .then(res => {
        if(res.data === "ok"){
          history.push('/')
        }
        else{
          history.push('/register')
        }
    })
  }

  return (
    <div className='container'>
       <div>Register</div>
    <div className='col-6 offset-3'>
    <input onChange={(e) => setState({...state,name:e.target.value})} type="text" placeholder='name' className='form-control'/><br/>
    <input onChange={(e) => setState({...state,pass:e.target.value})} type="password" placeholder='password' className='form-control'/><br/>
    <button onClick={onRegister} className='btn btn-primary'>Register</button>
    </div>
    </div>
   
  )
}

export default Register