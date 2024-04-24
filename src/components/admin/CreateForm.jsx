"use client";
import { useState } from "react";
import { db, storage } from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";

export const CreateForm = () => {

  const router = useRouter()

  const [values, setValues] = useState({
    titulo: "",
    slug: "",
    descripcion: "",
    categoria: "auriculares",
    stock: 0,
    precio: 0,
  });

  const [file, setFile] = useState(null)


  const onChange = ({ target }) => {
    const { name, value } = target;

    const updatedValue =
      name === "stock" || name === "precio" ? parseFloat(value) : value;
    setValues({
      ...values,
      [name]: updatedValue,
    });
  };

  const onSubmit = async(e) => {
    e.preventDefault();

    await createProduct(values,file)
  };

  const createProduct=async(values,file)=>{

    const storageRef = ref(storage, values.slug)
    
    const fileSnapshot = await uploadBytes(storageRef, file)

    const fileURL = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db, "productos", values.slug)

    return setDoc(docRef, {
      ...values,
      imagen: fileURL
    })
      .then(() => router.push("/admin"))
      .then(() => router.refresh())
  }

  return (
    <div className="flex justify-center my-2 ">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={onSubmit} className="card-body gap-3">
          <h2 className="flex justify-center text-xl font-medium">
            Agrega un nuevo producto
          </h2>
          <div className="form-control">
            <label className="ml-2 text-sm">Título</label>
            <input
              type="text"
              name="titulo"
              onChange={onChange}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Slug</label>
            <input
              type="text"
              name="slug"
              onChange={onChange}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Descripción</label>
            <textarea
              type="text"
              name="descripcion"
              onChange={onChange}
              className="textarea textarea-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Categoría</label>
            <select
              name="categoria"
              onChange={onChange}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="auriculares">Auriculares</option>
              <option value="camaras">Camaras</option>
              <option value="mouses">Mouse</option>
              <option value="teclados">Teclados</option>
            </select>
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Stock</label>
            <input
              type="number"
              name="stock"
              onChange={onChange}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Precio</label>
            <input
              type="number"
              name="precio"
              onChange={onChange}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Imagen</label>
            <input
              type="file"
              placeholder="Imagen"
              className="file-input file-input-bordered w-full max-w-xs"
                onChange={(e) => setFile(e.target.files[0])}
                allowmultiple="false"
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>

          <button className="btn btn-outline btn-error w-full">Cancel</button>
        </form>
      </div>
    </div>
  );
};
