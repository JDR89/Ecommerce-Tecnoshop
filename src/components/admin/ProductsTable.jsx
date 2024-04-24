
import Image from "next/image";
import Link from "next/link";




export const ProductsTable = ({ products }) => {

 

  return (
    <div className="overflow-x-auto">
      
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Slug</th>
            <th>Título</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoria</th>
            <th>Descripcion</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          
            {products.map((e) => (
              <tr key={e.slug}>
                <th>{e.slug}</th>
                <th>{e.titulo}</th>
                <td>{e.precio}</td>
                <th>{e.stock}</th>
                <th>{e.categoria}</th>
                <td>{e.descripcion}</td>
                <th>
                    <Image
                    src={e.imagen}
                    alt={e.titulo}
                    width={50}
                    height={50}
                    />
                </th>
                <th>
                    <Link href={`/admin/edit/${e.slug}`} className="btn btn-success btn-sm">Edit</Link>
                </th>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
};
