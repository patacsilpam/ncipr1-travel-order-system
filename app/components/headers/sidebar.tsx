"use client"
import Image from "next/image"
import Link from "next/link"
import { CircleGauge, FilePen, Compass, Users, User, Settings, Building2, Menu } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import  {navItems}  from "@/data/globals"

const Sidebar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const pathname = usePathname();
  return (
    <div className={`${isMenuVisible ? "w-[50px]" : "w-[270px]"} h-screen bg-[#191b21] text-white`}>
      <div className="flex items-center justify-center lg:justify-start gap-2 p-2">
        <Image src="/logo.png" height={35} width={35} alt="NCIP LOGO" className="gap-2" />
        <p className={`${isMenuVisible ? "hidden" : "flex"}`}>Travel Order System</p>
      </div>
      <div className="mt-[30px]">
        <div className="p-3">
          <Menu onClick={toggleMenu} className="hover:bg-[#ffffff2a] cursor-pointer" />
        </div>
        <ul className="w-full space-y-3 mt-7">
          {
            navItems.map((item:any,id) => (
              <li key={id} className={`hover:bg-slate-200 hover:text-stone-950 p-3 ${pathname === item.link ? 'bg-slate-200 text-stone-950' : ''}`}>
              <Link  href={item.link} className="flex items-center gap-4">
                <item.icon/>
                <span className={`${isMenuVisible ? "hidden" : "flex"}  `}>{item.name}</span>
              </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
