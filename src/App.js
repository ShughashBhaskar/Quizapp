import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserInfo from "./pages/userinfo";
import Instructions from "./pages/instruction";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import Answer from "./pages/answer";
import GlobalProvider from "./context/QuizContext";

function App() {
  return (
   <GlobalProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<UserInfo />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/answer" element={<Answer />} />
        </Routes>
      </BrowserRouter>
 </GlobalProvider>
  );
}

export default App;
