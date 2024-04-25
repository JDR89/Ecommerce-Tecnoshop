
export async function GET() {
try {
    const ordersRef = collection(db, "ordenes");
    const querySnapshot = await getDocs(ordersRef);
    const orders =  querySnapshot.docs.map((doc) => (doc.data()))
} catch (error) {
    
}

}