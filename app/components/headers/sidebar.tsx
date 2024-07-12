"use client"
import Image from "next/image"
import Link from "next/link"
import { CircleGauge, FilePen,Compass, Users, User, Settings, Building2, Menu } from "lucide-react"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
const Sidebar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const pathname = usePathname();
  return (
    <div className={`${isMenuVisible ? "w-[50px]" : "lg:w-[270px]"} h-screen bg-[#191b21] text-white`}>
      <div className="flex lg:items-center sm:justify-center lg:justify-start gap-2">
          <Image src="/logo.png" height={35} width={35} alt="NCIP LOGO" className="my-2 mx-1"/>
          <p className={`${isMenuVisible ? "hidden" : "hidden lg:flex"}`}>Travel Order System</p>
      </div>
      <div className="mt-[30px]">
      <div className="p-3">
        <Menu onClick={toggleMenu} className="hover:bg-[#ffffff2a]" />
      </div>
        <ul className="w-full space-y-3 mt-7">
          <li className={`hover:bg-slate-200 hover:text-stone-950 p-3 ${pathname === '/dashboard' ? 'bg-slate-200 text-stone-950' : ''}`}>
            <Link href="/dashboard" className="flex flex-row gap-4">
              <CircleGauge />
              <span className={`${isMenuVisible ? "hidden" : "hidden lg:flex"}`}>Dashboard</span>
            </Link>
          </li>
          <li className={`hover:bg-slate-200 hover:text-stone-950 p-3 ${pathname === '/travel-request' ? 'bg-slate-200 text-stone-950' : ''}`}>
            <Link href="/travel-request" className="flex flex-row gap-4">
              <FilePen />
              <span className={`${isMenuVisible ? "hidden" : "hidden lg:flex"}`}>Travel Request</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#" className="flex flex-row gap-4">
              <Compass />
              <span className={`${isMenuVisible ? "hidden" : "hidden lg:flex"}`}>Travel Orders</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#" className="flex flex-row gap-4">
              <Users />
              <span className={`${isMenuVisible ? "hidden" : "hidden lg:flex"}`}>Employees</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#" className="flex flex-row gap-4">
              <Building2 />
              <span className={`${isMenuVisible ? "hidden" : "hidden lg:flex"}`}>Divisions</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#" className="flex flex-row gap-4">
              <User />
              <span className={`${isMenuVisible ? "hidden" : "hidden lg:flex"}`}>Users</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#" className="flex flex-row gap-4">
              <Settings />
              <span className={`${isMenuVisible ? "hidden" : "hidden lg:flex"}`}>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar