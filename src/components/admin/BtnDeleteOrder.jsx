"use client"

import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { FaRegTrashAlt } from "react-icons/fa";
import { db } from "../../../firebase/config";


export const BtnDeleteOrder = ({ buyID,orders}) => {
  console.log(orders)
  const deleteOrder = async (buyID) => {
    
    try {
      const ordersRef = collection(db, "ordenes");
      const querySnapshot = await getDocs(ordersRef);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.buyID === buyID) {
          deleteDoc(doc.ref);
          console.log("Documento eliminado:", doc.id);
        }
      });
    } catch (error) {
      console.error("Error al eliminar el documento:", error);
    }
  };
  return (
    <button onClick={() => deleteOrder(buyID)}>
      <FaRegTrashAlt size={20} />
    </button>
  );
};
