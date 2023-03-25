import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/pages/home';
import Products from './components/pages/products';
import Login from './components/pages/login/login';
import Register from "./components/pages/register/register";
import CreateProduct from './components/pages/createProduct';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/product" element={<Products/>} />
        <Route path="/product/:id" element={<CreateProduct/>} />
      </Routes>
    </div>
  );
}
