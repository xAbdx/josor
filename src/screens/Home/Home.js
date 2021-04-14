import React, { useEffect, useState } from "react";
import JobSection from "../../components/jobPost/JobSection";
import style from "./home.style";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import NewService from "../../components/newService/newService";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// const sections = [
//     { id: 1, name: "tech" },
//     { id: 2, name: "hand made" },
//     { id: 3, name: "kitchen" },
//     { id: 4, name: "sweets" }
// ]

const Home = () => {
    const classes = style();
    const history = useHistory();

    const goTo = (id) => {
        history.push(`/jobs/${id}`)
    }

    const [sections, setSections] = useState([])

    const GetCategoryFromDB = async () => {
        const response = await axios.get("http://localhost/api/skills.php?job_id=");
        setSections(response.data);
        console.log(response);
    }

    useEffect(() => {
        GetCategoryFromDB();
    }, []);
    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === true)
        return <Redirect to='/' />

    return (
        <div>
            <Header />
            <div className={classes.imageConteainer}>
                <div className={classes.image}>
                    <div className={classes.text}>
                        <h1 className={classes.title}>H.O.P.E</h1>
                        <div className={classes.description}>
                            <p className={classes.description}>HOLD ON,</p>
                            <p className={classes.description}>PAIN ENDS</p>
                        </div>
                    </div>

                </div>
            </div>
            <NewService />
            <div className={classes.page}>
                {sections.map((item, index) => {
                    return (
                        <JobSection key={index}
                            sectionsName={item.name}
                            sectionsId={item.id}
                            goTo={goTo}
                        />
                    )
                })}
            </div>
            <Footer />
        </div>
    );
}
export default Home;