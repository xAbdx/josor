import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        height: "140px",
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        border: "1px solid black",
    },
    body: {
        display: "flex",
        justifyContent: "center",
        // height: "220px",
        width: "250px",
        margin: "20px",
        // paddingTop: "30px",
        // boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)",
        boxShadow: "0px 0px 17px 0px rgb(0 0 0 / 21%)",
        borderRadius: "20px",
        fontSize: "40px",
        textAlign: 'center',
        cursor: "pointer"
    },
}))

export default useStyles;