import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(91.52deg, #BC70C9 -0.63%, #72B9E0 137.46%)",
        height: "10vh"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 20px",
        height: "100%"
    },
    title: {
        margin: "10px",
        color: "#f4f4f4",
        fontSize: "2rem",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
    }
}))

export default useStyles;