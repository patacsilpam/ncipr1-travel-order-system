import React from 'react'
import { User } from 'lucide-react'
const Navbar = () => {
  return (
    <div className='bg-white w-full grid place-content-end p-4'>
        <div className='flex '>
            <User/>
            <p>Admin</p>
        </div>
    </div>
  )
}

export default Navbar