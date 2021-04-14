import { makeStyles } from '@material-ui/core/styles';
import bg from "../../img/bg.jpg"

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
  image: {
    width: "100%",
    height: "90vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
  },
  text: {
    // width: "40%",
    margin: "0 0 0 20%",
    // backgroundColor: "rebeccapurple",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "500",
    fontSize: "80px",
    margin: "0",
    letterSpacing: "6.5px",
  },
  description: {
    color: "#D9D9D9",
    fontWeight: "400",
    fontSize: "50px",
    margin: "0",
    letterSpacing: "5px",
  }
}));

export default useStyles;