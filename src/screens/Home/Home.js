import react from "react";
import JobSection from "../../components/jobPost/JobSection";
import style from "./home.style"
import { useHistory } from "react-router-dom";

const sections = [
    { id: 1, name: "tech" },
    { id: 2, name: "hand made" },
    { id: 3, name: "kitchen" },
    { id: 4, name: "sweets" }
]

const Home = () => {
    const classes = style();
    const history = useHistory()
    const goTo = (id) => {
        history.push(`/jobs/${id}`)
    }
    
    return (
        <div className={classes.page}>
            {sections.map((item, index) => {
                return (
                 
                         <JobSection key={index}
                         sectionsName={item.name}
                         sectionsId={item.id}
                         goTo={goTo}
                         />
               
                )
            })
            }
        </div>
    );
}
export default Home;