import React from 'react';

const Category = ({ categories,handleClick }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {categories.map((category) => (
                <div
                    key={category.id || category.name}
                    className="border border-gray-200  rounded-lg p-3 shadow hover:shadow-lg transition-shadow duration-300 flex justify-center items-center bg-white"
                >
                    <button onClick={()=>handleClick(category.id)} className=" text-black text-[10px] rounded font-semibold">
                        {category.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Category;
