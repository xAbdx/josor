import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: "#EAEAEA",
        display: "flex",
        justifyContent: "space-around",
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        display: "flex",
        flexDirection: "column"
    },
    logo: {
        color: "#068842",
        // fontWeight: "bold",
        // fontSize: "36px",
    },
}));

export default useStyles; 
