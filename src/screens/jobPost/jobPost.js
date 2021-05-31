import React from "react";
import skill1 from "../../img/skill1.png";
import useStyles from './jobpost.style';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const job = {
    id: 1,
    title: "IT",
    description: "here is all the new technologies  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    date: "December 8"
}

const JobPost = (props) => {
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
                    <div className={classes.leftColumn}>
                        <div>
                            <CardMedia
                                className={classes.media}
                                image={skill1}
                                title=""
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
                        <p className={classes.priceContainer}>Price: <span className={classes.price}>$300.00</span></p>
                        <Button className={classes.btn} variant="contained" onClick={applicanting}>Apply</Button>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    );
}
export default JobPost;