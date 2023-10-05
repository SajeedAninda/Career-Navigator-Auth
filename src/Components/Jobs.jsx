import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Jobs = ({ job }) => {
    let {id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job;
    return (
        <div className='space-y-3 border border-[#85D7A9] p-8 rounded-xl'>
            <img className='w-[100px] h-[33px]' src={logo} alt="" />
            <div className='space-y-2'>
                <h2 className='text-[#474747] font-extrabold text-xl'>{job_title}</h2>
                <h3 className='text-[#757575] font-semibold text-lg'>{company_name}</h3>
            </div>
            <div className='flex gap-3'>
                <button className='px-3 py-2 bg-white text-[#5FCA8E] font-bold border border-[#5FCA8E] rounded-xl'>{remote_or_onsite === "Remote" ? "Remote" : "Onsite"}</button>
                <button className='px-3 py-2 bg-white text-[#5FCA8E] font-bold border border-[#5FCA8E] rounded-xl'>{job_type}</button>
            </div>
            <div className='flex gap-3'>
                <div className='flex items-center gap-2'>
                    <IoLocationOutline className='text-[#757575] font-semibold'></IoLocationOutline>
                    <p className='text-[#757575] font-semibold'> {location}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <AiOutlineDollarCircle className='text-[#757575] font-semibold'></AiOutlineDollarCircle>
                    <p className='text-[#757575] font-semibold'>Salary:{salary}</p>
                </div>
            </div>
            <Link to={`/jobdetails/${id}`}>
                <button className='px-3 mt-3 py-2 rounded-lg font-bold bg-[#85D7A9] text-white'>View Details</button>
            </Link>
        </div>
    );
};

export default Jobs;