import React, { useEffect, useState } from 'react';
import Category from './Category';

const JobCategories = () => {
    let [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("./categories.json")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div className='mt-20 space-y-8'>
            <div className='space-y-3'>
                <h1 className='text-4xl text-center text-[#1A1919] font-extrabold'>Job Category List</h1>
                <p className='text-center text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 grid-cols-4 gap-4'>
                {
                    categories.map(category => <Category category={category} key={category.id}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategories;