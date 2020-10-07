import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from '../assets/logo.png'

const sesionUser = () => {
  
}



const Sidebar = () => {
  return (
  <div className="App-Sidebar">
  <div className="App-Sidebar-Container">

  
    <div className="Logo-container"><img className="logo-img" src={Logo} alt="logo"/></div>
    
    <div className="Profile-container">
      
      <div className="Profile-Client-Title-Container center">
        <span className="uppercase blackest">Nombre de Cadena</span>
      </div>
      
      <div className="User-Info-Container flexible-row align-items-center">
        
        <div className="pic-user ">
          <img src="" alt="pic-user" />
        </div>
        
        <div className="Profile-Client-Info-Container flexible-col">
          <span>Nombre Tienda</span>
          <span>Cargo Usuario</span>
          <span>Editar Perfil</span>
          <Link to="/login"><span>Salir de la Cuenta</span></Link>
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
      
      <div className="center blackest">Usuarios a Cargo</div>
      <div className="flexible-row align-items-center">
        
        
        <div className="flexible-col">
          <span>Usuario 1</span>
          <span>Usuario 2</span>
          <span>Usuario 3</span>
        </div>
        
      </div>
      
    </div>
    
  </div>
  </div>
  )
};


export default Sidebar;