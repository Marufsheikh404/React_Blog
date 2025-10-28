import React from 'react';

const CategoryBlog = ({ blogs,categoryBlogId }) => {

    const filterCategoryBlogId = categoryBlogId ? blogs.filter(blog =>blog.category_id == categoryBlogId) : blogs;
    return (
        <div>
            <div>
                {
                    filterCategoryBlogId.map(blog => (
                        <div className='flex items-center gap-4 my-2 px-2 py-2 bg-slate-100 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
                            <div>
                                <img className='w-12 rounded-full' src={blog.image} alt="" />
                            </div>
                            <div>
                                <p className='text-[13px] font-bold'>{blog.title}</p>
                                <p className='text-[13px] text-gray-500'>{blog.short_description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryBlog;