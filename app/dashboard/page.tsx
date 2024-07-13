"use client"
import Sidebar from '@/app/components/headers/sidebar'
import { useState } from 'react'

const DashboardPage = () => {
  const [isSidebarVisible,setSidebarVisibility] = useState(false);
  const toggleSidebar = () =>{
    setSidebarVisibility(!isSidebarVisible);
  }
  return (
    <div className='flex flex-row h-full'>
        <Sidebar/>
      
       
        <div className='w-full bg-slate-400'>
          dashboard
         
        </div>
        
    </div>
  )
}

export default DashboardPage