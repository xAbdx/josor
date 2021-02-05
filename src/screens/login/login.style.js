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
        height: "80%",
        width: "70%",
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
        marginBottom: "15px"
    },
    btnColor: {
        backgroundColor: "rgb(134,210,252)",
        background: "linear-gradient(90deg, rgba(134,210,252,1) 0%, rgba(245,184,255,1) 100%)",
        fontSize: "20px",
        fontWeight: "900"
    },
    titleColor: {
        // color: "#fff",
        fontSize: "40px",
        textAlign: "center",
        fontWeight: "900",
    }
}));

export default useStyles; 