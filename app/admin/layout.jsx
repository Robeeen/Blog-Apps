import Sidebar from "@/Components/adminComponents/Sidebar"
export default function Layout({children}){
    return (
        <>

        <div className="flex">
           <Sidebar />
           <div className="flex flex-col w-full">
            <div className="flex items-center justigy-between w-full py-3 max-h-[60px] px-12 border-b border-black ">

            </div>

           </div>
        </div>
            {children}
        </>
    )
}