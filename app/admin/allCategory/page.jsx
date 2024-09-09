'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import  CategoryAll from '@/Components/adminComponents/CategoryAll'



const page = () => {
  const [category, setCategoy] = useState([]);

  const fetchList = async () => {
    const response = await axios.get('/api/category');
    setCategoy(response.data.category);
    console.log(response.data.category);
  }

  // --- To Delete a Catgory from the list ---
  const deleteList = async (mongoId) => {
    const response = await axios.delete('/api/category', {
      params: {
        id: mongoId,
        method: "DELETE"
      }
    });
    toast.success(response.data.msg);
    fetchList();
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className='mt-10 mb-10 ml-10 text-center'>Display all Categories and Edit</div>
      <div className='ml-10'>
        {category.map((item, index) => {
          return (
            <CategoryAll key={index} mongoId={item._id} name={item.name} slug={item.slug} deleteList={deleteList}/>
          )
        })}
      </div>
    </>
  )
}

export default page