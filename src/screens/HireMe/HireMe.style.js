import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "block",
        margin: "70px 0px 70px 0px",
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
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    items: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
    },
    item: {
        margin: "30px",
        display: "flex",
        justifyContent: "center",
    },
    btn: {
        color: "#fff",
        backgroundColor: "#068842",
        width: "200px",
        padding: "18.5px 14px",
        display: "flex",
        margin: theme.spacing(1),
    },
    inputField1: {
        width: "30%",
        margin: "50px 50px 15px 50px"
    },
    inputField2: {
        padding: "14px",
    },
    input: {
        display: 'none',
    },
    inputImage: {
        width: "80%",
        margin: "40px auto",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    }
}))

export default useStyles;