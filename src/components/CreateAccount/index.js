import React, { useState } from "react";
import "./index.css";

function CreateAccount({ users, setUsers }) {
console.log(users,"Create Component")
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(firstName, lastName, email, password);
    if (!validate(firstName, "first name")) return;
    if (!validate(lastName, "last name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if (firstName.search(/[A-Z]/) === -1) {
      alert("First Name Needs UpperCase");
      return null;
    }

    if (lastName.search(/[A-Z]/) === -1) {
      alert("Last Name Needs UpperCase");
      return null;
    }

    if (email.search("@") === -1) {
      alert("Please enter a valid email address");
      return null;
    }
    
    if (password.search(/[A-Z]/) === -1) {
      alert("Password Needs UpperCase ");
      return null;
    }
    if (password.length < 8) {
      alert("Password to short needs 8 characters");
      return null;
    }
    const newUser= {firstName, lastName, email, password};
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setShow(false);
  }

  function clearForm() {
    setfirstName("");
    setlastName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <div status={status}>

      {show ? (
        <div>
          First Name
          <br />
          <input
            type="input"
            className="form-control"
            id="name"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setfirstName(e.currentTarget.value)}
          />
          <br />
          Last Name
          <br />
          <input
            type="input"
            className="form-control"
            id="name"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.currentTarget.value)}
          />
          <br />
          Email address
          <br />
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <br />
          Password
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleCreate}
          >
            Create Account
          </button>
        </div>
      ) : (
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>
            Add another account
          </button>
        </>
      )}
    </div>
  );
}

export default CreateAccount;