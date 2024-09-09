'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
        <ul>
          {category.map((item, index) => {
            return(
              <li key={index}> {item.name} </li>
            )
            
          })}
        </ul>


    </>

  )
}

export default page