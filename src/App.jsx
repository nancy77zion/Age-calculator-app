import  iconArrow  from './images/icon-arrow.svg';
import { useState } from 'react';
import './App.css'

function App() {

	const [formData, setFormData] = useState({
		day: '',
		month: '',
		year: ''
	})
	console.log(formData);

	const { day, month, year } = formData;
  const birthDate = new Date(`${year}-${month}-${day}`);
	console.log(birthDate);

	const [age, setAge] = useState('')
	const [error, setError] = useState('')
 
	function handleSubmit(event) {
		event.preventDefault();
	}
	  // Check for errors
		/*if (!year || !month || !day) {
				setError('Please fill out all fields');
				label.classList.add('input-error--label');
				input.classList.add('input-error--border');
		} else if (day < 1 || day > 31) {
				setError('Please enter a valid day (1-31)');
				label.classList.add('input-error--label');
				input.classList.add('input-error--border');
		} else if (month < 1 || month > 12) {
				setError('Please enter a valid month (1-12)');
				label.classList.add('input-error--label');
				input.classList.add('input-error--border');
		} else if (birthDate > new Date()) {
				setError('Please enter a valid birth year');
				label.classList.add('input-error--label');
				input.classList.add('input-error--border');
		} else if (isNaN(birthDate.getTime())) {
				setError('Please enter a valid date');
				label.classList.add('input-error--label');
				input.classList.add('input-error--border');
		} else {
			// Calculate present age
				const today = new Date();
				const ageYears = today.getFullYear() - birthDate.getFullYear();
				const ageMonths = today.getMonth() - birthDate.getMonth() + (today.getDate() < birthDate.getDate() ? -1 : 0);
				const ageDays = today.getDate() - birthDate.getDate();
			
				setAge({ years: ageYears, months: ageMonths, days: ageDays });
				console.log(setAge)
		}*/

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
				<form onSubmit={handleSubmit}>
					<div className="inputs-container">
						<div className='input-cont-flex'>
							<label htmlFor='day'>Day</label>
							<input
								type="number"
								id="day"
								value={formData.day}
								placeholder="DD"
								onChange={handleChange}
							/>
							<p className="input-error--message"></p>
						</div>

						<div className='input-cont-flex'>
							<label htmlFor='month' >Month</label>
							<input type="number"
								id="month" 
								value={formData.month} 
								placeholder="MM"
								onChange={handleChange} 
							/>
							<p className="input-error--message"></p>
						</div>

						<div className='input-cont-flex'>
							<label htmlFor='year'>Year</label>
							<input type="number"
								id="year"
								value={formData.year}
								placeholder="YYYY" 
								onChange={handleChange}
								/>
							<p className="input-error--message"></p>
						</div>

					</div>

					<div className='btn-container'>
						<div className="line"></div>
						<button className="btn" type='submit'>
							<img src={iconArrow} alt="arrow" 
							className="btn-icon" 
							/>
						</button>
					</div>

				</form>

				<div className="result-container">
					<p ><span className="result">--</span>{age.ageYears}years</p>
					<p><span className="result">--</span>{age.ageMonths}months</p>
					<p><span className="result">--</span>{age.ageDays}days</p>
				</div>

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
  )
}

export default App
