import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        height: "60vh",
    },
    card: {
        display: "flex",
        justifyContent: "space-between",
        height: "285px",
        width: "80%",
        margin: "auto",
        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)",
        borderRadius: "19px 100px 100px 19px",
    },
    title: {
        fontSize: "36px",
        fontWeight: "500",
        color: "#068842",
        marginTop: "15px"
    },
    date: {
        fontSize: "15px",
        fontWeight: "500",
        margin: "-20px 0px 15px 0px"
    },
    description: {
        textAlign: "justify",
        fontSize: "15px",
        textOverflow: "ellipsis",
        overflow: "hidden",
        maxHeight: "132px",
        // border: "1px solid #000000",
    },
    media: {
        height: "220px",
        width: "200px",
        // backgroundImage: "url(./img/skill1.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
        backgroundColor: "red",
        margin: "30px 0px 0px 20px"
    },
    rightColumn: {
        backgroundColor: "#068842",
        padding: "20px 30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "stretch",
    },
    leftColumn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
        cursor: "pointer",
    },
    btn: {
        backgroundColor: "#FFFFFF",
        padding: "5px 20px",
    }
}))

export default useStyles;