import Image from "next/image"
import Link from "next/link"
import { CircleGauge } from "lucide-react"
import { Compass } from "lucide-react"
const sidebar = () => {
  return (
    <div className='h-screen w-fit bg-[#2B2D37] p-2 text-white'>
      <div className="flex items-center gap-2">
          <Image src="/logo.png" height={35} width={35} alt="NCIP LOGO"/>
          <p className=''>TRAVEL ORDER SYSTEM</p>
      </div>
      <div>
        <ul>
          <li >
            <Link href="#" className="flex flex-row">
              <CircleGauge size={28} strokeWidth={2.25} />
              <span className="hidden lg:flex">Dasdboard</span>
            </Link>
          </li>
          <li>
            <Link href="#"  className="flex flex-row">
              <Compass size={28} strokeWidth={2.25} />
              <span className="hidden lg:flex">Travel Request</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default sidebar