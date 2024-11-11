import { useContext } from "react"
import { Global } from "../context/QuizContext"
import { useNavigate } from "react-router-dom"

const Result = ()=>{
    const {score} = useContext(Global)
    const navi = useNavigate()
    const handleans = ()=>{
         navi("/answer");
    }

    return(<>
    <div className="container">
    <h1>Your Score {score}</h1>
    <button onClick={handleans}>Answers</button>
    </div>
    </>)
}
export default Result