"use client";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export const QtySelector = ({ product }) => {
  const [counter, setCounter] = useState(0);

  const { addToCart } = useCartContext();

  const add = () => {
    setCounter(counter + 1);
  };

  const remove =()=>{
    setCounter(counter - 1);
  }

  const handleAddToCart=(qty)=>{
    addToCart({
      ...product,
      qty,
    })

    setCounter(0)
  }
  
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-2">
          <button
          onClick={add}
         disabled={counter >= product.stock}
          className="btn-xs btn-circle bg-[#bebebe] hover:bg-orange-600 hover:text-white">
            +
          </button>

          <span  className="mx-5">{counter}</span>
          <button
          onClick={remove}
          disabled={counter <= 1}
          className="btn-xs btn-circle bg-[#bebebe] hover:bg-orange-600 hover:text-white">
            -
          </button>
        </div>

        <button
        onClick={()=>handleAddToCart(counter)}
        className="mt-3 btn btn-outline hover:bg-orange-600 ">
          Agregar al carrito
        </button>

        <div className="w-full flex justify-between mt-5 mx-auto gap-1"></div>
      </div>
    </>
  );
};
