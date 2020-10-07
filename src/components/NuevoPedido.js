import React from 'react';
import AddedProductsTable from './AddedProductsTable';
import OrderInfo from './OrderInfo';
import ClientProductsTable from './ClientProductsTable';
import OrderFilter from './OrderFilter';


const NuevoPedido = () => {
  return (

    <div className="flexible-col scrollable-container">

      <div className="flexible-row">
        <AddedProductsTable />
        <OrderInfo />
      </div>

      <div className="separator">
        <span className="blackest big">Buscar Productos</span>
      </div>

      <div className="flexible-row">
        <OrderFilter />
        <ClientProductsTable />
      </div>

    </div>
  )

};



export default NuevoPedido;
