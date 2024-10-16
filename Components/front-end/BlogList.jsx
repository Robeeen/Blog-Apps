'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleBlog from '@/Components/front-end/SingleBlog'

const BlogList = () => {
    //create a menu to sort filter blogs 
    const [ menu, setMenu ] = useState['All'];

    //display all blogs data here.
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
    }
    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={()=>setMenu('All')} className={menu == "All" ? 'bg-black } />

                <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                    {blogs.map((item, index) => {
                        return (
                            <SingleBlog
                                key={index}
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                category={item.category}
                                id={item._id}
                                author={item.author}
                                image={item.image} />
                                )
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default BlogList