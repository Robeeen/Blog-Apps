import React from 'react'
import Image from '/next/image'
import assets from '@/Assets/assets'

const SingleBlog = () => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000'>
      <Image src={item.image} alt='image' width={400} height={400} className='border-b border-black'/>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{item.category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gre-900'>{item.title}</h5>
        <p className='mb-3 text-small tracking-tight text-grey-700'>{item.description}</p>
        <div className=''>
          Read More <Image src={assets.arrow} alt='arrow' />
        </div>
      </div>


    </div>
  )
}

export default SingleBlog