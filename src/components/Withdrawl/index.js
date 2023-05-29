import React from "react";
import ATM from '../ATM'
const Withdrawl = ({totalState, setTotalState}) => {
  let transactionState = 0; // state of this transaction
  let status = `Account Balance $ ${totalState}`;
  
  const handleChange = (event) => {
    transactionState = Number(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (totalState - transactionState < 0){
      alert("Insufficient Funds. Can not witdraw beyond available balance.");
      return;
    }
  
    setTotalState(totalState-transactionState);
  };

  
return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      Withdrawl
      <ATM onChange={handleChange}></ATM>
    </form>
  );
};

export default Withdrawl;