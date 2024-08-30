import React from 'react';
import './LoanSummary.css';

const LoanSummary = ({ loanAmount, interestRate, loanTerm, monthlyPayment }) => {
  return (
    <div className="loan-summary">
      <h2>Loan Summary</h2>
      <p><strong>Loan Amount:</strong> ${loanAmount}</p>
      <p><strong>Interest Rate:</strong> {interestRate}%</p>
      <p><strong>Loan Term:</strong> {loanTerm} years</p>
      <p><strong>Estimated Monthly Payment:</strong> ${monthlyPayment}</p>
    </div>
  );
};

export default LoanSummary;
