import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../../../firebase/config";

export async function GET(request){
    try {
        const ordersRef = collection(db, "ordenes");
    const querySnapshot = await getDocs(ordersRef);
    const orders =  querySnapshot.docs.map((doc) => (doc.data()));

    return NextResponse.json(orders)
    } catch (error) {
        throw new Error("ErrorHandler:",error)
    }
}