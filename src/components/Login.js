import React from 'react'
import logo from '../assets/logo.png'


export default function Login() {


  function handleClick(event) {
    event.preventDefault()
    console.log('click')
  }

  return (
    <div className="login full flexible-col">
      <div className="flexible-col justify-content-center align-items-center full-height">

        <img src={logo} alt="logo" />

        <form id="login-form">
          <fieldset>
            <input className="login-input" type="email" name="email" placeholder="Correo Electrónico" autoComplete="on"/>
          </fieldset>
          <fieldset>
            <input className="login-input" type="password" placeholder="Contraseña" />
          </fieldset>
          <fieldset>
            <button className="green-button button" onClick={handleClick}>Ingresar</button>
          </fieldset>
          <fieldset>
            <p className="white">Olvidé mi contraseña</p>
          </fieldset>
        </form>
        <p>Contactar con un asesor</p>
      </div>
    </div>
  )
}