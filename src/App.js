import React from "react";
import { Link, Switch, Route } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Welcome to My Pizza Shop!</h1>
      <Link id="order-pizza" to="/form">Order Pizza</Link> {/* Link to the form with id "order-pizza" */}
    </div>
  );
}

function Form() {
  return (
    <div>
      <h2>Order Pizza Form</h2>
      <form id="pizza-form">
        <input type="text" id="name-input" />
        {/*  */}
      </form>
    </div>
  );
}

function OrderForm() {
  return (
    <div>
      <h2>Pizza Order Form</h2>
      {/*  */}
    </div>
  );
}

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} /> 
      <Route path="/form" component={Form} /> 
      <Route path="/pizza" component={OrderForm} /> 
    </Switch>
  );
};
export default App;
