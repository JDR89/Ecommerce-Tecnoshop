import OrderCardCart from "@/components/cart/OrderCardCart";
import ProductCardCart from "@/components/cart/ProductCardCart";

export default function CartPage(){

    return(
        <div>
             <div className="container mx-auto">
      
    <div className="flex flex-col md:flex-row min-h-screen mt-2 md:mt-5">
      
      
      <div className="w-full md:w-1/2 p-4">
        
          <ProductCardCart />
       
      </div>



      <div className=" w-full md:w-1/2 p-4 mt-4 md:mt-0 ">
        
         
          <OrderCardCart />
        
      </div>
    </div>

    </div>
        </div>
    )
}