import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddTodo from './components/todos/AddTodo';
import TodoDetails from './components/todos/TodoDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/todo/:id' component={TodoDetails} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/addTodo' component={AddTodo} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
