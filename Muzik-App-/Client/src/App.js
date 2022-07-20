import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="search" element={<Search/>} />
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}
export default App;
