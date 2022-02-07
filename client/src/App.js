// import logo from './logo.svg';
import "./App.css";
import Login from "./components/Login";
import Room from "./components/Room";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Login />
      <Routes>
        <Route path="/room" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
