import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Products from "./pages/products/products";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import CreateProduct from "./pages/createProduct";
import Order from './pages/order/order';
import OrderTable from './pages/order/orderTable';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/order" element={<OrderTable />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}
