import React, {useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux'
//import {useHistory} from 'react-router-dom'
import {login} from '../../redux/actions/auth.action'

import './_loginScreen.scss'
import { useHistory } from 'react-router-dom';



const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)
 
    const handleLogin = () => {
       dispatch(login())
    }
 
    const history = useHistory()

    useEffect(()=>{
        if(accessToken){
            history.push('/')
        }
    },[accessToken, history])

    return (
        <div className='login'>
            <div className='login__container'>
                <h2>Youtube Clone</h2>
                <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' />
                <button onClick = {handleLogin}>Login with Google</button>
                <p>This project is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
