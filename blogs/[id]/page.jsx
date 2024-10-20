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
                id: params.id
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
                <h1>{data.title}</h1>
            </div>
        </div>
    </>: <></>

    )
}