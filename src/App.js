import React from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Home";
import Form from './pages/Form';
import OrderForm from './pages/OrderForm'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/form" element={<Form />} />
      <Route path="/pizza" element={<OrderForm />} />
    </Routes>
  );
};
export default App;
