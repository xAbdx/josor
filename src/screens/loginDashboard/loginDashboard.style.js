import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(65.27deg, #08223A 3.37%, rgba(0, 5, 107, 0.79) 102.93%)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        height: "80vh",
        // backgroundColor: "red",
        width: "80%",
        background: "#041F28",
        boxShadow: "0px 0px 6px 8px rgba(23, 23, 23, 0.37)",
        // borderRadius: "20px",
    },
    loginCard: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    title: {
        color: "#fff",
        fontSize: "50px",
    },
    loginCardSection: {
        height: "50vh",
        width: "80%",
        backgroundColor: "#022241",
        // borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    inputField: {
        backgroundColor: "#2A4C6D",
        color: "#fff"
    },
    marginTest: {
        margin: "5px auto"
    }
}))

export default useStyles;