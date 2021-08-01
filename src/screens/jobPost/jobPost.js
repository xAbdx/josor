import React, { useEffect, useState } from "react";
import skill1 from "../../img/skill1.png";
import useStyles from './jobpost.style';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRouteMatch } from "react-router-dom";
import axios from 'axios';

// const job = {
//     id: 1,
//     title: "IT",
//     description: "here is all the new technologies  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//     date: "December 8"
// }

const JobPost = (props) => {
    let { params } = useRouteMatch();

    const [jobsBySection, setJobsBySection] = useState([]);

    const GetJobsFromDB = async () => {
        const response = await axios.get("http://localhost/api/jobs.php?skill_id=" + params.id);
        console.log(response.data);

        if (response.data.length > 0)
            setJobsBySection(response.data);
    }

    useEffect(() => {
        GetJobsFromDB();
    }, []);

    console.log(params.id);
    const classes = useStyles();

    const applicanting = async () => {
        alert("Your application has been sent");
        window.location.reload(false);
    };

    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Card className={classes.card}>
                    <div>
                        <CardMedia
                            className={classes.media}
                            image={skill1}
                            title=""
                        />
                    </div>
                    {jobsBySection.map((data) => {
                        return (
                            <div>
                                <div className={classes.leftColumn}>
                                    <div>
                                        <CardContent>
                                            <Typography className={classes.title} gutterBottom>
                                                {data.title}
                                            </Typography>
                                            {/* <Typography className={classes.date} color="textSecondary">
                                                {data.date}
                                            </Typography> */}
                                            <Typography variant="body2" component="p" className={classes.description}>
                                                {data.description}
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </div>
                                <div className={classes.rightColumn}>
                                    <p className={classes.priceContainer}>Price: <span className={classes.price}>${data.price}</span></p>
                                    <Button className={classes.btn} variant="contained" onClick={applicanting}>Apply</Button>
                                </div>
                            </div>
                        )
                    })}
                </Card>
            </div>
            <Footer />
        </div>
    );
}
export default JobPost;