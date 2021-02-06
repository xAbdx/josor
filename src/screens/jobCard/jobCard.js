import React from "react";
import { useRouteMatch } from "react-router-dom";
import useStyles from './jobCard.style'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import skill1 from "../../img/skill1.png"

const JobCard = (props) => {
    const classes = useStyles();
    const { job } = props;

    return (
        <div>
            {/* <p key={`job_posts${job.id}`}></p> */}
            <div className={classes.root}>
                <Card className={classes.card}>
                    <div className={classes.leftColumn}>
                        <div>
                            <CardMedia
                                className={classes.media}
                                image={skill1}
                                title="skills image"
                            />
                        </div>
                        <div>
                            <CardContent>
                                <Typography className={classes.title} gutterBottom>
                                    {job.title}
                                </Typography>
                                <Typography className={classes.date} color="textSecondary">
                                    {job.date}
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.description}>
                                    {job.description}
                                </Typography>
                            </CardContent>
                        </div>
                    </div>
                    <div className={classes.rightColumn}>
                        <Button className={classes.btn} size="small">$300.00</Button>
                        <Button className={classes.btn} size="small">Apply</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default JobCard;