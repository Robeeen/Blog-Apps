'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { assets, blog_data } from '@/Assets/assets';

const page = ({params}) => {
    const [ data, setData ] = useState(null);

    const fetchBlogData = () => {
        for(let i=0; i<blog_data[i].length; i++){
            if (Number(params.id) === blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    }
}