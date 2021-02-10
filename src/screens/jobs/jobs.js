import React from "react";
import { useRouteMatch } from "react-router-dom";
import useStyles from './jobs.style'
import JobCard from "../jobCard/jobCard"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

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
    },
    {
        id: 4,
        title: "Writing",
        description: "this section provide you some wtiting skills",
        date: "April 11"
    }
]


const Jobs = () => {
    const classes = useStyles();
    let { params } = useRouteMatch();

    // console.log(params); //for testing
    // console.log(newJob);

    return (
        <div>
            <Header />
            <div className={classes.container}>
                {/* <p>id: {params.id}</p> */}
                {JobsBySection.map((job) => {
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