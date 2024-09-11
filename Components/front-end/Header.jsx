import React from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='logo' className='w-[130px] sm:w-auto' />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black '>Get started<Image src={assets.arrow}/></button>
        </div>

    </div>
  )
}

export default Header