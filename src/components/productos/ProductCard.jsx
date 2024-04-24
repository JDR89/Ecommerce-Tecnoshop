import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({ item }) => {
  
  return (
    <div key={item.slug} className="card max-w-96 bg-base-100 shadow-xl">
  <figure>
    {item.imagen && <Image style={{width: "auto", height: "auto"}} src={item.imagen} alt="Shoes" width={300} height={300} />}
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.titulo ? item.titulo : 'Titulo no disponible'}</h2>
    <p>{item.descripcion ? item.descripcion : 'Descripción no disponible'}</p>
    <div className="card-actions justify-end">
      {item.slug && (
        <Link href={`/producto/${item.slug}`}>
          <button className="btn btn-primary">Ver más</button>
        </Link>
      )}
    </div>
  </div>
</div>
  );
};
