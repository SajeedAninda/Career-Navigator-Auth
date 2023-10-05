import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidBusiness } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from './localStorageSave';

const JobDetails = () => {
    let jobData = useLoaderData();
    let { id } = useParams();
    let idInt = parseInt(id);
    let job = jobData.find(job => job.id === idInt);
    let { job_description, job_responsibility, educational_requirements, experiences, job_title, salary, contact_information, company_name } = job;

    let handleToasted=()=>{
        saveJobApplication(idInt);
        toast("Applied Succesfully!");
    }

    return (
        <div>
            <h2 className='text-3xl text-[#1A1919] font-extrabold text-center my-8'>Job Details</h2>
            <div className='flex flex-col-reverse lg:flex-row gap-12 lg:gap-6'>
                <div className='space-y-5 w-full lg:w-2/3'>
                    <h2 className='text-[#757575] font-medium'><span className='text-[#1A1919] font-extrabold'>Job Description: </span>{job_description}</h2>
                    <h2 className='text-[#757575] font-medium'><span className='text-[#1A1919] font-extrabold'>Job Responsibility: </span>{job_responsibility}</h2>
                    <h2 className='text-[#757575] font-medium'><span className='text-[#1A1919] font-extrabold'>Educational Requirements: <br /></span>{educational_requirements}</h2>
                    <h2 className='text-[#757575] font-medium'><span className='text-[#1A1919] font-extrabold'>Experiences: <br /></span>{experiences}</h2>
                </div>

                <div className='w-full lg:w-1/3 p-4 bg-[#9de6bc6e] rounded-xl'>
                    <div className='border-b border-gray-300 py-4'>
                        <h2 className='text-[#1A1919] font-bold text-xl'>Job Details</h2>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <AiOutlineDollarCircle className='text-[#757575] font-semibold'></AiOutlineDollarCircle>
                        <p className='text-[#1A1919] font-semibold'>Salary: {salary} Annum</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <BsFillCalendarWeekFill className='text-[#757575] font-semibold'></BsFillCalendarWeekFill>
                        <p className='text-[#1A1919] font-semibold'>Job Title: {job_title}</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <BiSolidBusiness className='text-[#757575] font-semibold'></BiSolidBusiness>
                        <p className='text-[#1A1919] font-semibold'>Company: {company_name}</p>
                    </div>
                    <div className='border-b border-gray-300 py-4'>
                        <h2 className='text-[#1A1919] font-bold text-xl'>Contact Information</h2>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <BsTelephone className='text-[#757575] font-semibold'></BsTelephone>
                        <p className='text-[#1A1919] font-semibold'>Phone: {contact_information.phone}</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <AiOutlineMail className='text-[#757575] font-semibold'></AiOutlineMail>
                        <p className='text-[#1A1919] font-semibold'>Email: {contact_information.email}</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <IoLocationOutline className='text-[#757575] font-semibold'></IoLocationOutline>
                        <p className='text-[#1A1919] font-semibold'>Address: {contact_information.address}</p>
                    </div>
                    <button onClick={handleToasted} className='px-4 py-3 w-full mt-3 rounded-lg font-bold bg-[#78d4a0] text-white'>Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;