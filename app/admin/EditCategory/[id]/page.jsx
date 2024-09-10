'use client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams } from 'next/navigation'

const page = () => {

    const [category, setCategoy] = useState([]);
    const {id} = useParams('_id');

    const fetchList = async () => {
    const response = await axios.get('/api/category');
    setCategoy(response.data.category);
    console.log(response.data.category);
  }   

  useEffect(() => {
    fetchList();
  }, [])



    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]: value}));
        //console.log(data);
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append('name', data.name);
    //     formData.append('description', data.description);
    //     formData.append('slug', data.slug);

    //     const response = await axios.post('/api/category', formData);
       
    //     if(response.data.success){
    //         toast.success(response.data.msg);
    //         setData({
    //             name: '',
    //             description: '',
    //             slug: ''
    //         });
    //     }else{
    //         toast.error("Error");
    //     }
    // }

    return (
        <>
       
            <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl mt-7'>Category Name: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='name' value={category.name} placeholder='Category Name' required />
                <p className='text-xl mt-7'>Details: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='description' value={category.description} placeholder='Description ' required />
                <p className='text-xl mt-7'>Slug: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='slug' value={category.slug} placeholder='Category Slug' required />

                <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Save Changes</button>
            </form>
            {category.name}
        </>

    )
}

export default page