import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import useStyles from './jobs.style'
import JobCard from "../jobCard/jobCard"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import axios from 'axios';
const Jobs = () => {
    const classes = useStyles();
    let { params } = useRouteMatch();
    
    const [jobsBySection, setJobsBySection] = useState([]);
    
    const GetJobsFromDB = async () => {
        const response = await axios.get("http://localhost/api/jobs.php?skill_id=" + params.id);
        if (response.data.length > 0)
            setJobsBySection(response.data);
    }

    useEffect(() => {
        GetJobsFromDB();
    }, []);
   
    return (
        <div>
            <Header />
            <div className={classes.container}>
                {/* <p>id: {params.id}</p> */}
                {jobsBySection.map((job,idx) => {
                    return (
                        <JobCard key={idx} job={job} />
                    )
                })}
            </div>
            <Footer />
        </div>
    );
}
export default Jobs;