import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        color: "#068842"
    },
    header: {
        // height: "25vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        // backgroundColor: "#F5F5F5"
    },
    logo: {
        color: "#068842",
        marginLeft: "50px",
        fontWeight: "bold",
        fontSize: "36px",
    },
    list: {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        padding: "23px",
        height: "20px",
        marginRight: "50px",
        textDecoration: "none",
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
    }
}));

export default useStyles; 
