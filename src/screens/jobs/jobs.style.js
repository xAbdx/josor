import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EAEAEA",
        height: "100vh",
    },
    card: {
        display: "flex",
        justifyContent: "center",
        height: "285px",
        width: "80%",
        margin: "auto",
        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)",
        borderRadius: "19px 100px 100px 19px",
    },
    title: {
        fontSize: "36px",
        fontWeight: "500",
        color: "#068842",
    },
    date: {
        fontSize: "15px",
        fontWeight: "500",
        margin: "-20px 0px 15px 0px"
    },
    description: {
        textAlign: "justify",
        textJustify: "inter-word",
        fontSize: "15px",
        // color: "#000", when i use this, the style of the title ruined
    },
    media: {
        height: "220px",
        width: "600px",
        // backgroundImage: "url(./img/skill1.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
        backgroundColor: "red",
        margin: "30px 0px 0px 20px"
    },
    rightColumn: {
        backgroundColor: "#068842",
        // width: "20%",
        padding: "20px 30px",
    },
    rightColumnContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
    },
    btn: {
        backgroundColor: "#FFFFFF",
        padding: "5px 20px",
    }
}))

export default useStyles; 