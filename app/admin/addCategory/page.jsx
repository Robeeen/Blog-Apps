'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

    const [data, setData] = useState({
        name: '',
        description: '',
        slug: ''
    });    

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({...data, [name]: value});
        console.log(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('slug', data.slug);

        const response = await axios.post('/api/category', formData);

        

    }



    return (
        <>
            <form onSubmit={handleSubmit} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl mt-7'>Category Name: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='name' onChange={onChangeHandler} value={data.name} placeholder='Category Name' required />
                <p className='text-xl mt-7'>Details: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='description' onChange={onChangeHandler} value={data.description} placeholder='Description ' required />
                <p className='text-xl mt-7'>Slug: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='slug' onChange={onChangeHandler} value={data.slug} placeholder='Category Slug' required />

                <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add Category</button>
            </form>
        </>

    )
}

export default page