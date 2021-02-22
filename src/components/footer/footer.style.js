import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: "#EAEAEA",
        display: "flex",
        justifyContent: "space-around",
    },
    form: {
        display: "flex",
        flexDirection: "column"
    },
    logo: {
        color: "#068842",
        // fontWeight: "bold",
        // fontSize: "36px",
    },
    itemWidth: {
        marginBottom: "10px",
    },
    // itemWidthTextarea: {
    //     width: "82.5%",
    //     backgroundColor: "#d5d5d5",
    //     border: "none",
    //     padding: "20px 12px 15px 12px",
    //     font: "inherit",
    //     resize: "none",
    //     overflowY: "scroll"
    // },
    btn: {
        backgroundColor: "#068842",
    }
}));

export default useStyles; 
