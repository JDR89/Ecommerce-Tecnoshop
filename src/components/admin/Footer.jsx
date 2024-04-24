"use client"

import Link from "next/link";
import { ImExit } from "react-icons/im";
import { useAuthContext } from "../context/AuthContext";

export const Footer = () => {

    const{logout}=useAuthContext()

  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-2 py-4 mx-auto flex items-center sm:flex-row flex-col">
      <Link
      onClick={()=>logout()}
      href={"/admin"}
      className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <ImExit size={20} className="text-white" />
  
  
      </Link>
      <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        
      </p>
    </div>
  </footer>
  )
}
