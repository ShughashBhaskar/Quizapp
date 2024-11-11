import { useContext } from "react"
import { Global } from "../context/QuizContext"
import { Navigate, useNavigate } from "react-router-dom"

const UserInfo = () => {
    const { username, setusername } = useContext(Global);
    const Navigate = useNavigate()

    const handleInput = (event) => {
        setusername(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        Navigate("/instructions")
    }
    return (<>
        <div className="container">
            <form >
                <h1>User Information</h1>
                <section className="user-input">
                    <label htmlFor="name">Name:</label>
                    <input onChange={handleInput} type="text" id="name" required placeholder="Enter you name..." />
                </section>
                <section className="form-submit">
                    <button onClick={handleSubmit} type="submit">Next</button>
                </section>
            </form>
        </div>
    </>)
}
export default UserInfo