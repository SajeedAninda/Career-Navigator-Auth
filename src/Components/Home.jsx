import React from 'react';
import Banner from './Banner';
import JobCategories from './JobCategories';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;