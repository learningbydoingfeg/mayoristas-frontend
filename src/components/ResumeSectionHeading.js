import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ResumeSectionHeading = () => {
  

  return (
    <React.Fragment>
      <div className="Resume-Section-Heading flexible-row justify-content-between">
        <div><span>Panel de Control</span></div>
        <div><Link to="/orders/new"><button>Hacer un pedido</button></Link></div>
      </div>

      <div className="Resume-Section-Boxes flexible-row justify-content-between">
        <div className="Resume-Order color-yellow flexible-col">
          <span className="small">Pedidos Pendientes</span>
          <span className="total-case">$ 4.325.000</span>
          <span className="super-small uppercase">total pendiente</span>

        </div>
        <div className="Resume-Order color-red flexible-col">
          <span className="small">Pedidos Rechazados</span>
          <span className="total-case">$ 2.525.000</span>
          <span className="super-small uppercase">total rechazado</span>
        </div>
        <div className="Resume-Order color-green flexible-col">
          <span className="small">Pedidos Aprobados</span>
          <span className="total-case">$ 14.325.000</span>
          <span className="super-small uppercase">total confirmado</span>
        </div>
        <div className="Resume-Order color-gray flexible-col">
          <span className="small">Guardado</span>
          <span className="total-case">$ 1.325.000</span>
          <span className="super-small uppercase">total guardado</span>
        </div>
      </div>
    </React.Fragment>
  )
}


export default ResumeSectionHeading