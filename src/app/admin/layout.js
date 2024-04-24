"use client"

import { useAuthContext } from "@/components/context/AuthContext"

const adminCredential = process.env.NEXT_PUBLIC_ADMIN_CREDENTIALS;

const AdminLayout = ({children,login}) => {
    
    const {user} = useAuthContext()
    
    const isAdmin = user.logged && user.user === adminCredential;


    return (
        <>
            {
                
                (isAdmin)  ? children : login
                 
            }
        </>
    )
}

export default AdminLayout