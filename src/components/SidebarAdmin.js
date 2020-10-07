import axios from 'axios';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Logo from '../assets/logo.png'

const SidebarAdmin = () => {
  const history = useHistory()
  
  function handleLogOut() {
    localStorage.removeItem('token')
    history.push('login')
  }

  // axios({
  //   method: 'POST',
  //   baseURL: process.env.REACT_APP_SERVER_URL,
  //   url: '/admins/signin',
  //   data: formData
  // })
  // .then(({ data }) => {
  //   localStorage.setItem( 'token', data.token )
  // })
  // .catch(function(err){
  //   console.log(err)
  // })

  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     baseURL: process.env.REACT_APP_SERVER_URL,
  //     url: '/admin',
  //     headers : {
  //       Authorization : `Bearer ${localStorage.getItem('token')}`
  //     }
      
  //   })
  // }, [])

  return (
    <div className="App-Sidebar">
      <div className="App-Sidebar-Container">


        <div className="Logo-container"><img className="logo-img" src={Logo} alt="logo" /></div>

        <div className="Profile-container">

          <div className="Profile-Client-Title-Container center">
            <span className="uppercase blackest">Ovante Distribuciones</span>
          </div>

          <div className="User-Info-Container flexible-row align-items-center">

            <div className="pic-user ">
              <img src="" alt="pic-user" />
            </div>

            <div className="Profile-Client-Info-Container flexible-col">
              <span>Administrador</span>
              <span>Editar Perfil</span>
              <span className="clickable-text" onClick={handleLogOut}>Salir de la Cuenta</span>
            </div>

          </div>

        </div>

        <div className="Menu-container">


          <div className="flexible-row align-items-center">


            <div className="flexible-col">

              <span><Link to="/">Panel de Control</Link></span>
              <span><Link to="/pedidos">Todos los Pedidos</Link></span>
              <span><Link to="/pedidos-anteriores">Pedidos Anteriores</Link></span>
            </div>

          </div>

        </div>

        <div className="Users-container">

          <div className="center blackest">Clientes</div>
          <div className="flexible-row align-items-center">

            <div className="flexible-col">
              <span>Cliente 1</span>
              <span>Cliente 2</span>
              <span>Cliente 3</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
};


export default SidebarAdmin;