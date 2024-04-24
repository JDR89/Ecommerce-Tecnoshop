"use client"
import { LoginUserForm } from "@/components/auth/LoginUserForm";
import { useAuthContext } from "@/components/context/AuthContext";
import { redirect } from "next/navigation";



export default function LoginUserPage(){
    
    const {user}=useAuthContext()
    
    return(
        <div>
            {(user.logged) ? redirect("/productos/todo") :<LoginUserForm/>} 
        </div>
    )
}