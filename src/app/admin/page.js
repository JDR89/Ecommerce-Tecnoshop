import { Footer } from "@/components/admin/Footer";

import { ProductsTable } from "@/components/admin/ProductsTable";
import { AdminNav } from "@/components/ui/AdminNav";
import Link from "next/link";

export default async function DashBoardPage() {
 try{
  const resp = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/productos/todo`, {
    cache: "no-store",
  });
  const products = await resp.json();
  
  return (
    <>
      <h1 className="text-3xl mt-2 flex justify-center">Panel de administración</h1>

      <div className="flex justify-center mt-2">
        <AdminNav />
        </div>

      <div className="flex  items-center justify-between ">
        <div></div>
        <Link href="/admin/create" className="btn flex justify-end mr-4 btn-success">Add</Link>
      </div>

      {
        (products.length === 0) ? <h1 className="text-3xl mt-2 flex justify-center">No hay productos cargados</h1> : <ProductsTable products={products} />
      }

      <Footer />
    </>
  );
 }catch(err){
  console.log(err)
  return(
    
    <h1 className="text-3xl mt-2 flex justify-center">Error de carga de productos</h1>
  )
 }

  

 
}
