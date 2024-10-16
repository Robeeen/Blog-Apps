'use client'

import React from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='logo' className='w-[130px] sm:w-auto' />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] '>Get started<Image src={assets.arrow} alt='icon'/></button>
        </div>
        <div className='text-center items-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae ea impedit esse delectus hic repellendus molestias voluptatem vitae! Aperiam debitis harum assumenda, incidunt provident amet fugit alias reiciendis optio!</p>
            <div className='flex justify-center'>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 max-auto mt-10 border border-black'>
                    <input type='email' placeholder='Enter the email' className='pl-4 outline-none' />
                    <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white '>
                        subscribe
                    </button>
                </form>
            </div>
 
        </div>
    </div>
  )
}

export default Header