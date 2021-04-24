import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#F4F4F4",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        height: "80vh",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#000",
        fontSize: "50px",
        letterSpacing: "2px",
    },
    loginCardSection: {
        height: "50vh",
        width: "80%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "inset 0px 0px 30px 9px rgb(0 0 0 / 15%)",
        borderRadius: "15px",
    },
    marginField: {
        margin: "10px auto"
    }
}))

export default useStyles;