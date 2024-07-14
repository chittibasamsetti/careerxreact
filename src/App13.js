
// React requires state to be immutable. If we want to change a state, we make a copy of it and replace the old state with the new copy. In React, it isn't allowed to change the original state array, so we can't use the push() method. We used the spread syntax (...) to unpack the elements of the existing array into a new array and added another value at the end.
import { useState } from "react";
export default function App6() {
  const [student, setStudent] = useState({ name: "John", age: 3 });
  const [students, setStudents] = useState([]);
  const addStudent = () => {
    setStudents((prevStudents) => [...prevStudents, student]); };
  return (
    <>
      <p> <input type="text" onChange={(e) => setStudent((prevStudent) => ({...prevStudent,name: e.target.value,}))}
          placeholder="Enter Name"></input></p>
      <p><input type="text" onChange={(e) => setStudent((prevStudent) => ({...prevStudent,age: e.target.value,}))}
          placeholder="Enter Age" ></input></p>
      <p><button onClick={addStudent}>Add Student</button></p>
      <div>
        {student.name}-{student.age}
        {students &&
          students.map((value, index) => (
            <div key={index}>
              {value.name}-{value.age}
            </div>
          ))}
      </div>
    </>
  );
}
