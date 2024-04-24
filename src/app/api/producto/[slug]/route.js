import { NextResponse } from "next/server.js"

import { doc, getDoc } from "firebase/firestore"
import { db } from "../../../../../firebase/config"
export async function GET(request,{params}){
    const {slug}=params
    
    try {
        const docRef = doc(db, "productos", slug)

    const docSnapshot = await getDoc(docRef)
    
    return NextResponse.json(docSnapshot.data())
    
    } catch (error) {
        throw new Error ("Error de carga", error)
    }
}