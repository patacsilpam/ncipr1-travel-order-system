import Sidebar from '@/app/components/headers/sidebar'
const page = () => {
  return (
    <div className='flex flex-row h-full'>
        <Sidebar/>
        <div className='w-full bg-slate-400'>
          Travel Request
        </div>
    </div>
  )
}

export default page