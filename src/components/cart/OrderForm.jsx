"use client"
import Link from "next/link";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";

import { useState } from "react";
import { Timestamp, doc, setDoc, writeBatch } from "firebase/firestore";
import { db } from "../../../firebase/config";

export const OrderForm = () => {
  const { cart,clearCart } = useCartContext();
  const{user}=useAuthContext()

  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    direccion: "",
    email: user.email,
    telefono: 0,
  });

  const onChange=({target})=>{
    const{value,name}=target

    setValues({
      ...values,
      [name]: value
    })
  }

  
  

  const createOrder = async (values, items) => {

    setLoading(true)

    const orden = {
        cliente: values,
        productos: items.map(item => ({
            titulo: item.titulo,
            precio: item.precio,
            slug: item.slug,
            qty: item.qty,
            total: item.qty*item.precio
        })),
        fecha: new Date().toISOString(),
        buyID:Math.random().toString(36).substring(2, 20)
    }
      // CREACION ORDER

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "ordenes", String(docId))
    await setDoc(orderRef, orden)


    // ACTUALIZACION DE STOCK
    const batch = writeBatch(db);

    items.forEach((product) => {
      const productRef = doc(db, "productos", product.slug);
      const newStock = product.stock - product.qty;
      batch.update(productRef, { stock: newStock });
  
    });
  
    await batch.commit()
          .then(()=>setLoading(false))

    
    

  return docId
}

const onSubmit=async(e)=>{
  e.preventDefault()
  
    const result = await createOrder(values, cart, user.uid);
    
    
    console.log("Su numero de compra es:", result)
  
    clearCart()
}

  return (
    <div className="w-full mt-2">
      {cart.length >= 1 && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Dirección de envío"
            className="input input-bordered input-primary w-full "
            name="direccion"
            value={values.direccion}
            required
            onChange={onChange}
          />

          <input
            type="number"
            placeholder="Telefono de contacto"
            className="input input-bordered input-primary w-full md:w-1/2 mt-2 "
            name="telefono"
            value={values.telefono}
            required
            onChange={onChange}
          />

          <div className="mt-2">
            <div className="label ">
              <span className="label-text text-xs">
                Enviaremos link de pago al siguiente email:
              </span>
            </div>
            <input
              type="text"
              placeholder={user.email}
              className="input input-bordered w-full "
              disabled
              values={values.email}
            />
          </div>

          {cart.length === 0 ? (
        <Link href={"/productos/todo"} className="btn btn-primary w-full mt-3 ">
          VER PRODUCTOS
        </Link>
      ) : (
        <button type="submit" onSubmit={onSubmit} className="btn btn-primary w-full mt-3">COMPRAR</button>
      )}
        </form>
      )}

      

    </div>
  );
};
