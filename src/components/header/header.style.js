import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        color: "#068842"
    },
    header: {
        height: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        color: "#068842",
        marginLeft: "50px",
        fontWeight: "bold",
        fontSize: "36px",
        cursor: "pointer",
    },
    list: {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        padding: "23px",
        height: "20px",
        textDecoration: "none",
    },
    list1: {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        textDecoration: "none",
        padding: "0px",
    },
    link: {
        marginRight: "35px",
        textDecoration: "none",
        color: "#000",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "21px",
    },
    Lastlink: {
        textDecoration: "none",
        color: "#000",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "21px",
    },
    activeStyle: {
        color: "#068842",
    }
}));

export default useStyles;
