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
        height: "400px",
        width: "70%",
        boxShadow: "2px 4px 15px rgba(0, 0, 0, 0.17)",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    items: {
        dispaly: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    item1: {
        margin: "30px"
    },
    item2: {
        margin: "30px"
    },
    item3: {
        margin: "30px",
        dispaly: "flex"
    },
    btn: {
        color: "#fff",
        backgroundColor: "#068842",
        width: "200px"
    }
}))

export default useStyles; 