import React from "react"
import skill1 from "../../img/skill1.png"
import style from "./jobpost.style"
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

const job = {
    id: 1,
    title: "IT",
    description: "here is all the new technologies",
    date: "December 8"
}

const JobPost = (props) => {
    const classes = style();

    return (
        <div>
            <Header />
            <div className={classes.container}>
                <div className={classes.body} >
                    <div>
                        <CardMedia
                            className={classes.img}
                            image={skill1}
                            title="skills image"
                        />
                        <div className={classes.title}>{job.title}</div>
                        <div className={classes.date}>{job.date}</div>
                        <div className={classes.description}>{job.description}</div>
                        <div className={classes.container1}>
                            <Button className={classes.btn} size="small" variant="outlined" color="secondary">Apply</Button>
                            <Button className={classes.btn} size="small" variant="outlined" color="secondary">$300.00</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default JobPost;