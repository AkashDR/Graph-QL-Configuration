import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import "./App.css";

const GET_ALL_STUDENTS = gql`
  query {
    students {
      id
      email
      firstName
      lastName
    }
  }
`;

function App() {
  const [getData, { data }] = useLazyQuery(GET_ALL_STUDENTS);

  const handleClick = () => {
    getData();
  };

  return (
    <div>
      <h1 className="Heading">Students List</h1>
      <button
        className="Button-class"
        onClick={handleClick}
      >
        Get Students Data
      </button>
      <div>
        {data?.students?.map((student) => (
          <ul className="Student-data" key={student?.id}>
            <h4>Student Name: {student?.firstName + student?.lastName}</h4>
            <h4>Student ID: {student?.id}</h4>
            <h4>Student Email: {student?.email}</h4>
            <hr />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
