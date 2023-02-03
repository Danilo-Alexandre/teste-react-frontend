import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginScene from './Scenes/LoginScene';
import UsersScene from './Scenes/UsersScene';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScene/>} />
        <Route path="/usuarios" exact={true} element={<UsersScene/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
