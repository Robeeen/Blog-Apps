'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { assets } from '@/Assets/assets';

const page = () => {
  const [ category, setCategoy ] = useState([]);


  const fetchList = async () => {
    const response = await axios.get('/api/category');
    setCategoy(response.data.category);
    console.log(response.data.category);
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className='mt-10 mb-10 ml-10 text-center'>Display all Categories and Edit</div>
        <ul className='ml-10'>
          {category.map((item, index) => {
            return(        
              <>   
              <li  key={index}> {item.name} - <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm cursor-pointer'>Edit</p> </li>
              <hr />
              </>   
            )
            
          })}
        </ul>


    </>

  )
}

export default page