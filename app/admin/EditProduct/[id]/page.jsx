'use client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams } from 'next/navigation'

const page = () => {
    const [blogs, setBlogs] = useState({});
    const { id } = useParams('_id');

    //To fetch and display before edit
    const fetchBlogs = async () => {
        const response = await axios.get(`/api/blog/${id}`);
        setBlogs(response.data.blogs);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCategoy(data => ({...data, [name]: value}));
        //console.log(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.put(`/api/blog/${id}`, {
            newName: blogs.title,
            newDescription: blogs.description,
            newCategory: blogs.category,
            newAuthor: blogs.author,
            newImage: blogs.image,
            newAuthorImg: blogs.authorImg
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
                <p className='text-xl mt-7'>Blogs Title:  </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='title' value={blogs.title || ''}
                    placeholder='Blog Title' required
                />
                <p className='text-xl mt-7'>Blogs Descriptions: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='description' value={description || ''}
                    placeholder='Blog Description' required
                />
                <p className='text-xl mt-7'>Blogs Date: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='date' value={blogs.date || ''}
                    placeholder='Blog Date' required
                />
                <p className='text-xl mt-7'>Blogs Category: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='category' value={blogs.category || ''}
                    placeholder='Blog Category' required
                />
                <p className='text-xl mt-7'>Blogs Author: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='author' value={blogs.author || ''}
                    placeholder='Blog Author' required
                />
                <p className='text-xl mt-7'>Blogs Image: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='image' value={blogs.image || ''}
                    placeholder='Blog Image' required
                />
            </form>
        </>
    )
}

export default page

