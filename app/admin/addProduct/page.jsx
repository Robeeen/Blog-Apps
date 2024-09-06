'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {

  const [ image, setImage ] = useState(false);

  return (
    <>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload Thumbnail</p>
        <label htmlFor='image'>
          <Image src={!image?assets.upload_area:URL.createObjectURL(image)} className='mt-4' width={140} height={70} />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image'  hidden required/>
        <p className='text-xl mt-7'>Blog Title</p>
        <input className='w-full sm:w-[500] mt-4 px-4 py-3 border' type='text' placeholder='Blog title' required />

      </form>
    </>
  )
}

export default page