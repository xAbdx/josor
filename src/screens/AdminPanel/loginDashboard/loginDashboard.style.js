import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(65.27deg, #BC70C9 3.37%, rgba(114, 185, 224, 0.79) 96.01%)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        height: "80vh",
        width: "80%",
        background: "linear-gradient( 66.33deg , rgba(114, 185, 224, 0.78) 1.44%, #BC70C9 108.05%)",
        boxShadow: "0px 0px 20px 9px rgb(105 105 105 / 37%)",
        borderRadius: "20px",
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "0px 0px 20px 9px rgb(105 105 105 / 37%)",
        background: "linear-gradient(247.37deg, #9ACDE9 3.77%, #BC70C9 101.5%)",
        borderRadius: "15px",
    },
    inputField: {
        // backgroundColor: "#2A4C6D",
        // color: "#fff"
    },
    marginTest: {
        margin: "5px auto"
    }
}))

export default useStyles;