import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F2F2F2",
        height: "90vh",
        width: "25%"
    },
    navbar: {
        width: "100%"
    },
    activeStyle: {
        color: "#A338B6",
    },
    list: {
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "0"
    },
    link: {
        margin: "10px 0",
        textDecoration: "none",
        color: "#000",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "21px",
    },
    item: {
        padding: "20px 0"
    }
}))

export default useStyles;