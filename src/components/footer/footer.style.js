import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: "#EAEAEA",
        display: "flex",
        justifyContent: "space-around",
    },
    form: {
        display: "flex",
        flexDirection: "column"
    },
    logo: {
        color: "#068842",
    },
    itemWidth: {
        marginBottom: "10px",
    },
    btn: {
        backgroundColor: "#068842",
        margin: "10px 0 10px 0"
    },
    heart: {
        color: "red"
    }
}));

export default useStyles;
