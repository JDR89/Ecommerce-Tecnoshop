"use client"

import { FaRegTrashAlt } from "react-icons/fa";


export const BtnDeleteOrder = ({ buyID,deleteOrder }) => {

 
  return (
    <button onClick={() => deleteOrder(buyID)}>
      <FaRegTrashAlt size={20} />
    </button>
  );
};
