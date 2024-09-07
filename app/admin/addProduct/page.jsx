'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {

  const [ image, setImage ] = useState(false);

  const [ data, setData ] = useState({
      title: '',
      description: '',
      category: 'Startup',
      author: 'Alex',
      authorImg: '/author_img.png'
  });

  const onChangeHandler = (event) => {
   
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data, [name]: value}));
      console.log(data);     
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        
        <p className='text-xl'>Upload Thumbnail</p>
        <label htmlFor='image'>
          <Image src={!image?assets.upload_area:URL.createObjectURL(image)} className='mt-4' width={140} height={70} alt='photo'/>
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image'  hidden required/>
        
        <p className='text-xl mt-7'>Blog Title</p>
        <input className='w-full sm:w-[500] mt-4 px-4 py-3 border' type='text' name='title' onChange={onChangeHandler} value={data.title} placeholder='Blog title' required />

        <p className='text-xl mt-7'>Blog Description</p>
        <textarea className='w-full sm:w-[500] mt-4 px-4 py-3 border' type='text' name='description' onChange={onChangeHandler} value={data.description} rows={6} placeholder='Blog Description' required />
        
        <p className='text-xl mt-7'>Blog Category</p>
        <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-grey-500'>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="LifeStype">LifeStype</option>
        </select>
        <br />

        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add Blog</button>

      </form>
    </>
  )
}

export default page