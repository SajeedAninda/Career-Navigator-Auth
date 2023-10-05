import React from 'react';

const Category = ({ category }) => {
    let { logo, category_name, availability } = category;

    return (
        <div className='p-8 bg-[#ddfae9] rounded-xl space-y-2'>
            <img className='p-4 bg-[#B2E6C8] rounded-xl' src={logo} alt="" />
            <h3 className='text-xltext-[#1A1919] font-extrabold'>{category_name}</h3>
            <p className='text-sm text-[#757575] font-medium'>{availability}</p>
        </div>
    );
};

export default Category;