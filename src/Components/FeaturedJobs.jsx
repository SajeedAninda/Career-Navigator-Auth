import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';

const FeaturedJobs = () => {
    let [featuredJobs, setFeaturedJobs] = useState([]);
    let [showJobs, setShowJobs] = useState(2);

    useEffect(() => {
        fetch("./jobs.json")
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));
    }, [])

    return (
        <div className='mt-20 space-y-8'>
            <div className='space-y-3'>
                <h1 className='text-4xl text-center text-[#1A1919] font-extrabold'>Featured Jobs</h1>
                <p className='text-center text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    featuredJobs.slice(0, showJobs).map(job => <Jobs job={job} key={job.id}></Jobs>)
                }
            </div>
            <div className={`flex justify-center ${showJobs === featuredJobs.length ? 'hidden' : ''}`}>
                <button onClick={() => { setShowJobs(featuredJobs.length) }} className='px-4 py-3 rounded-lg font-bold bg-[#85D7A9] text-white'>Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;