// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import AuthHeader from "./components/Header";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <AuthHeader></AuthHeader>
//     </>
//   );
// }

// export default App;

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/actions";
import GlobalLoader from "./components/GlobalLoader";

import { selectUser, selectAuth } from "./redux/selectors";
import axios from "axios";
import EmployeeForm from "./components/EmployeeForm";
import { useEffect, useState } from "react";

const apiUrl = import.meta.env.REACT_APP_API_URL;
console.log(apiUrl);

function App() {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState([]);
  const user = useSelector(selectUser);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/employees`);
      console.log(response.data);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/employees/${id}`);
      fetchEmployee();
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div>
      <GlobalLoader />

      <h1>Welcome New</h1>
      {/* <button onClick={() => fetchEmployee()}>Fetch Employees</button> */}
      {/* <button onClick={() => dispatch(fetchUser())}>Fetch User</button> */}
      <EmployeeForm fetchEmployee={fetchEmployee} />
      <div style={{ margin: 100 }}>
        {employees.map((item) => {
          return (
            <div
              style={{
                width: "400px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>{item.id}</p>
              <p>{item.firstName}</p>
              <p>{item.lastName}</p>
              <p>{item.email}</p>
              <p>{item.password}</p>
              <button onClick={() => deleteEmployee(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
