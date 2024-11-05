import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Login from './Components/Login'
import Res from './Components/Res';
import Tasks from './Components/Tasks';

function App() {
  return (
    <div className="App">
        <Nav /> <br />
        <Res />
        <Tasks />
        <Outlet />
    </div>
  );
}

export default App;
