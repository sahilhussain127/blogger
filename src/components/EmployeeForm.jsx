import React, { useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.REACT_APP_API_URL;
console.log(apiUrl);

const EmployeeForm = ({ fetchEmployee }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/employees`, employee);
      console.log("Employee saved:", response.data);
      setEmployee({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error submitting employee:", error);
      alert("Submission failed. See console for error.");
    }
    fetchEmployee();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={employee.firstName}
          onChange={handleChange}
          required
        />
        <br />

        {/* <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />
        <br />

        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={employee.lastName}
          onChange={handleChange}
        />
        <br />

        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={employee.password}
          onChange={handleChange}
        />
        <br />
        <br /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
