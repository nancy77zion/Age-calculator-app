import { useState } from "react";
import "./App.css";
import Result from "./Result";
import Form from "./Form";

function App() {
  const [formData, setFormData] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const [age, setAge] = useState({
    years: "--",
    months: "--",
    days: "--",
  });
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const { day, month, year } = formData;
    const birthDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    if (day < 1 || day > 31) {
      setDayError("Please enter a valid day (1-31)");
      setMonthError("");
      setYearError("");
    } else if (month < 1 || month > 12) {
      setDayError("");
      setMonthError("Please enter a valid month (1-12)");
      setYearError("");
    } else if (
      year == currentDate.getFullYear() &&
      month > currentDate.getMonth() + 1
    ) {
      setDayError("");
      setMonthError("");
      setYearError("Invalid month in year");
    } else if (year > currentDate.getFullYear()) {
      setDayError("");
      setMonthError("");
      setYearError("Year cannot be greater than the current year");
    } else {
      setDayError("");
      setMonthError("");
      setYearError("");
      console.log(birthDate);
      const today = new Date();
      const ageYears = today.getFullYear() - birthDate.getFullYear();
      const ageMonths =
        today.getMonth() -
        birthDate.getMonth() +
        (today.getDate() < birthDate.getDate() ? -1 : 0);
      const ageDays = today.getDate() - birthDate.getDate();
      age.days = Math.abs(ageDays);
      age.months = Math.abs(ageMonths);
      age.years = Math.abs(ageYears);
      setAge({ ...age, age });
      event.target.reset();
      console.log("Age result on Submit::: ", age);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <main>
        <div className="box">
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            dayError={dayError}
            monthError={monthError}
            yearError={yearError}
          />
          <Result age={age} />
        </div>
      </main>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/nancy77zion" target="_blank">
          Eberechi Nwankudu
        </a>
        .
      </div>
    </>
  );
}

export default App;
