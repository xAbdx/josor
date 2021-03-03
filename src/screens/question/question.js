//import Icon from '@material-ui/';
//import { AddCircleOutline } from '@material-ui/icon/';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";





const objs = [
    {
        question: "What is Josor?",
        answer: "It is a long established fact that a reader will be distracted by the  a page when looking at its layout",
        id: 1
    },

    {
        question: "What is Josor2?",
        answer: "It is a long established fact that a reader will be distracted by the  a page when looking at its layout",
        id: 2
    }
]
const question = () => {

    return (
        <div>
            <Header />
            {
                objs.map((item) => {
                    return (
                        <div className={classes.question}>
                            {objs.map((item, index) => {

                               // <AddCircleOutline />
                                { item.question }

                            }

                            )


                            }


                        </div>
                    )
                })
            }
            <Footer />
        </div>



    )
}

export default question;

