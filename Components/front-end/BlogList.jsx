'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios';


const BlogList = () => {

    const [ blogs, setBlogs ] = useState([]);
    
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
           { blogs.map((item, index) => {
                return (
                    <div key={index}>
                    Title: {item.title} <br />
                    Description: {item.descriptions} <br />
                    Date: {item.date} <br />
                    Category: {item.category} <br />
                    Author: {item.author} <br />
                    ID: {item._id} <br />
                    Image: <img src={item.image} height="10%" width="100px" />
                    <hr />
                    </div>
                )
            }
            )
        }
   
   </>
  )
}

export default BlogList