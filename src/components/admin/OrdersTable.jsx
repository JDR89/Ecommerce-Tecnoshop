"use client"

import { BtnDeleteOrder } from "./BtnDeleteOrder";



export const OrdersTable =  ({orders}) => {

  return(
    <tbody>
    
              {/* row */}
              {orders.map((e) => (
                <tr key={e.fecha}>
                  <td>{e.cliente.email}</td>
                  <td>{e.fecha}</td>
                  <td>
                    {e.productos.map((e) => (
                      <div
                        key={e.titulo}
                        className="flex justify-center flex-col"
                      >
                        <span key={e.fecha}>{e.titulo}</span>
                      </div>
                    ))}
                  </td>

                  <td>
                    {e.productos.map((e) => (
                      <div
                        key={e.titulo}
                        className="flex justify-center flex-col"
                      >
                        <span key={e.fecha}>{e.qty}</span>
                      </div>
                    ))}
                  </td>

                  <td>
                    {e.productos.reduce((acc, item) => acc + item.total, 0)}
                  </td>

                  <td>{e.cliente.direccion}</td>

                  <td>{e.cliente.telefono}</td>

                  <td className="flex ">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg mx-5"
                    />

                    <BtnDeleteOrder  buyID={e.buyID} />
                  </td>
                </tr>
              ))}
            </tbody>
  )
};
