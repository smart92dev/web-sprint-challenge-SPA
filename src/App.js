import React from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Home";
import Form from './pages/Form';
import OrderForm from './pages/OrderForm'
import Header from './pages/Header';
import Help from './pages/Help';
import Success from "./pages/Success";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/pizza" element={<OrderForm />} />
        <Route path="/help" element={<Help />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};
export default App;
