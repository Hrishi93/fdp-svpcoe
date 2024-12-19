import logo from './logo.svg';
import './App.css';

function App() {
  const collegeName = "SVPCOT"; //Variable

  const studentDetail ={
    name: "Rahul",
    age: 20,
    branch: "CSE"
    }     // collection / object

    const branches = ["CSE", "DS", "CSBS", "EXTC"] // Array


    const studentsDetail=[
      {name: "Rahul", age: 22, branch: "CSE"},
      {name: "Shyam", age: 20, branch: "CSBS"},
      {name: "Prabha", age: 20, branch: "EXTC"},
    ]
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome in Counter UI</h1>
       <p>College Name : {collegeName}</p>
       <p>Student Details : {studentDetail.name} {studentDetail.age} {studentDetail.branch}</p>
       <p>Braches : {branches[0]} " "
                    {branches[1]}  " "
                    {branches[2]}  " "
         </p>

         <p>
          {studentsDetail[0].name} {studentsDetail[0].age}
         </p>
         <p>
          {studentsDetail[1].name} {studentsDetail[1].age}
         </p>
      </header>
    </div>
  );
}

export default App;
