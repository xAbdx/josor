import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "block",
        margin: "15px 0px 70px 0px",
        width: "100%",
    },


    card: {
        minHeight: "300px",
        width: "70%",
        boxShadow: "2px 4px 15px rgba(0, 0, 0, 0.17)",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        padding:"15px",
        borderRadius: "10px"
    },
    items: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
    },
    

    item: {
        margin: "8px",
        display: "flex",
        justifyContent: "space-evenly",
        marginTop:"19%"
        
    },
    img: {
        height: "220px",
        width: "200px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
        backgroundColor: "red",
        margin: "30px 0px 0px 20px"
    },
    title: {
        
            color: "#068842",
            fontSize: "36px",
            fontWeight: "500",
            marginLeft: "24%",
            marginTop: "-220px",
            },
    date: {
        fontSize: "15px",
        fontWeight: "500",
        marginLeft: "24%",
        margin:"15px"
    },
    description: {
        fontSize: "15px",
        marginTop:"1%",
        marginLeft: "24%",
        
    },
    btn: {
        color: "#068842",
        width: "14.5%",
        padding: "8px",
        display: "flex",
        
     
       
    }
}))

export default useStyles; 