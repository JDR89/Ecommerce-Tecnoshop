import { ProductDetail } from "@/components/productos/ProductDetail";


const getProduct=async(slug)=>{
  
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/producto/${slug}`,{
      cache: "no-store"
    })
    const data = await resp.json()
  
    return data
  } catch (error) {
    console.log(error,"ha ocurrido un error")
  }
}

export default async function ProductoPage({params}) {
  const {slug}=params
 const product = await getProduct(slug)
 
 
  return (
    <div>
      {
        product ? <ProductDetail product={product} /> : <div><h2>Buscando producto</h2></div>
      }
      
    </div>
    
  );
}
