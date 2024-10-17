'use client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams } from 'next/navigation'

const page = () =>{
    const [ blogs, setBlogs ] = useState({});
    const {id} = useParams('_id');

    //To fetch and display before edit
    const fetchBlogs = async () => {
        const response = await axios.get(`/api/blog/${id}`);
        setBlogs(response.data.blogs);    
    }

    useEffect(() => {
        fetchBlogs
    }, []);


}

