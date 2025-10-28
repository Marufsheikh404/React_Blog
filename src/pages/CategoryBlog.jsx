import React from "react";

const CategoryBlog = ({ blogs = [], categoryBlogId }) => {
    const filteredBlogs = categoryBlogId
        ? blogs.filter((blog) => blog.category_id === categoryBlogId)
        : blogs;

    return (
        <div className="mt-5">
            {filteredBlogs.length > 0 ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                    {filteredBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                className="w-16 h-16 object-cover rounded-full border border-gray-300"
                                src={blog.image}
                                alt={blog.title}
                            />

                            {/* Text Info */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-snug">
                                    {blog.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2">
                                    {blog.short_description}
                                </p>

                                {/* Read time & view info */}
                                <div className="flex items-center gap-3 mt-2 text-[11px] md:text-xs text-gray-500">
                                    <span>⏱️ {blog.read_time}</span>
                                    <span>👁️ {blog.views}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center py-4 italic">
                </p>
            )}
        </div>
    );
};

export default CategoryBlog;
