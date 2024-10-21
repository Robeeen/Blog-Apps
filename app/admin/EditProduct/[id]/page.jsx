'use client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams } from 'next/navigation'

const page = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams('_id');

    //To fetch and display before edit
    const fetchBlogs = async () => {
        const response = await axios.get(`/api/blog/${id}`);
        setBlog(response.data.blog);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBlog(data => ({...data, [name]: value}));
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.put(`/api/blog/${id}`, {
            newTitle: blog.title,
            newDescription: blog.description,
            newCategory: blog.category,
            newAuthor: blog.author,
            newImage: blog.image,
            newAuthorImg: blog.authorImg
        });

        if(res.data.success){
            toast.success(res.data.msg); 
        }else{
            toast.error("Error");
        }
    }

    return (
        <>
            <h2 className='pt-5 text-center pb-0 font-bold text-xl'>Edit records</h2>
            <form onSubmit={handleSubmit} className='px-5 sm:pt-10 sm:pl-16'>

                <p className='sm:pt-10'>Blogs Title:  </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='title' value={blog.title || ''}
                    placeholder='Blog Title' required
                />
                <p className='sm:pt-10'>Blogs Descriptions: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='textarea'
                    onChange={onChangeHandler}
                    name='description' value={blog.description || ''}
                    placeholder='Blog Description' required
                />
                <p className='sm:pt-10'>Blogs Date: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='date' value={blog.date || ''}
                    placeholder='Blog Date' required
                />
                <p className='sm:pt-10'>Blogs Category: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='category' value={blog.category || ''}
                    placeholder='Blog Category' required
                />
                <p className='sm:pt-10'>Blogs Author: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='author' value={blog.author || ''}
                    placeholder='Blog Author' required
                />
                <p className='sm:pt-10'>Blogs Image: </p>
                <input className='w-full sm:w-[500] mt-3 px-4 py-3 border'
                    type='text'
                    onChange={onChangeHandler}
                    name='image' value={blog.image || ''}
                    placeholder='Blog Image' required
                />

                <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Save Changes</button>
            </form>
        </>
    )
}

export default page

