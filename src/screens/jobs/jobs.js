import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import useStyles from './jobs.style'
import JobCard from "../jobCard/jobCard"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import axios from 'axios';
<<<<<<< HEAD
=======

>>>>>>> 50097b063a160ecdcf4da16706fb2ca4ac2a48a5
const Jobs = () => {
    const classes = useStyles();
    let { params } = useRouteMatch();
    const [jobsBySection, setJobsBySection] = useState([])
    const GetJobsFromDB = async () => {
<<<<<<< HEAD
    const response = await axios.get("http://localhost/test/jobs.php");
    setJobsBySection(response.data);
    console.log(response);
}
useEffect(() => {
    GetJobsFromDB();
}, []);
=======
        const response = await axios.get("http://localhost/api/jobs.php");
        setJobsBySection(response.data);
        console.log(response);
        //delete me
    }
    useEffect(() => {
        GetJobsFromDB();
    }, []);
>>>>>>> 50097b063a160ecdcf4da16706fb2ca4ac2a48a5
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
<<<<<<< HEAD
export default Jobs;

=======
export default Jobs;
>>>>>>> 50097b063a160ecdcf4da16706fb2ca4ac2a48a5
