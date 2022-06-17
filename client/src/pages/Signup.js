import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Auth.module.css'

const Signup = () => {

  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(false);
  const navigate = useNavigate()

  const formSubmitHandler = async (e) => {
    e.preventDefault()
      setError(false)
      if(!name || !password || !email) {
        setError(true)
        return
      }
      const passedObj = {
        email,
        username: name,
        password,
      }
      const rawResponse = await fetch('/api/signup', {
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
      navigate('/login')
      setError(false)
  }

  return (
    <div className={styles.loginFormContainer}>
        <form className={styles.loginForm} onSubmit={formSubmitHandler}>
            <input type='text' placeholder='email' className={styles.usernameInput + ' ' + (error ? styles.error : '')} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='text' placeholder='name' className={styles.usernameInput + ' ' + (error ? styles.error : '')} value={name} onChange={(e) => setName(e.target.value)}/>
            <input type='password' placeholder='password' className={styles.passwordInput + ' ' + (error ? styles.error : '')} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="true" />
            <button className={styles.loginButton} type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default Signup