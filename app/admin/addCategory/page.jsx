'use client'
import React, { useState } from 'react'

const page = () => {

    const [data, setData] = useState({
        name: '',
        description: '',
        slug: ''
    });

    const handleSubmit = async () => {

    }

    const onChangeHandler = () => {
        
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl mt-7'>Category Name: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='title' onChange={onChangeHandler} value={data.name} placeholder='Blog title' required />
                <p className='text-xl mt-7'>Details: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='title' onChange={onChangeHandler} value={data.description} placeholder='Blog title' required />
                <p className='text-xl mt-7'>Slug: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='title' onChange={onChangeHandler} value={data.slug} placeholder='Blog title' required />


            </form>
        </>

    )
}

export default page