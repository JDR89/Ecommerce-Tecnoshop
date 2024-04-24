"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export const AdminNav = () => {

  const pathname = usePathname()

  return (
    <div className="flex">
        <Link className={pathname === "/admin" ? "text-lg" : ""} href="/admin">Dashboard</Link>
        <p className="mx-2">/</p>
        <Link className={pathname === "/admin/orders" ? "text-lg" : ""} href="/admin/orders">Orders</Link>
      </div>
  )
}
