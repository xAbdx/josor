import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // content: {
    //     display: "flex",
    // },
    // table: {
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
    // root: {
    //     marginBottom: "150px"
    // },
    // questionBox: {
    //     width: "80%",
    //     margin: "50px auto",
    // },
    // heading: {
    //     fontSize: theme.typography.pxToRem(15),
    //     fontWeight: theme.typography.fontWeightRegular,
    // },
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
    // item: {
    //     width: "90%"
    // },
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