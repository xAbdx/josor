import useStyles from './newService.style'
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import { MdAdd } from "react-icons/md";
// import { MdAttachFile } from "react-icons/md";


const NewService = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <div className={classes.rightColumn}>
                <h2 className={classes.title}>Find jobs</h2>
                <p className={classes.paragraph}><b>182</b> Jobs in <span className={classes.country}>Palestine</span></p>
            </div>
            <div className={classes.leftColumn}>
                <div className={classes.btn}>
                    <Button variant="contained" endIcon={<MdAdd />} onClick={() => { history.push("/new-job") }}>Add new service</Button>
                </div>
                {/* <div className={classes.btn}>
                    <Button variant="contained" endIcon={<MdAttachFile />}>Most Recent    </Button>
                </div> */}
            </div>
        </div>
    );
}
export default NewService;