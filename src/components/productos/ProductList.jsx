
import { ProductCard} from "./ProductCard"


export const ProductList = ({products}) => {
  
  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {products.map((item) => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </div>
    </div>
  )
}
