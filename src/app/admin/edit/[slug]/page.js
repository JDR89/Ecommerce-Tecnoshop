import { EditForm } from "@/components/admin/EditForm"

const getProduct=async(slug)=>{
    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/producto/${slug}`,{
        cache: "no-store"})
      const data = await resp.json()
      return data
    } catch (error) {
      console.log(error,"ha ocurrido un error")
    }
  }

export default async function EditPage({params}) {

    const {slug}=params
  
      const product = await getProduct(slug)
      

    return(
       (product) ? <EditForm product={product} /> : <div><h2>Buscando Producto</h2></div>
        )
}