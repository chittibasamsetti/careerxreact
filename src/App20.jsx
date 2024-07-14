import React from "react";
import { useState } from "react";
export default function App20() {
  const [student, setStudent] = useState({ name: "John", age: 20 });
  const [students, setStudents] = useState([]);
  const addStudent = () => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) =>
            setStudent((prevStudent) => ({
               ...prevStudent,
              name: e.target.value,
            }))
          }
        ></input>
      </p>
      <p>
        <input
          type="text"
          placeholder="Enter Age"
          onChange={(e) =>
            setStudent((prevStudent) => ({
              ...prevStudent,
              age: e.target.value,
            }))
          }
        ></input>
      </p>
      <p>
        <button onClick={addStudent}>Add Student</button>
      </p>
      <div>
        {/* {student.name}-{student.age} */}
        {students.map((value, index) => (
          <div key={index}>
            {value.name}-{value.age}
          </div>
        ))}

      </div>
    </div>
  );
}
