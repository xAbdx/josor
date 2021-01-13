import React from "react";
import {
    useRouteMatch
} from "react-router-dom";

const JobsBySection = [
    {
        id: 1,
        name: "IT",
        description: "here is all the new technologies"
    },
    {
        id: 2,
        name: "Design",
        description: "here is all the new designes"
    },
    {
        id: 3,
        name: "Front-End",
        description: "here is all the new technologies of the front-end 2021"
    }
]


const Jobs = () => {
    let { params } = useRouteMatch();
    // console.log(params); //for testing
    // console.log(newJob);

    return (
        <div>
            <p>id: {params.id}</p>
            {JobsBySection.map((job) => {
                return (
                    <p key={`job_posts${job.id}`}>
                        {job.name}
                    </p>
                )
            })}
        </div>
    );
}

export default Jobs;