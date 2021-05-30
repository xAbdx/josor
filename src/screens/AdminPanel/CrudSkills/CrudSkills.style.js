import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
    },
    items: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        width: "90%"
    },
    addSection: {
        display: "flex",
        justifyContent: "space-around",
        width: "85%",
        margin: "0 auto",
    },
    title: {
        fontSize: "2.5em",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    questionBox: {
        width: "80%",
        margin: "50px auto",
    },
    AccordionMargin: {
        marginRight: "15px"
    }
}))

export default useStyles;