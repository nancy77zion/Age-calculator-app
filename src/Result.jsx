import { memo } from "react";
import "./App.css";

const Result = ({ age }) => {
  const { days, months, years } = age;
  console.log("Age in Result::: ", age);
  return (
    <div className="result-container">
      <p>
        <span className="result">{years} </span>
        years
      </p>
      <p>
        <span className="result">{months} </span>
        months
      </p>
      <p>
        <span className="result">{days} </span>
        days
      </p>
    </div>
  );
};
export default memo(Result);
