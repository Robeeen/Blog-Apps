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

  const deleteList = async (mongoId) => {
    const response = await axios.delete('/api/category', {
      params: {
        id:mongoId,
      }
    });
    toast.success(response.data.deleteList);
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
            <CategoryAll key={index} mongoId={item._id} name={item.name} deleteList={deleteList}/>
          )
        })}
      </div>
    </>
  )
}

export default page