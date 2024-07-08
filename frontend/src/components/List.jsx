import {useState,useEffect} from 'react'
 import axios from "axios"
export default function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      const fetchTasks = async () => {
          try {
              const response = await axios.get('http://localhost:4000/api/tasks');
              setTasks(response.data);
          } catch (error) {
              console.error('Error fetching tasks:', error);
          }
      };
      fetchTasks();
  }, []);
  return (
    <div>
       <div className="container col-8">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Task Description</th>
      <th scope="col">Date Time</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
 
{
  (tasks.length)?tasks.map((item,index) => {
    return(
    <tr key={index}>
      <td>{item.name}</td>
 <td>{item.description}</td>
 <td>{item.createdAt}</td>
 <td>{(item.completed? "Completed":"Not Completed")}</td>

</tr>
)}):
 <tr>
  <td>No Data</td>
 </tr>
      }

  </tbody>
</table>
    </div>
    </div>
  )
}
