import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "block",
        width: "100%",
    },
    title: {
        fontSize: "36px",
        margin: "0px 0px 20px 15%",
        textTransform: "uppercase",
        fontWeight: "400"
    },
    card: {
        minHeight: "500px",
        width: "70%",
        boxShadow: "2px 4px 15px rgba(0, 0, 0, 0.17)",
        margin: "70px auto",
        justifyContent: "center",
        alignItems: "center",
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
        width: "200px",
        padding: "18.5px 14px",
        display: "flex",
        margin: theme.spacing(1),
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
        borderRadius: "4px",
        font: "inherit",
        letterSpacing: "inherit",
    }
}));

export default useStyles;