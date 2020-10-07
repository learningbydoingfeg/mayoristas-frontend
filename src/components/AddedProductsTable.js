import React from 'react'

const products = [
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

const AddedProductsTable = () => {

  return (
    <div className="AddedProductsTable">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Valor Unidad</th>
            <th>Cant</th>
            <th>Total</th>
          </tr>
        </thead>
        
        <tbody>
          {products.map((product) => <tr key={product.id}>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>)}
          <tr>
          </tr>
        </tbody>
      </table>
    </div>
  )


}


export default AddedProductsTable