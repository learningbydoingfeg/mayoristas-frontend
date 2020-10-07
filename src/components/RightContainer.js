import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './Home'
import NuevoPedido from './NuevoPedido'






// class RightContainer extends React.Component {
//   state = {
//     products: []
//   }


//   getProducts(){
//     axios({
//       method:'GET',
//       baseURL: 'http://localhost:8000/',
//       url: 'products',
//     })

//   }

//   componentDidMount(){
//     console.log('me monte')
//     this.getProducts()
//     console.log('pedi productos')
//   }

//   render(){



//     return(
//       <span>Post</span>
//     )
//   }
// }




const RightContainer = () => {
  return (

    <div className="App-Content flexible-col justify-content-center align-items-center">
      <div className="App-Main">

        <Switch>
          <Route exact path="/pedido" component={NuevoPedido} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route exact path="/pedidos-anteriores" component={PedidosAnteriores} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Redirect redirect from="*" to="/"></Redirect>
        </Switch>

      </div>
    </div>

  )

}


export default RightContainer


const Pedidos = () => {
  return (
    <h1>hi pedidos</h1>
  )
}

const PedidosAnteriores = () => {
  return (
    <h1>hi anteriroes</h1>
  )
}

const Login = () => {
  return (
    <React.Fragment>
      <form>
        <input placeholder="Correo electrónico" type="text" />
        <input placeholder="Contraseña" type="password" />
        <button>Acceder</button>
      </form>
    </React.Fragment>
  )
}

