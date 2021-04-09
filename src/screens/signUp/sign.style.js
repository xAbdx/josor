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
        height: "95%",
        width: "30%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "rgb(134,210,252)",
        background: "linear-gradient(90deg, rgba(134,210,252,1) 0%, rgba(245,184,255,1) 100%)",
        boxShadow: "3px 4px 8px 0px rgba(0,0,0,0.29) -webkit-box-shadow: 3px 4px 8px 0px rgba(0,0,0,0.29) -moz-box-shadow: 3px 4px 8px 0px rgba(0,0,0,0.29)",
    },
    container2: {
        width: "50%",
        height: "100%",
        backgroundColor: "#E6F5FE",
        display: "flex",
        justifyContent: "center",
    },
    container: {
        width: "70%",
        height: "90%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#fff",
        borderRadius: "20px",
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
        marginBottom: "15px 0",
    },
    textFields: {
        width: "100%",
        // margin: "20px auto",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
    },
    btnColor: {
        backgroundColor: "rgb(134,210,252)",
        background: "linear-gradient(90deg, rgba(134,210,252,1) 0%, rgba(245,184,255,1) 100%)",
        fontSize: "20px",
        fontWeight: "900"
    },
    titleColor: {
        fontSize: "28px",
        textAlign: "center",
        fontWeight: "900",
    },
    inputField1: {
        // width: "30%",
        margin: "5px 0px"
    },
}));

export default useStyles;