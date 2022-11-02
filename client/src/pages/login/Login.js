import React from "react";
import { useState } from "react";
import AuthService from "../../services/auth-servis";
import {useDispatch} from "react-redux"
import { setUser } from "./store/actions"
import {useHistory} from "react-router-dom"

function Login() {

  const [state, setState] = useState({
    username:"",
    password:""
  })

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = () => {
    AuthService.login(state)
    .then(res => {
        AuthService.storeUserData(res.data);
        dispatch(setUser(res.data))
        history.push('/home')
    })
  }

  return (
    <div className="container">
      <div>Login</div>
      <div className="col-6 offset-3">
        <input  onChange={(e) => {setState({...state,username:e.target.value})}} type="text" placeholder="name" className="form-control" />
        <br />
        <input
        onChange={(e) => {setState({...state,password:e.target.value})}}
          type="password"
          placeholder="password"
          className="form-control"
        />
        <br />
        <button onClick={onLogin} className="btn btn-info">Login</button>
      </div>
    </div>
  );
}

export default Login;
