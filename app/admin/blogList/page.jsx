'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import BlogsAll from '@/Components/adminComponents/BlogsAll'

const page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchList = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    //console.log(response.data.category);
  }

  // --- To Delete a Catgory from the list ---
  const deleteBlog = async (mongoId) => {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      const response = await axios.delete('/api/blog', {
        params: {
          id: mongoId,
          method: "DELETE"
        }
      });
      toast.success(response.data.msg);
      fetchList();
    };
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className='mt-10 mb-10 ml-10 text-center'>Display all Blogs and Edit</div>
      <div className='relative h-[100vh] max-w-[1150px] overflow-x-auto border border-gray-400'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text bg-gray-700 text-left uppercase bg-black '>
            <tr>
              <td>Title</td>
              <td>Author</td>
              <td>Date Posting</td>
              <td>Delete</td>
              <td>Edit</td>
              </tr>
          </thead>
        <tbody>
        {blogs.map((item, index) => {
          return (
            <BlogsAll key={index}
              mongoId={item._id}
              title={item.title}   
              author={item.author}  
              date={item.date}         
              deleteBlog={deleteBlog}
            />
          )
        })}
        </tbody>
          </table>
      </div>
    </>
  )
}

export default page