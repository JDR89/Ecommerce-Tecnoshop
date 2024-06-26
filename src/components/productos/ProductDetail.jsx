
import Link from "next/link";
import { QtySelector } from "./QtySelector";
export const ProductDetail = ({product}) => {

  
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={product.imagen}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-600">
            {product.titulo}
            <span className="ml-2">${product.precio}</span>
            <br className="hidden lg:inline-block text-sm" />
          </h1>
          <QtySelector product={product} />
          <p className="mb-8 leading-relaxed text-white">
            {product.descripcion}
          </p>
          <div className="flex justify-center">
            <Link href={"/cart"} className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
              Ir al carrito
            </Link>
            <Link href={"/productos/todo"}>
              {" "}
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Seguir viendo
              </button>
            </Link>
          </div>
        </div>
      </div>

      
    </section>
  )
}
