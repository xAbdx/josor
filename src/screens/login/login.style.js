import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    page: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container1: {
        height: "90%",
        width: "30%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "rgb(134,210,252)",
        background: "linear-gradient(90deg, rgba(134,210,252,1) 0%, rgba(245,184,255,1) 100%)"
    },
    container2: {
        width: "50%",
        height: "100%",
        backgroundColor: "#E6F5FE"
    },
    container: {
        height: "80%",
        width: "70%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#fff",
        borderRadius: "10px",

    },
    colored: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#fff",
        margin: "20px"
    },
    spaceForm: {
        marginTop: "25px"
    },
    btnColor: {
        backgroundColor: "rgb(134,210,252)",
        background: "linear-gradient(90deg, rgba(134,210,252,1) 0%, rgba(245,184,255,1) 100%)"
    }
}));

export default useStyles; 