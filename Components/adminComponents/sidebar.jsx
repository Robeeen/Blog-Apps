import React from 'react'
import { assets } from '../../Assets/assets'
import Image from 'next/image'
import Link from 'next/link'


const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src={assets.logo} width={120} alt='logo' />
            </div>

            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black' >
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href='/admin/addProduct' className='flex items-center border broder-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.add_icon} width={28} alt='icon' /><p>Add Blog</p>
                    </Link>

                    <Link href='/admin/blogList' className='flex mt-3 items-center border broder-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.add_icon} width={28} alt='icon' /><p>Add Blog</p>
                    </Link>

                    <Link href='/admin/subsCriptions' className='flex mt-3 items-center border broder-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.add_icon} width={28} alt='icon' /><p>Add Blog</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar 