import React from "react";
import { useState } from "react";
export default function App21() {
    const [student, setStudent] = useState({ name: "", age: "" });
    const [students, setStudents] = useState([]);
    const addStudent = () => {
      setStudents((prevStudents) => [...prevStudents, student]);
    };
    const deleteStudent = (name) => {
      setStudents(students.filter((e) => e.name !== name));
    };
    const editStudent = (value) => {
      setStudent(value);
      deleteStudent(value.name);
    };
    return (
      <>
        <p><input type="text" value={student.name} onChange={(e) => setStudent((prevStudent) => ({...prevStudent,...{ name: e.target.value },}))}
            placeholder="Enter Name" ></input> </p>
        <p> <input type="text" value={student.age} onChange={(e) => setStudent((prevStudent) => ({...prevStudent,...{ age: e.target.value },}))}
            placeholder="Enter Age"></input></p>
        <p><button onClick={addStudent}>Add Student</button></p>
        <div>
          {students &&
            students.map((value, index) => (
              <div key={index}>
                {value.name}-{value.age} -{" "}
                <button onClick={() => deleteStudent(value.name)}>Delete</button>
                <button onClick={() => editStudent(value)}>Edit</button>
              </div>
            ))}
        </div>
      </>
    );
  }
  