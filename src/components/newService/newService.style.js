import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F5F5F5",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    title: {
        fontSize: "35px"
    },
    paragraph: {
        fontSize: "16.5px"
    },
    country: {
        color: "#068842"
    },
    // left: {
    //     display: "block",
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
    btn: {
        margin: "0 0 10px 0",
        minWidth: "300px"
    }
}));

export default useStyles;
