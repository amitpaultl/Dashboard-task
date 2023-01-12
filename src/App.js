import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Route from './Dashboard/Route/Route';

function App() {
  return (
    <div>
      <RouterProvider router={Route}>

      </RouterProvider>
    </div>
  );
}

export default App;
