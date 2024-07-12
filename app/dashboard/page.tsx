import Sidebar from '@/app/components/headers/sidebar'

const DashboardPage = () => {
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