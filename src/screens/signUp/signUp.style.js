import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    test: {
        height: "80%",
        width: "70%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "red",
        borderRadius: "10px",
    },
    submet: {
        marginTop: "25px"
    }
}));

export default useStyles; 