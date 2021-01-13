import react from "react";
import useStyles from './SectionStyle';


const JobSection = (props) => {
    const classes = useStyles();

    return (
        <p classesName={classes.box}>

            {props.sectionsName}
        </p>

    );
}
export default JobSection;