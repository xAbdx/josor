import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: "40px 0 45px 0",
  },
}));

export default useStyles;