import iconArrow from "./images/icon-arrow.svg";

const Form = ({
  handleChange,
  handleSubmit,
  dayError,
  monthError,
  yearError,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs-container">
        <div className="input-cont-flex">
          <label htmlFor="day">Day</label>
          <input
            type="number"
            id="day"
            name="day"
            placeholder="DD"
            onChange={handleChange}
          />
          <p className="input-error--message">{dayError}</p>
        </div>

        <div className="input-cont-flex">
          <label htmlFor="month">Month</label>
          <input
            type="number"
            id="month"
            name="month"
            placeholder="MM"
            onChange={handleChange}
          />
          <p className="input-error--message">{monthError}</p>
        </div>

        <div className="input-cont-flex">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            placeholder="YYYY"
            onChange={handleChange}
          />
          <p className="input-error--message">{yearError}</p>
        </div>
      </div>

      <div className="btn-container">
        <div className="line"></div>
        <button className="btn" type="submit">
          <img src={iconArrow} alt="arrow" className="btn-icon" />
        </button>
      </div>
    </form>
  );
};
export default Form;
