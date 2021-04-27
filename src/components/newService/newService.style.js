import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F5F5F5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 0 0 0",
        margin: "auto",
        width: "95%"
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
    rightColumn: {
        margin: "0 0 0 50px"
    },
    leftColumn: {
        margin: "0 50px 0 0",
        maxWidth: "200px"
    },
    btn: {
        margin: "0 0 15px 0",
        width: "100%",
        backgroundColor: "#fff"
    }
}));

export default useStyles;
