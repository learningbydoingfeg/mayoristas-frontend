import React from 'react'

const orders = [
  {
    "solcode":"#04957", 
    "date_updated":"04/02/2020",
    "estado":"Pendiente",
    "value":3235672,
    "tax":12346,
    "total":5678,
  },
  {
    "solcode":"#0435957", 
    "date_updated":"04/01/2020",
    "estado":"Rechazado",
    "value":2235672,
    "tax":2346,
    "total":5675678,
  },
  {
    "solcode":"#0495735", 
    "date_updated":"04/03/1990",
    "estado":"Aprobado",
    "value":6235672,
    "tax":22346,
    "total":45678,
  },
  {
    "solcode":"#0413957", 
    "date_updated":"04/02/2020",
    "estado":"Guardado",
    "value":3235672,
    "tax":12346,
    "total":5678,
  }
]

const ResumeSectionTable = () => {

  return (
    <div className="ResumeSectionTable">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Valor</th>
            <th>Impuestos</th>
            <th>Total</th>
          </tr>
        </thead>
        
        <tbody>
          {orders.map((order) => <tr key={order.id}>
            <td>{order.solcode}</td>
            <td>{order.date_updated}</td>
            <td>{order.estado}</td>
            <td>{order.value}</td>
            <td>{order.tax}</td>
            <td>{order.total}</td>
          </tr>)}
          <tr>
          </tr>
        </tbody>
      </table>
    </div>
  )


}


export default ResumeSectionTable