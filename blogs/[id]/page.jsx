'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { assets, blog_data } from '@/Assets/assets';
import axios from 'axios';

const page = ({params}) => {
    const [ data, setData ] = useState(null);

    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog' .{
            params: {
                id: params.id
            }
        })
        setData(response.data);
    }

    useEffect(() => {
        fetchBlogData();
    });

    return(data?
    <>
        <div className='bd-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                
            </div>
        </div>
    </>: ''

    )
}