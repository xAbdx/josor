import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
    },
    container: {
        display: "block",
        margin: "15px 0px 70px 0px",
        width: "100%",
    },
    card: {
        minHeight: "300px",
        width: "70%",
        boxShadow: "2px 4px 15px rgba(0, 0, 0, 0.17)",
        margin: "50px auto",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        borderRadius: "10px"
    },
    media: {
        height: "350px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
        backgroundColor: "#F5F5F5",
        margin: "10px auto"
    },
    title: {
        fontSize: "36px",
        fontWeight: "500",
        color: "#068842",
        marginTop: "15px"
    },
    date: {
        fontSize: "15px",
        fontWeight: "500",
        margin: "15px 0px 15px 0px"
    },
    description: {
        textAlign: "justify",
        fontSize: "16px",
    },
    rightColumn: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "20px 0"
    },
    priceContainer: {
        margin: "0 0 0 15px",
        fontSize: "20px",
    },
    price: {
        color: "#068842",
        fontWeight: "bold",
    },
    btn: {
        color: "#068842",
        width: "14.5%",
        padding: "8px",
        display: "flex",
        
     
       
    }
}))

export default useStyles;