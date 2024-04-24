"use client";
import Link from "next/link";
import { useAuthContext } from "../context/AuthContext";
import { OrderForm } from "./OrderForm";
import { useCartContext } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";


const OrderCardCart = () => {
  const { user } = useAuthContext();
  const { cart, clearCart } = useCartContext();

  const totalQty = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.qty * item.precio,
    0
  );

 


  return (
    <div className="mx-auto card max-w-[30rem] bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">Orden</h2>

          {cart.length !== 0 && (
            <button onClick={clearCart} className="transition hover:scale-110">
              <FaRegTrashAlt color="red" />
            </button>
          )}
        </div>
        <hr />

        <div className="flex justify-between">
          <p>N° de productos</p>
          <span>{totalQty}</span>
        </div>

        <div className="flex justify-between">
          <h3>Total:</h3>
          <span>${totalPrice}</span>
        </div>

        <div className="card-actions ">
          {user.logged && <OrderForm />}

          {!user.logged && (
            <div role="alert" className="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Loguearse para finalizar compra</span>
              <div>
                <Link href={"/login"} className="btn btn-sm btn-primary">
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCardCart;
