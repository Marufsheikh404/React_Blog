import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';
import Category from './Category';
import CategoryBlog from './CategoryBlog';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryBlogId, setcategoryBlogId] = useState();

    //  Fetch Blogs data
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error('Error loading blogs:', err));
    }, []);

    //  Fetch Category Data
    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error('Error loading categories:', err));
    }, []);

    // Onclick Handler
    const handleClick =(id)=>{
        setcategoryBlogId(id)
    }
    return (
        <div className="bg-gray-50 min-h-screen py-6">
            <div className="container mx-auto px-2 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-4">

                {/* Left side (Blogs Section) */}
                <div className="lg:col-span-7 bg-white border border-gray-200 rounded-xl shadow-md p-5">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">Latest Blogs</h2>
                    <Blogs blogs={blogs} />
                </div>

                {/*  Right side (Category + Category Blogs) */}
                <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl shadow-md p-5 space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2">Categories</h3>
                            <Category  categories={categories}  handleClick ={handleClick}/>
                    </div>

                    <div>
                        <CategoryBlog blogs ={blogs} categoryBlogId ={categoryBlogId}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
