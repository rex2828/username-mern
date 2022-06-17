import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Auth.module.css'

const Login = (props) => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(false);
  const navigate = useNavigate()

  const formSubmitHandler = async (e) => {
    e.preventDefault()
      setError(false)
      if(!email || !password) {
        setError(true)
        return
      }
      const passedObj = {
        email,
        password,
      }
      const rawResponse = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(passedObj)
      });
      const response = await rawResponse.json();
      if(response.status === "failed"){
        setError(true)
        return;
      }
      localStorage.setItem('user',JSON.stringify(response.user))
      props.loginHandler()
      navigate('/')
      setError(false)
  }

  return (
    <div className={styles.loginFormContainer}>
        <form className={styles.loginForm} onSubmit={formSubmitHandler}>
            <input type='text' placeholder='email' className={styles.usernameInput + ' ' + (error ? styles.error : '')} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='password' className={styles.passwordInput + ' ' + (error ? styles.error : '')} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="true" />
            <button className={styles.loginButton} type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login