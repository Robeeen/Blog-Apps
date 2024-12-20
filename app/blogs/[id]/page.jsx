'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { assets, blog_data } from '@/Assets/assets';
import axios from 'axios';

const page = ({params}) => {
    const [ data, setData ] = useState(null);


    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog', {
            params: {
                id:params.id
            }
        })
        setData(response.data);       
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    return(data?
    <>
        <div className='bd-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
                </Link>
                <button className='flex item-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px+#000]'>
                    Get Started <Image src={assets.arrow} alt='' />
                </button>                
            </div>
            <div className='text-center my-24'>
                <h1 className='text-21 sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                <Image className='mx-auto mt-6 border border-white rounded-full' src={assets.profile_icon} width={60} height={60} alt='' />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>                    
            </div>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image src={data.image} className='border-4 border-white' width={1280} height={720} alt='' />
            <h1 className='my-8 text-[26px] font-semibold'>Introductions</h1>
            <p className=''>{data.description}</p>
            <br />
            <Link href={`/`} >
            <p className='mt-5 px-2 py-1 inline-block bg-black text-white text-sm'>Go Back</p> 
            </Link>
            
        </div>
       
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[100px]'>
            <div className="flex">
                <Image src={assets.facebook_icon} width={50} />
                <Image src={assets.twitter_icon} width={50} />
                <Image src={assets.googleplus_icon} width={50} />
            </div>
        </div>
    </>: <></>

    )
}

export default page