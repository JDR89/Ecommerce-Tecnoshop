import { OrdersTable } from "@/components/admin/OrdersTable";
import { AdminNav } from "@/components/ui/AdminNav";


export default function OrdersPage() {


    return(
        <>
        <h1 className="text-3xl mt-2 flex justify-center">Ordenes</h1>
        <div className="flex justify-center  mt-2">
        <AdminNav />
        </div>
        <OrdersTable />
        </>
    )
}