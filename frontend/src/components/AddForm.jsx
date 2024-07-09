import { useState } from "react"
import axios from "axios"
import { useContext } from 'react';
import TaskContext  from '../../context/taskContext.js';
export default function AddForm() {
  const {addTask}=useContext(TaskContext)
    const [formData,setFormData]=useState({
      name:"",
      description:"",
    })
 
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:4000/api/tasks', formData);
          console.log('Task saved:', response.data);
          addTask(response.data);
          setFormData({ name: '', description: ''});
      } catch (error) {
          console.error('Error saving task:', error);
      }
  };
         return (
    <>
    <div className="container w-50 bg-dark my-3 p-5 rounded">
        <h1 className="text-light">   Add Your Tasks In Task List</h1>
      <form onSubmit={handleSubmit}>
<div className="d-flex  justify-content-center flex-column mt-5">
<div className="mb-3">
<label htmlFor="TaskName" className="form-label text-light">Task</label>
    <input 
    type="text" 
  name="name"
    value={formData.name}
    className="form-control p-2" 
    id="exampleInputPassword1"
    onChange={handleChange}/>
  </div>
  <div className="mb-3">
<label htmlFor="TaskName" className="form-label text-light">Task Description</label>
    <input 
    type="text" 
    name="description"
    className="form-control p-2"
     id="exampleInputPassword1"
     value={formData.description}
     onChange={handleChange}/>
  </div>
<div className="mx-auto mt-5">
<button type="submit" className="btn btn-primary text-light py-2 px-5"
>Add</button>
</div>
</div>
</form>
    </div>
    </>
  )
}
