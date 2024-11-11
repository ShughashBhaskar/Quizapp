import { useContext, useEffect, useState } from "react"
import { Questions } from "../data/questions"
import { Global } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
    const { currQuesidx, saveAnswer } = useContext(Global)
    const navi = useNavigate();
    const question = Questions[currQuesidx];
    const handleClick = (idx) => {
        const isCorrect = question.answer === idx;
        if (currQuesidx == Questions.length - 1) {
            navi("/result");
        } saveAnswer(isCorrect, idx);
    }

    const [timer, settimer] = useState(Questions.length*20);

    useEffect(() => {
        const timerId = setInterval(() => {
            settimer((prev) => prev - 1);
        }, 1000);

        if (timer <= 0) {
            clearInterval(timerId);
            navi("/result");
        }

        return () => clearInterval(timerId);
    }, [timer]);
    const formatTime = (timer) => {
        const m = Math.floor(timer / 60);
        const s = timer % 60;

        return `${m}:${s}`;
    };




return (<>
    <div className="container">
        <h1 className="timer">Time Left: {formatTime(timer)}</h1>
        <h3>{question.text}</h3>
        {
            question.options.map((option, idx) => {
                return (
                    <button className="answer-button" key={idx} onClick={() => handleClick(idx)}>{option}</button>
                )
            })
        }

    </div>
</>)
}
export default Quiz