
import { AdminNav } from "@/components/ui/AdminNav";
import { deleteDoc, collection, getDocs } from "firebase/firestore";

import { db } from "../../../../firebase/config";

import { OrdersTable } from "@/components/admin/OrdersTable";

export default async function OrdersPage() {
  try {
    const getOrders = async () => {
      const ordersRef = collection(db, "ordenes");
      const querySnapshot = await getDocs(ordersRef);
      const docs = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      return docs;
    };
    
    const orders = await getOrders();
    
    return (
      <>
        <h1 className="text-3xl mt-2 flex justify-center">Ordenes</h1>
        <div className="flex justify-center  mt-2">
          <AdminNav />
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Email</th>
                <th>Fecha</th>
                <th>Productos</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Dirección</th>
                <th>Telefono</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <OrdersTable  orders={orders}  />
          </table>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
    return <div>Error carga de ordenes</div>;
  }
}
