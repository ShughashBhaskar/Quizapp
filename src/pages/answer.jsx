import { useContext } from "react";
import { Questions } from "../data/questions"
import { Global } from "../context/QuizContext";

const Answer = () => {
    const questions = Questions;
    const {answer} = useContext(Global);
    return (
        <>
        <div className="container">
            
        {
                questions.map((question, i) => {
                    return (
                        <>
                            <h3>{question.text}</h3>
                            {
                                question.options.map((option, idx) => {
                                    return (
                                        <button className={`answer-button ${
                                            question.answer === idx
                                            ? "correct"
                                            : answer[i]===idx
                                            ? "incorrect"
                                            : ""
                                        }
                                        }`}>
                                            {option}
                                        </button>
                                    )
                                })
                            }

                        </>

                    )
                })

            }
        </div>
        </>)
}
export default Answer