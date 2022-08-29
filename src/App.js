import { Button, Form, Table } from "reactstrap";
import React, { useEffect } from "react";


function App() {
  const [data, setData] = React.useState([]);

  const [form, setForm] = React.useState({
    id: 0,
    name: '',
    surname: '',
    salary: ''
  });

  const saveItem = () => {

    if (form.name === '' || form.surname === '' || form.salary === '') { alert('Butun deyerleri daxil edin'); return; }

    if (Number(form.salary) < 1) { alert('emek haqqi 0-dan boyuk olmalidir'); return; }

    data.push({
      id: data.length===0?1:Number(data[data.length-1].id + 1),
      name: form.name,
      surname: form.surname,
      salary: form.salary
    })
    localStorage.setItem('data', JSON.stringify(data));
    setForm({
      id: 0,
      name: '',
      surname: '',
      salary: ''
    })
  };

  useEffect(() => {
    const list = localStorage.getItem('data') ?? [];
    setData(Array.isArray(list) ? [] : JSON.parse(list));
  }, []);

  const removeItem=(index)=>{
    data.splice(index,1);
    localStorage.setItem('data',JSON.stringify(data));
    setData([...data]);
  }


  return (
    <div className="App">

      <Form className="py-1 my-5 mx-auto d-flex justify-content-center">
        <label className="ps-4 pe-2">Name: </label>
        <input type="text" onChange={(event) => setForm({ ...form, name: event.target.value })} value={form.name} />

        <label className="ps-4 pe-2">Surname: </label>
        <input type="text" onChange={(event) => setForm({ ...form, surname: event.target.value })} value={form.surname} />

        <label className="ps-4 pe-2">Salary: </label>
        <input type="number" onChange={(event) => setForm({ ...form, salary: event.target.value })} value={form.salary} />

        <Button className="ms-4 fw-bold btn btn-success py-1 px-3" variant="success" onClick={saveItem} type="number">
          add
        </Button>
      </Form>

      <div className="w-50 mx-auto d-flex justify-content-center row">
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((dataItem,index) => (
              <tr key={dataItem.id} className="my-2">
                <th scope="row">{dataItem.id}</th>
                <td>{dataItem.name}</td>
                <td>{dataItem.surname}</td>
                <td>{dataItem.salary}</td>
                <td><Button className="btn btn-danger fw-bold ms-2" onClick={()=>removeItem(index)}>X</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </div>
  );
}

export default App;
