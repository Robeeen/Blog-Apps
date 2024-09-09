'use client'
import React from 'react'

const CategoryAll = ({mongoId, name, deleteList}) => {
  return (
    <>
        <div>
          {name} <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm cursor-pointer' onClick={() => deleteList(mongoId)}>Edit</p> 
          <hr />
        </div>
        
    </>
  )
}

export default CategoryAll