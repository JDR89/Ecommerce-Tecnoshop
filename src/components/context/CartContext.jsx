"use client"

import { createContext, useContext, useState }  from "react"


const CartContext = createContext()


export const useCartContext = () => useContext(CartContext)


export const CartProvider =({children})=>{

    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {

        
       const arrCart = structuredClone(cart)
       const findIndex = arrCart.findIndex(e => e.slug === product.slug)
       
       if(findIndex === -1){

        const newItem ={
            ...product,
        }

        setCart([...arrCart,newItem])

       }else{

        const item = arrCart[findIndex];
        item.qty += product.qty;
      
        setCart(arrCart);
       }
        
    }

    const deleteItem=(slug)=>{
        const arrCart = structuredClone(cart)
        const newCart = arrCart.filter(e=>e.slug !== slug)
        setCart(newCart)
    }

    const clearCart=()=>{
        setCart([])
    }

    

    return(
        <CartContext.Provider value={{
            addToCart,
            cart,
            deleteItem,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}
