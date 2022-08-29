import "./App.scss";
import { Button, Form } from "reactstrap";
import React from "react";


function App() {
  const [list, setList]=React.useState([]);
  const [name, setName]=React.useState("");
  const [surname, setSurname]=React.useState("");
  const [salary, setSalary]=React.useState(""); 

  let setInputName=(event)=>{
    setName(event.target.value);
  }

  let setInputSurname=(event)=>{
    setSurname(event.target.value);
  }

  let setInputSalary=(event)=>{
    setSalary(event.target.value);
  }

  const addEmployersListSubmit=(event)=>{
    event.preventDefault();
    let employer={name, surname,salary};
    setList([...list,employer]);    
    setName('');
    setSurname('');
    setSalary('');
  }

  React.useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list]);

  

  return (
    <div className="App">
      <Form className="py-4">
        <label>Name: </label>
        <input type="text" onChange={setInputName}/>

        <label className="ps-4 pe-2">Surname: </label>
        <input type="text" onChange={setInputSurname}/>

        <label className="ps-4 pe-2">Salary: </label>
        <input type="number" onChange={setInputSalary}/>

        <Button className="ms-4 fw-bold" variant="success" onClick={addEmployersListSubmit} value={salary}>
          +
        </Button>
      </Form>
    </div>
  );
}

export default App;
