import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

export default function AdminLogin() {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    
    const formData = {
      "email":email,
      "password":password
    }
    
    axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/admins/signin',
      data: formData
    })
    .then(({ data }) => {
      localStorage.setItem( 'token', data.token )
    })
    .catch(function(err){
      console.log(err)
    })
    
    history.push('/admin-home')
  }

  return (
    <div className="login full flexible-col">
      <div className="flexible-col justify-content-center align-items-center full-height">

        <img src={logo} alt="logo" />

        <form id="login-form" onSubmit={handleSubmit}>
          <fieldset>
            <input className="login-input" onChange={(event) => setEmail(event.target.value) } type="email"  name="email" placeholder="Correo Electrónico" autoComplete="on" />
          </fieldset>
          <fieldset>
            <input className="login-input" onChange={(event) => setPassword(event.target.value) } type="password" name="password" placeholder="Contraseña" autoComplete="current-password" />
          </fieldset>
          <fieldset>
            <button className="green-button button">Ingresar</button>
          </fieldset>
        </form>
        
      </div>
    </div>
  )
}