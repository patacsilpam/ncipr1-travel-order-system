import Image from "next/image";
const HomePage = () => {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[1px] border-slate-200 rounded">
      <div className="">
        <div className="flex flex-row  items-center bg-[#2B2D37] text-white border-t-2 rounded-t p-1">
          <div>
            <Image src="/logo.png" alt="ncip logo" width={75} height={75} className="p-2"/>
          </div>
          <div className="mx-3">
            <p className="text-[#E7E7E7]">National Commission on Indigenous Peoples Region 1</p>
            <h1>EMPLOYEE TRAVEL ORDER SYSTEM</h1>
          </div>
        </div>
       
        <div className="flex flex-col justify-center text-center px-10  space-y-7 h-[400px]">
        <h1 className="text-3xl font-semibold -mt-10">Login</h1>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered focus:outline-blue-600 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd" />
            </svg>
            <input type="password" className="grow " placeholder="Password" />
          </label>
          <button className="btn btn-outline btn-primary">Sign In</button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
