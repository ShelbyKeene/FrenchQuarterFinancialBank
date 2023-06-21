import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const Alldata = ({ users, setUsers }) => {
  //Deletes a users by ID
  const handleDeleteUser = (userId) => {
    // Filter the users array to exclude the user with the provided ID
    const updatedUsers = users.filter((user) => user.id !== userId);
    // Update the users state with the updated array
    setUsers(updatedUsers);
  };

  return (
    <div className="main-Alldata-div">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <Button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Alldata;