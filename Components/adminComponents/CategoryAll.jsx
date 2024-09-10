'use client'
import React from 'react'
import Link from 'next/link'

const CategoryAll = ({ mongoId, name, slug, deleteList }) => {
  return (
    <>
      <div>
        Name: {name} - Slug: {slug}
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm cursor-pointer'
          onClick={() => deleteList(mongoId)}>Delete</p>

        <Link href='/admin/EditCategory/${id}'>
          <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm cursor-pointer'>Edit</p>
        </Link>
        <hr />
      </div>

    </>
  )
}

export default CategoryAll