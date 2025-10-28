import React from "react";

const ViwerBlogs = ({ blog }) => {
    return (
        <div className="my-4">
            <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Blog Image */}
                <div className="md:w-1/3 w-full flex justify-center bg-slate-50 p-3">
                    <img
                        className="w-full h-40 md:h-44 object-cover rounded-lg"
                        src={blog.image}
                        alt={blog.title}
                    />
                </div>

                {/* Blog Details */}
                <div className="flex flex-col justify-between p-4 md:w-2/3 w-full">
                    <div>
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                            {blog.title}
                        </h2>

                        {/* Author & Date */}
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2">
                            <span>✍️ {blog.author}</span>
                            <span>📅 {blog.date}</span>
                        </div>

                        {/* Short Description */}
                        <p className="text-gray-600 text-sm md:text-base mb-3 leading-snug">
                            {blog.short_description}
                        </p>
                    </div>

                    {/* Read Info & Button */}
                    <div className="flex justify-between items-center flex-wrap gap-2">
                        <div className="text-xs md:text-sm text-gray-500 flex gap-3">
                            <span>⏱️ Read Time: {blog.read_time}</span>
                            <span>👁️ Views: {blog.views}</span>
                        </div>

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-orange-500 px-5" onClick={() => document.getElementById('my_modal_4').showModal()}>Read Blog</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl overflow-hidden">
                                            {/* Blog Image */}
                                            <div className="md:w-1/3 w-full flex justify-center bg-slate-50 p-3">
                                                <img
                                                    className="w-full h-40 md:h-44 object-cover rounded-lg"
                                                    src={blog.image}
                                                    alt={blog.title}
                                                />
                                            </div>

                                            {/* Blog Details */}
                                            <div className="flex flex-col justify-between p-4 md:w-2/3 w-full">
                                                <div>
                                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                                                        {blog.title}
                                                    </h2>

                                                    {/* Author & Date */}
                                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2">
                                                        <span>✍️ {blog.author}</span>
                                                        <span>📅 {blog.date}</span>
                                                    </div>

                                                    {/* Short Description */}
                                                    <p className="text-gray-600 text-sm md:text-base mb-3 leading-snug">
                                                        {blog.long_description}
                                                    </p>
                                                </div>

                                                {/* Read Info & Button */}
                                                <div className="flex justify-between items-center flex-wrap gap-2">
                                                    <div className="text-xs md:text-sm text-gray-500 flex gap-3">
                                                        <span>⏱️ Read Time: {blog.read_time}</span>
                                                        <span>👁️ Views: {blog.views}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViwerBlogs;
