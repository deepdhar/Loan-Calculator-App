import React, { useState } from 'react';
import './LoanCalculator.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(8.75);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(loanTerm) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (!isNaN(monthly) && (monthly !== Infinity)) {
      setMonthlyPayment(monthly.toFixed(2));
    } else {
      setMonthlyPayment('Invalid input');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // calculateMonthlyPayment();
    setTimeout(() => {
      setSubmissionStatus('Loan details submitted successfully.');
    }, 1000);
  };

  return (
    <div className="loan-calculator">
      <h2>Home Loan EMI Calculator</h2>
      <div className="form-group">
        <label>Loan Amount</label>
        <input
          type="range"
          min="100000"
          max="100000000"
          step="100000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <div className="value-display">₹ {loanAmount.toLocaleString()}</div>
      </div>
      <div className="form-group">
        <label>Tenure (Years)</label>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
        <div className="value-display">{loanTerm} Years</div>
      </div>
      <div className="form-group">
        <label>Interest Rate (% P.A.)</label>
        <input
          type="range"
          min="0.5"
          max="15"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <div className="value-display">{interestRate} %</div>
      </div>
      <button className="calc-button" onClick={calculateMonthlyPayment}>Calculate EMI</button>
      {monthlyPayment && (
        <div className="emi-display">
          <h3>Monthly Home Loan EMI</h3>
          <div className="emi-amount">₹ {monthlyPayment.toLocaleString()}</div>
        </div>
      )}
      <button className="cta-button">Talk To Our Loan Expert</button>
      <button className="cta-button" onClick={handleSubmit}>Submit Loan Details!</button>

      {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
    </div>
  );
};

export default LoanCalculator;
