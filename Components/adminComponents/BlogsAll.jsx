'use client'
import React from 'react'
import Link from 'next/link'

const BlogsAll = ({mongoId, title, author, deleteBlog, date}) =>{
    return (
        <>
          <div>
            Title: {title} - Author: {author} - Date Posting: {date.slice(0, 10)}
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm cursor-pointer'
              onClick={() => deleteBlog(mongoId)}>Delete</p>
    
            <Link href={`/admin/EditProduct/${mongoId}`}>
              <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm cursor-pointer'>Edit</p>
            </Link>
            <hr className='mt-3' />
          </div>
    
        </>
      )

}

export default BlogsAll