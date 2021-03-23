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
    const [jobsBySection, setJobsBySection] = useState([])
    const GetJobsFromDB = async () => {
        const response = await axios.get("http://localhost/test/jobs.php");
        setJobsBySection(response.data);
        console.log(response);
        //delete me
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
