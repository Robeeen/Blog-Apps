'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [image, setImage] = useState(false);

  //To get list from category --- Start-----
  const [category, setCategoy] = useState([]);


  const fetchList = async () => {
    const response = await axios.get('/api/category');
    setCategoy(response.data.category);
    console.log(response.data.category);
  }

  useEffect(() => {
    fetchList();
  }, []);
  //To get list from category --- Ends-----

  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Cosmetics',
    author: 'Alex',
    authorImg: '/author_img.png'
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
    console.log(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title),
      formData.append('description', data.description),
      formData.append('category', data.category),
      formData.append('author', data.author),
      formData.append('authorImg', data.authorImg),
      formData.append('image', image)

    const response = await axios.post('/api/blog', formData);

    if (response.data.success) {
      toast.success(response.data.msg); //Toast notification
      setImage(false);
      setData({
        title: '',
        description: '',
        category: '',
        author: 'Alex',
        authorImg: '/author_img.png' //reset form post submit
      });
    } else {
      toast.error("Error"); //Toast notification
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} className='pt-5 px-5 sm:pt-12 sm:pl-16'>

        <p className='text-xl'>Upload Thumbnail</p>
        <label htmlFor='image'>
          <Image src={!image ? assets.upload_area : URL.createObjectURL(image)} className='mt-4' width={140} height={70} alt='photo' />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />

        <p className='text-xl mt-7'>Blog Title</p>
        <input className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='title' onChange={onChangeHandler} value={data.title} placeholder='Blog title' required />

        <p className='text-xl mt-7'>Blog Description</p>
        <textarea className='w-full sm:w-[500] mt-3 px-4 py-3 border' type='text' name='description' onChange={onChangeHandler} value={data.description} rows={6} placeholder='Blog Description' required />

        <p className='text-xl mt-3'>Blog Category</p>
        <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-grey-500'>
          {category.map((item, index) => {
            return (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            )

          })}
          
        </select>

        <br />

        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add Blog</button>

      </form>
    </>
  )
}

export default page