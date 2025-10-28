import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';
import Category from './Category';
import CategoryBlog from './CategoryBlog';

const Home = () => {
    const [blogs, setBlogs]= useState([]);
    const [categories, setCategories] = useState([]);
    // Blogs data
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    // Category Data
    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data)
        )
    },[])
    return (
        <div>
            <div className='container px-7 mx-auto grid grid-cols-12 gap-4 mt-4'>
                <div className='col-span-8 border border-gray-400 p-3'>
                    <Blogs></Blogs>
                </div>
                <div className='col-span-4border border-gray-400 p-3'>
                    <Category></Category>
                    <CategoryBlog></CategoryBlog>
                </div>
            </div>
        </div>
    );
};

export default Home;