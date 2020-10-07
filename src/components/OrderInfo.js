import React from 'react'

const OrderInfo = () => {

  return (
    <div className="Order-Info status-3">

      <div className="flexible-row justify-content-around align-items-center">

        <div className="pic-user quarter">
          <img src="" alt="pic-user" />
        </div>

        <div className="">
          <div>Name Tienda</div>
          <div>Fecha</div>
        </div>

        <div className="half">$19'000.000</div>
      </div>

      <div className="Order-Resume-Box color-white">
        <form id="Order-Form" className="flexible-col">
          <fieldset>
            <label className="form-label">Dirección de entrega</label><br />
            <input className="form-input"></input>
          </fieldset>
          <fieldset>
            <label className="form-label">Responsable</label><br />
            <input className="form-input"></input>
          </fieldset>
          <fieldset>
            <label className="form-label">Notas</label><br />
            <input className="form-input notes"></input>
          </fieldset>

          <div className="Order-Resume-Box-Container flexible-col">
            <span className="form-label">Resumen</span>
            <span>Impuestos</span>
            <span>Total</span>
          </div>

          <button className="App-Button color-yellow">Guardar</button>
          <button className="App-Button color-green">Enviar Para Aprobación</button>
        </form>
      </div>

    </div>
  )
}


export default OrderInfo