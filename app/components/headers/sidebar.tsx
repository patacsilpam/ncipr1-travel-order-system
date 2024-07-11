import Image from "next/image"
import Link from "next/link"
import { CircleGauge, FilePen,Compass, Users, User, Settings, Building2, Menu } from "lucide-react"
const sidebar = () => {
  return (
    <div className='h-screen lg:w-[270px] bg-[#191b21] text-white'>
      <div className="flex lg:items-center sm:justify-center lg:justify-start gap-2">
          <Image src="/logo.png" height={35} width={35} alt="NCIP LOGO" className="my-2 mx-1"/>
          <p className='hidden lg:flex text-sm'>Travel Order System</p>
      </div>
      <div className="mt-[30px]">
      <div className="p-3">
        <Menu />
      </div>
        <ul className="w-full space-y-3">
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#" className="flex flex-row gap-4">
              <CircleGauge />
              <span className="hidden lg:flex">Dashboard</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#"  className="flex flex-row gap-4">
              <FilePen />
              <span className="hidden lg:flex">Travel Request</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#"  className="flex flex-row gap-4">
              <Compass/>
              <span className="hidden lg:flex">Travel Orders</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#"  className="flex flex-row gap-4">
              <Users />
              <span className="hidden lg:flex">Employees</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#"  className="flex flex-row gap-4">
              <Building2/>
              <span className="hidden lg:flex">Divisions</span>
            </Link>
            </li>
            <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#"  className="flex flex-row gap-4">
              <User/>
              <span className="hidden lg:flex">Users</span>
            </Link>
            </li>
            <li className="hover:bg-slate-200 hover:text-stone-950 p-3">
            <Link href="#"  className="flex flex-row gap-4">
              <Settings />
              <span className="hidden lg:flex">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default sidebar