import React from "react";
import { useRouteMatch } from "react-router-dom";
import useStyles from './jobs.style'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    const classes = useStyles();
    let { params } = useRouteMatch();

    // console.log(params); //for testing
    // console.log(newJob);

    return (
        <div>
            {/* <p>id: {params.id}</p>
            {JobsBySection.map((job) => {
                return (
                    <p key={`job_posts${job.id}`}>
                        {job.name}
                    </p>
                )
            })} */}
            {/* here todo the card post */}
            {/* <p>hi here todo the card post</p> */}

            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="../img/skill1.png"
                        title="skills image"
                    />
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            I need a Designer
                        </Typography>
                        <Typography className={classes.date} color="textSecondary">
                            December 8
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.description}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </Typography>
                    </CardContent>
                    <div className={classes.rightColumn}>
                        <div className={classes.rightColumnContent}>
                            <CardActions>
                                <Button className={classes.btn} size="small">$300.00</Button>
                                <Button className={classes.btn} size="small">Apply</Button>
                            </CardActions>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Jobs;