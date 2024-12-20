'use-client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Link from 'next/link'

const SingleBlog = ({ title, id, description, category, image, author, date }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000'>
      <Link href={`/blogs/${id}`} >
        <Image src={image} alt='image' width={400} height={400} className='border-b border-black object-cover h-48 w-full' />
      </Link>

      <p className='ml-5 mt-5 px-2 py-1 inline-block bg-black text-white text-sm'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gre-900'>{title}</h5>
        <p className='mb-3 text-small tracking-tight text-grey-700'>Author: {author}</p>
        <p className='mb-3 text-small tracking-tight text-grey-700'>Date Posting: {date.slice(0, 10)}</p>
        <p className='mb-3 text-small tracking-tight text-grey-300'>{description.slice(0, 100)}</p>
        <div className='inline-flex items-center py-2 font-semibold text-center '>
          <Link href={`/blogs/${id}`}>
           <p className='mt-5 px-2 py-1 inline-block bg-slate-400 text-white text-sm '>Read More </p> 
          </Link>
        </div>
      </div>


    </div>
  )
}

export default SingleBlog