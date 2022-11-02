import React, {useEffect} from 'react'
import AuthService from '../../services/auth-servis'
import {useHistory} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {removeUser, setUser} from "../login/store/actions"


function Home() {
    const dispatch = useDispatch();
    const userStore = useSelector(store => store.userStore)
    const history = useHistory();

    useEffect(()=> {
        if(AuthService.getUserData() === null){
            history.push('/')
        }
        if(userStore){
            dispatch(setUser(AuthService.getUserData()))
        }
    },[])

    const onLogout = () => {
        AuthService.logout(history)
        dispatch(removeUser());
    }

  return (
    <div className='container'>
    <div>Home</div>
    <h2>Hello {userStore.name}</h2>
    <button className='btn btn-danger' onClick={onLogout}>LOGOUT</button>
    </div>
  )
}

export default Home