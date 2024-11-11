import { useContext } from "react"
import { Global } from "../context/QuizContext"
import { useNavigate } from "react-router-dom"

const Instructions = ()=>{
  const {username} = useContext(Global)
  const navi = useNavigate()
  const handleNext = ()=>{
      navi("/quiz")
  }
    return(<>
    <div className="container">
    <h1>Instructions</h1>
    <p>Hello <b>{username}</b>,Please read the instructions Carefully</p>
    <button onClick={handleNext}>Next</button>
    </div>
    </>)
}
export default Instructions