import React from 'react';
import { Footer } from './component/Footer';
import Navbar from "./component/Navbar";
import { Todos } from './component/Todos';
import { useState, useEffect } from 'react';
import { AddTodo } from './component/AddTodo';
import { About } from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am Delete")

    setTodos(todos.filter((element) => {
      return element !== todo;
    }))
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, des) => {
    console.log("i am adding this Todo", title, des);
    let sno;

    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      des: des
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Router>
        <Navbar title="My Todos List" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  )
}