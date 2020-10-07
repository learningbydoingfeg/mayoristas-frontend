import React, { useEffect } from 'react'
import axios from 'axios'
import Login from './components/Login'
import AdminLogin from './components/AdminLogin'
import './App.css'

import Home from './components/Home'
import AdminHome from './components/AdminHome'
import Sidebar from './components/Sidebar'
import SidebarAdmin from './components/SidebarAdmin'

import NuevoPedido from './components/NuevoPedido'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect,
  useHistory
} from "react-router-dom";


function PrivateRoute(props) {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token) {
      history.push('/Login')
    }
  } , [history]  );


  return (
    <Route {...props} />
  );
}

function PrivateAdminRoute(props) {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token) {
      history.push('/admin-home')
    }
  } , [history]  );


  return (
    <Route {...props} />
  );
}






export default function App() {

  return (
    <div className="App">
      <div className="App-Header">Header</div>

      <div className="App-Body">
        <Router>
          <Switch>

          <PrivateRoute exact path="/orders/new">
              <div className="view-wrapper flexible-row">
                <Sidebar />
                <NuevoPedido />
              </div>
            </PrivateRoute>

            <PrivateAdminRoute exact path="/admin-home">
              <div className="view-wrapper flexible-row">
                <SidebarAdmin />
                <AdminHome />
              </div>
            </PrivateAdminRoute>

            <Route exact path="/">
              <div className="view-wrapper flexible-row">
                <Sidebar />
                <Home />
              </div>
            </Route>

            <Route exact path="/login">
              <div className="view-wrapper flexible-row">  
                <Login />
              </div>
            </Route>

            <Route exact path="/admin">
              <div className="view-wrapper flexible-row">  
                <AdminLogin />
              </div>
            </Route>

            <Redirect from='*' to='/' />

          </Switch>
        </Router>
      </div>

      <div className="App-Footer">Footer</div>
    </div>
  )
}

