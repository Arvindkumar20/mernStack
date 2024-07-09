// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import History from '../components/History';
import App from '../App';
import AddForm from '../components/AddForm';
import List from '../components/List';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/addtask',
    element: <AddForm />,
    },
    {
      path: '/list',
      element: <List />,
      },
  {
    path: '/history',
    element: <History />,
    },
  {
    path: '/about',
    element: <About />,
  },

];

const router = createBrowserRouter(routes);

export default router;

