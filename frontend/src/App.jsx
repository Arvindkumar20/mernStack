import { ToastContainer } from 'react-toastify';
import { useEffect,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import axios from 'axios';
import Nav from "./components/Nav"
import  TaskContext  from '../context/taskContext.js';
import AddForm from './components/AddForm.jsx';
import List from './components/List.jsx';
export default function App() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
  return (
    <div>
      <Nav/>
      <TaskContext.Provider value={{tasks,setTasks,addTask}} >

    <AddForm/>
    <List/>    
      </TaskContext.Provider>
  <ToastContainer theme='success' position='top-center'/>
    </div>
  );
}