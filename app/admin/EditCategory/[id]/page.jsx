'use client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams } from 'next/navigation'

const page = () => {

    const [category, setCategoy] = useState({});
    const {id} = useParams('_id');

    const fetchList = async () => {
    const response = await axios.get(`/api/category/${id}`);
    setCategoy(response.data.category);
   // console.log(response.data.category);
  }   

  useEffect(() => {
    fetchList();
  }, [])

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCategoy(data => ({...data, [name]: value}));
        //console.log(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.put(`/api/category/${id}`, {
            newName: category.name,
            newDescription: category.description,
            newSlug: category.slug
        });

        if(res.data.success){
            toast.success(res.data.msg); 
        }else{
            toast.error("Error");
        }
    }

    return (
        <>
       
            <form onSubmit={handleSubmit} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl mt-7'>Category Name: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' onChange={onChangeHandler} name='name' value={category.name || ''} placeholder='Category Name' required />
                <p className='text-xl mt-7'>Details: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' onChange={onChangeHandler} name='description' value={category.description  || ''} placeholder='Description ' required />
                <p className='text-xl mt-7'>Slug: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' onChange={onChangeHandler} name='slug' value={category.slug  || ''} placeholder='Category Slug' required />

                <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Save Changes</button>
            </form>
            
        </>
        // *** Due to Warning: A component is changing an uncontrolled input of type text to be controlled. I have used  || '' in input value={ || ''}
    )
}

export default page