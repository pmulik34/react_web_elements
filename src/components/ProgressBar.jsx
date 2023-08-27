import { useState } from "react";
import Bar from "./Bar";
import { useEffect } from "react";

const ProgressBar = () => {
    const[value, setValue] = useState(0);
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        setInterval(()=>{
            setValue((val)=> val + 1);
        },100)
    },[])
  return (
    <div className="app">
      <div>ProgressBar</div>
      <Bar value={value} onComplete={()=> setSuccess(true)} />
      <span>{success?"complete!":"Loading..."}</span>
    </div>
  );
};

export default ProgressBar;
