import React from "react";

const ATM = ({ onChange }) => {
  return (
    <label className="label huge">
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit"></input>
    </label>
  );
};

export default ATM;
