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
    console.log(params);
    const [jobsBySection, setJobsBySection] = useState([])
    const GetJobsFromDB = async () => {
       // console.log("http://localhost:8081/josor/jobs.php?skill_id ${}");
        const response = await axios.get("http://localhost/test/jobs.php?skill_id="+params.id);
       console.log(response.data);
        if(response.data.length>0)
        setJobsBySection(response.data);
    }
    useEffect(() => {
        GetJobsFromDB();
    }, []);
    // console.log(params); //for testing
    // console.log(newJob);
    return (
        <div>
            <Header />
            <div className={classes.container}>
                {/* <p>id: {params.id}</p> */}
                {jobsBySection.map((job) => {
                    return (
                        <JobCard job={job} />
                    )
                })}
            </div>
            <Footer />
        </div>
    );
}
export default Jobs;

