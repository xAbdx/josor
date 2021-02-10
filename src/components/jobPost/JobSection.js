import { TextField } from "@material-ui/core";
import react from "react";
import useStyles from './SectionStyle';


const JobSection = (props) => {
    const classes = useStyles();

    return (
        <div >
            <p>{
                props.sectionsName
                }
            
            </p>
            
           </div>   
    );
  
}
export default JobSection;