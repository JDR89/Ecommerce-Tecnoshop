import { NextResponse } from "next/server"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../../../../firebase/config"

export async function GET(request,{params}) {
    const {categoria} = params
    
 try {
    const productosRef = collection(db, "productos")

    const q = categoria === "todo"  
    ? productosRef 
    : query(productosRef, where("categoria", "==", categoria))

    const querySnapshot = await getDocs(q)

    const docs = querySnapshot.docs.map(doc => doc.data())
   
    return NextResponse.json(docs)
 } catch (error) {
    throw new Error("ErrorHandler:",error)
 }

}