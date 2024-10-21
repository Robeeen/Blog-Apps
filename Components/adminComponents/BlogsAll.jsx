'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const BlogsAll = ({ mongoId, title, author, deleteBlog, date, authorImg }) => {
  return (
    <>
      <tr className='bg-white border-b'>
        <th scope='row' className='item-center gap-3 hidden sm:flex  px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
          <Image src={assets.profile_icon} width={50} height={50} alt='' />
        </th>
        <td className='px-6 py-4'>
          {title ? title : 'no title'}
        </td>
        <td className='px-6 py-4'>
          {author ? author : 'no author'}
        </td>
        <td className='px-6 py-4'>
          {date ? date.slice(0, 10) : 'no date'}
        </td>
        <td className='px-6 py-4'>
          <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm cursor-pointer'
            onClick={() => deleteBlog(mongoId)}>Delete</p>
        </td>
        <td className='px-6 py-4'>
          <Link href={`/admin/EditProduct/${mongoId}`}>
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm cursor-pointer'>Edit</p>
          </Link>
        </td>
      </tr>

    </>
  )

}

export default BlogsAll