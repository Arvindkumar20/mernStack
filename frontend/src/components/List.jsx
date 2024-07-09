import {useEffect} from 'react'
import { Table, Button, Form } from 'react-bootstrap';
import { useContext } from 'react';
import TaskContext  from '../../context/taskContext.js';
 import axios from "axios"
 import "../App.css"
export default function List() {
  const {tasks,setTasks}=useContext(TaskContext)
  useEffect(() => {
    axios.get('http://localhost:4000/api/tasks')
        .then(response => setTasks(response.data))
        .catch(error => console.error('Error fetching tasks:', error));
}, []);

  const toggleTaskStatus = (id) => {
    const task = tasks.find(task => task._id === id);
    axios.patch(`http://localhost:4000/api/tasks/${id}`, { completed: !task.completed })
        .then(response => {
            setTasks(tasks.map(task => task._id === id ? response.data : task));
        })
        .catch(error => console.error('Error updating task:', error));
};
const deleteTask = (id) => {
  axios.delete(`http://localhost:4000/api/tasks/${id}`)
      .then(() => {
          setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(error => console.error('Error deleting task:', error));
};
  return (
    <div>
       <div className='my-5'>
       <Table striped bordered hover>
  <thead>
    <tr>
                   <th>Task</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Delete</th>
    </tr>
  </thead>
  <tbody>
                {tasks.map(task => (
                    <tr key={task._id} className={task.completed ? 'table-success completed' : ''}>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td>{task.createdAt}</td>
                        <td>
                            <Form.Check 
                                type="checkbox" 
                                checked={task.completed} 
                                onChange={() => toggleTaskStatus(task._id)} 
                            />
                        </td>
                        <td>
                            <Button variant='danger' onClick={() => deleteTask(task._id)}
                              >Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
</Table>
    </div>
    </div>
  )
}
