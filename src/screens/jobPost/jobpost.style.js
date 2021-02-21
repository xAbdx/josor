import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        backgroundColor: "#F5F5F5"
    },
    body: {
        display: "flex",
        justifyContent: "space-between",
        height: "400px",
        width: "80%",
        margin: "20px",
        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
    },
    container1: {
        marginTop: "5%",
        padding: "9px 20px",
        marginRight: "-900px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    img: {
        height: "220px",
        width: "200px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
        backgroundColor: "red",
        margin: "30px 0px 0px 20px"
    },
    title: {
        fontSize: "36px",
        fontWeight: "500",
        color: "#068842",
        marginTop: "-101%",
        marginLeft: "111%",
        margin: theme.spacing(1),
    },
    date: {
        fontSize: "15px",
        fontWeight: "500",
        margin: "-9px 0px 15px 0px",
        marginLeft: "111%",
        display: "flex",
        margin: theme.spacing(3),
    },
    description: {
        textAlign: "left",
        textJustify: "inter-word",
        fontSize: "15px",
        marginLeft: "111%",
        display: "flex",
        marginTop: "-6%",
    },
    btn: {
        backgroundColor: "#FFFFFF",
        padding: "11px 27px",
        marginLeft: "6%",
        margin: theme.spacing(21),
        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)",
        marginTop: "8%",
    }
}))

export default useStyles; 