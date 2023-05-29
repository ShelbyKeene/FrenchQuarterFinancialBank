import React from "react";

const Alldata = ({ users }) => {

  const listItems = users.map((user) => (
    <div key={user.id}>
      <h3>First Name :{user.firstName}</h3>
      <h3>Last Name :{user.lastName}</h3>
      <h4>Email: {user.email}</h4>
      <h5>Password: {user.password}</h5>
    </div>
  ));
  return (
  <div key={listItems.id}>
    {listItems}
    </div>
    )
};

export default Alldata;


