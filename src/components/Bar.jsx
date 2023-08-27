import { useEffect, useState } from "react";
import { MAX, MIN } from "../constants/constants";

const Bar = ({ value = 0, onComplete}) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
    if(value>=MAX){
        onComplete();
    }
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed()}
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
};

export default Bar;
