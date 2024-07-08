import AddForm from './components/AddForm';
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Nav from "./components/Nav"
import List from './components/List';

export default function App() {

  return (
    <div>
      <Nav/>
      <AddForm/>
  <List/>
  <ToastContainer theme='success' position='top-center'/>
    </div>
  );
}