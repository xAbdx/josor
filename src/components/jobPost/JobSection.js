import { Box } from "@material-ui/core";
import useStyles from './SectionStyle';

const JobSection = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.body} onClick={() => props.goTo(props.sectionsId)}>
            <p >{
                props.sectionsName
            }
            </p>
        </Box>
    );
}
export default JobSection;