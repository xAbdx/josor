import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "block",
        width: "100%",
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
    },
    media3: {
        height: "150px",
        width: "150px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
        backgroundColor: "red",
        margin: "30px 0px 30px 25px"
    },
    leftColumn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
    },
    card: {
        minHeight: "100px",
        width: "55%",
        boxShadow: "2px 4px 15px rgba(0, 0, 0, 0.17)",
        margin: "70px auto",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",

    },
    items: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",

    },
    item1: {
        margin: "30px auto",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
    },
    item2: {
        margin: "0px 0px 30px 0px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    btn: {
        color: "#fff",
        backgroundColor: "#068842",
        width: "110px",
        padding: "18.5px 14px",
        display: "flex",
        margin: theme.spacing(1),
        borderRadius: "30px",
    },
    btnCancel: {
        backgroundColor: "secondary",
        width: "200px",
        padding: "18.5px 14px",
        display: "flex",
        margin: theme.spacing(1),
    },
    inputField1: {
        width: "90%",
        margin: "15px auto",
        resize: "none",
    },
    inputFieldTextarea: {
        width: "85%",
        padding: "10px 14px",
        margin: "15px auto",
        resize: "none",
        border: "1px solid #ccc",
        borderRadius: "15px",
        font: "inherit",
        letterSpacing: "inherit",
    },
    media: {
        height: "180px",
        width: "180px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "49%",
        backgroundColor: "red",
        margin: "10px",
    },
    media2: {
        height: "350px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
        backgroundColor: "#F5F5F5",
        margin: "10px auto"
    },
    topCard: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    phone: {
        fontWeight: "300px",
        color: "#068842",
        padding: "20px"
    },
    txt: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold"
    },
    app: {
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
        width: "60%",
    },
    tt: {
        color: "#068842"
    },
    card1: {
        width: "50%",
        margin: "auto",
        boxShadow: "2px 4px 15px rgba(0, 0, 0, 0.17)",
    }
}));

export default useStyles;