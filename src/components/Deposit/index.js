import React from "react";
import ATM from '../ATM'
const Deposit = ({totalState, setTotalState}) => {
  let transactionState = 0; // state of this transaction
  let status = `Account Balance $ ${totalState}`;
  
  const handleChange = event => {
    transactionState = Number(event.target.value);
  };
  const handleSubmit = (event) => {
    setTotalState(totalState + transactionState);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      Deposit
      <ATM onChange={handleChange}></ATM>
    </form>
  );
};

export default Deposit;