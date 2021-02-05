import React from "react";
import { useRouteMatch } from "react-router-dom";
import useStyles from './jobs.style'
import JobCard from "../jobCard/jobCard"

const JobsBySection = [
    {
        id: 1,
        title: "IT",
        description: "here is all the new technologies",
        date: "December 8"
    },
    {
        id: 2,
        title: "Design",
        description: "here is all the new designes",
        date: "December 10"
    },
    {
        id: 3,
        title: "Front-End",
        description: "here is all the new technologies of the front-end 2021",
        date: "December 19"
    }
]


const Jobs = () => {
    const classes = useStyles();
    let { params } = useRouteMatch();

    // console.log(params); //for testing
    // console.log(newJob);

    return (
        <div>
            {/* <p>id: {params.id}</p> */}
            {JobsBySection.map((job) => {
                return (
                    <JobCard job={job} />
                )
            })}
        </div>
    );
}

export default Jobs;