"use client";
import Link from "next/link";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase/config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export const EditForm = ({ product }) => {
  const [values, setValues] = useState(product);
  const [file, setFile] = useState(null);

  const router = useRouter();

  const updateProduct = async (values) => {
    let fileUrl = values?.imagen;

    if (file) {
      const storageRef = ref(storage, values?.slug);
      const fileSnapshot = await uploadBytes(storageRef, file);
      fileUrl = await getDownloadURL(fileSnapshot.ref);
    }

    const docRef = doc(db, "productos", values.slug);
    return updateDoc(docRef, {
      titulo: values.titulo,
      descripcion: values.descripcion,
      stock: values.stock,
      precio: values.precio,
      imagen: fileUrl,
      slug: values.slug,
      categoria: values.categoria,
    })
      .then(() => router.push("/admin"))
      .then(() => router.refresh());
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updateProduct(values);
  };

  const deleteProduct = async (slug) => {
    try {
      await deleteDoc(doc(db, "productos", slug))
        .then(() => router.push("/admin"))
        .then(() => router.refresh());
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="flex justify-center my-0 lg:my-8  ">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={onSubmit} className="card-body gap-3">
          <h2 className="flex justify-center text-xl font-medium">
            Editar producto
          </h2>
          <div className="form-control">
            <label className="ml-2 text-sm">Título</label>
            <input
              type="text"
              name="titulo"
              onChange={onChange}
              value={values.titulo}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Slug</label>
            <input
              type="text"
              name="slug"
              value={values.slug}
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
              value={values.descripcion}
              className="textarea textarea-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Categoría</label>
            <select
              name="categoria"
              onChange={onChange}
              defaultValue={values.categoria}
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
              value={values.stock}
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
              value={values.precio}
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
            <button
              onClick={onSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Editar
            </button>
          </div>

          <Link href={"/admin"} className="btn btn-outline btn-error w-full">
            Cancel
          </Link>
        </form>

        <div className="card-body">
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn  w-full  "
          >
            Eliminar
          </button>
        </div>
      </div>

      {/* MODAL */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={() => deleteProduct(values.slug)} className="btn btn-outline hover:bg-orange-600 ">Eliminar</button>
              <Link href={"/admin"}  className="btn  text-white ml-2">Close</Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
