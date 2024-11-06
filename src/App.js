import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Login from './Components/Login'
import Res from './Components/Res';
import ImgTasks from './Components/ImgTasks';

function App() {
  return (
    <div className="App">
        <Nav /> <br />
        <Login />
        <Outlet />
    </div>
  );
}

export default App;
