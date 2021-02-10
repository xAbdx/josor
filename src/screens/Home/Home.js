import react from "react";
import JobSection from "../../components/jobPost/JobSection";
import style from "./home.style"
const sections = [
    { id: 1, name: "tech" },
    { id: 2, name: "hand made" },
    { id: 3, name: "kitchen" },
    { id: 4, name: "sweets" }
]

const Home = () => {
    const classes = style();
    
    return (
        <div className={classes.page}>
            {sections.map((item, index) => {
                return (
                    <JobSection key={index}
                        sectionsName={item.name}
                    />
                )
            })
            }
        </div>
    );
}
export default Home;