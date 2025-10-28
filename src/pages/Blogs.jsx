import React from 'react';
import ViwerBlogs from '../components/ViwerBlogs';

const Blogs = ({blogs}) => {
    const sortage = [...blogs].sort((a,b)=> b.views - a.views)
    return (
        <div>
            {
               sortage.map(blog =><ViwerBlogs key={blog.id} blog = {blog}></ViwerBlogs>)
            }
        </div>
    );
};

export default Blogs;