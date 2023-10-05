import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredApplication } from './localStorageSave';
import JobApplications from './JobApplications';

const AppliedJobs = () => {
    let allJobs=useLoaderData();
    let [finalAppliedJobs,setFinalAppliedJobs]=useState([]);
    useEffect(()=>{
        let appliedJobIdData=getStoredApplication();
        if(allJobs.length>0){
            let appliedJobs=allJobs.filter(job=>appliedJobIdData.includes(job.id));
            setFinalAppliedJobs(appliedJobs);
        }
    },[])
    return (
        <div className='min-h-[50vh]'>
            <h1 className="text-4xl text-center font-semibold mb-12">Total Applied Jobs: {finalAppliedJobs.length}</h1>
            <div className='flex flex-col gap-6'>
                {
                    finalAppliedJobs.map(jobs=><JobApplications jobs={jobs} key={jobs.id}></JobApplications>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;