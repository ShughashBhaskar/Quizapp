
import { createContext, useState } from "react";

export const Global = createContext();

const GlobalProvider = (data) => {
    const [username, setusername] = useState();
    const [currQuesidx,setcurrQuesidx] = useState(0);
    const [answer,setanswer] = useState([]);
    const [score,setscore] =useState(0);

    const saveAnswer =(isCorrect,idx)=>{
      if(isCorrect){
        setscore((prev)=> prev+1);
      }
      setanswer([...answer,idx])
      setcurrQuesidx((prev) => prev+1)
};
    return(

<Global.Provider value = 
{{ username,setusername,
currQuesidx,setcurrQuesidx,
answer,setanswer,saveAnswer,score,setscore

}}>
    { data.children }

  </Global.Provider >)

}
export default GlobalProvider;
